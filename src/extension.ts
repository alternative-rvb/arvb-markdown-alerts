import * as vscode from 'vscode';
import type MarkdownIt from 'markdown-it';

// Allowed alert types
const ALERT_TYPES = ['success', 'info', 'warning', 'danger', 'spoiler'] as const;
type AlertType = typeof ALERT_TYPES[number];

/**
 * Validates if a string is a valid alert type
 */
function isValidAlertType(type: string): type is AlertType {
    return ALERT_TYPES.includes(type as AlertType);
}

/**
 * Escapes HTML to prevent XSS attacks
 */
function escapeHtml(text: string): string {
    const map: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
}

/**
 * Alert block parser for markdown-it
 * Matches blocks starting with :::TYPE and ending with :::
 */
function alertBlockRule(state: any, startLine: number, endLine: number, silent: boolean): boolean {
    const pos = state.bMarks[startLine] + state.tShift[startLine];
    const max = state.eMarks[startLine];

    // Check if line starts with :::
    if (pos + 3 > max) return false;

    const marker = state.src.slice(pos, pos + 3);
    if (marker !== ':::') return false;

    const markup = state.src.slice(pos, max);
    const params = markup.slice(3).trim();

    // Opening marker must have a type
    if (!params) return false;

    // Extract alert type (first word) and title (remaining text)
    const parts = params.split(/\s+/);
    const alertType = parts[0].toLowerCase();
    const title = parts.slice(1).join(' ');

    // Validate alert type against whitelist
    if (!isValidAlertType(alertType)) return false;

    // Since we found a valid opening marker, search for the closing marker
    let nextLine = startLine;
    let autoClosed = false;

    // Search for closing :::
    while (nextLine < endLine) {
        nextLine++;
        if (nextLine >= endLine) break;

        const linePos = state.bMarks[nextLine] + state.tShift[nextLine];
        const lineMax = state.eMarks[nextLine];

        if (linePos < lineMax && state.sCount[nextLine] < state.blkIndent) {
            // non-empty line with negative indent should stop the list
            break;
        }

        const closingMarker = state.src.slice(linePos, lineMax).trim();
        if (closingMarker === ':::') {
            autoClosed = true;
            break;
        }
    }

    const oldParent = state.parentType;
    const oldLineMax = state.lineMax;
    state.parentType = 'alert';

    // If in silent mode (checking), return true to indicate we can parse this
    if (silent) return true;

    // Create opening token
    const tokenOpen = state.push('alert_open', 'div', 1);
    tokenOpen.markup = ':::';
    tokenOpen.block = true;
    tokenOpen.info = alertType;
    tokenOpen.meta = { title }; // Store title for renderer
    tokenOpen.map = [startLine, nextLine];

    // Parse the content between the markers
    if (autoClosed && nextLine > startLine + 1) {
        state.lineMax = nextLine;
        state.md.block.tokenize(state, startLine + 1, nextLine);
        state.lineMax = oldLineMax;
    }

    // Create closing token
    const tokenClose = state.push('alert_close', 'div', -1);
    tokenClose.markup = ':::';
    tokenClose.block = true;

    state.parentType = oldParent;
    state.line = nextLine + (autoClosed ? 1 : 0);

    return true;
}

/**
 * Renderer for alert opening tag
 */
function renderAlertOpen(tokens: any[], idx: number): string {
    const token = tokens[idx];
    const alertType = token.info;
    const title = token.meta?.title || '';

    // Escape the type and title for security
    const safeType = escapeHtml(alertType);
    const safeTitle = escapeHtml(title);

    // For spoiler type, use <details> and <summary> tags
    if (alertType === 'spoiler') {
        const summaryContent = safeTitle || 'Spoiler';
        return `<details class="alert alert-${safeType}">\n<summary>${summaryContent}</summary>\n`;
    }

    // For other alert types, use <div>
    return `<div class="alert alert-${safeType}" role="alert" data-alert-type="${safeType}">\n`;
}

/**
 * Renderer for alert closing tag
 */
function renderAlertClose(tokens: any[], idx: number): string {
    // Find the corresponding opening token
    let openIdx = idx - 1;
    while (openIdx >= 0 && tokens[openIdx].type !== 'alert_open') {
        openIdx--;
    }

    const alertType = openIdx >= 0 ? tokens[openIdx].info : '';

    // For spoiler type, close with </details>
    if (alertType === 'spoiler') {
        return '</details>\n';
    }

    // For other alert types, close with </div>
    return '</div>\n';
}

/**
 * Checks for conflicting extensions and shows a warning
 */
function checkForConflictingExtensions() {
    const conflictingExtensions = [
        {
            id: 'yzhang.markdown-all-in-one',
            name: 'Markdown All in One'
        }
    ];

    for (const ext of conflictingExtensions) {
        const extension = vscode.extensions.getExtension(ext.id);
        if (extension) {
            vscode.window.showWarningMessage(
                `ARVB Markdown Alerts: Conflict detected! "${ext.name}" is incompatible with this extension. ` +
                `Alerts may not render correctly. Please disable or uninstall "${ext.name}" to use ARVB Markdown Alerts.`,
                'Open Extensions'
            ).then(selection => {
                if (selection === 'Open Extensions') {
                    vscode.commands.executeCommand('workbench.extensions.search', ext.id);
                }
            });
        }
    }
}

/**
 * Activate the extension
 */
export function activate(context: vscode.ExtensionContext) {
    // Check for conflicting extensions on activation
    checkForConflictingExtensions();

    return {
        extendMarkdownIt(md: MarkdownIt) {
            // Register the block rule for alerts
            md.block.ruler.before('fence', 'alert', alertBlockRule, {
                alt: ['paragraph', 'reference', 'blockquote', 'list']
            });

            // Register renderers
            md.renderer.rules.alert_open = renderAlertOpen;
            md.renderer.rules.alert_close = renderAlertClose;

            return md;
        }
    };
}

/**
 * Deactivate the extension
 */
export function deactivate() {
    // Nothing to clean up
}
