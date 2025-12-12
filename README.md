# ARVB Markdown Alerts

Add beautiful, colorful alerts to your Markdown documents with a simple syntax. Perfect for documentation, README files, notes, and any Markdown content in VS Code.

![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/alternative-rvb.arvb-markdown-alerts)
![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/alternative-rvb.arvb-markdown-alerts)
![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/alternative-rvb.arvb-markdown-alerts)

## Features

- ✓ **5 Alert Types**: Success, Info, Warning, Danger, and Spoiler
- ✓ **Rich Content Support**: Use full Markdown formatting inside alerts (lists, code blocks, links, emphasis, etc.)
- ✓ **Theme Aware**: Automatically adapts to VS Code themes (light, dark, high contrast)
- ✓ **Spoiler Support**: Collapsible content with custom titles using HTML5 `<details>`/`<summary>` elements
- ✓ **Lightweight**: Minimal footprint, fast rendering
- ✓ **Secure**: Built-in XSS protection with HTML escaping

## Quick Start

1. Install the extension from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=alternative-rvb.arvb-markdown-alerts)
2. Open any Markdown file
3. Add an alert using the `:::type` syntax
4. Open Markdown preview (`Ctrl+K V` or `Cmd+K V` on Mac)

## Installation

### From VS Code Marketplace (Recommended)

1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X` or `Cmd+Shift+X` on Mac)
3. Search for "ARVB Markdown Alerts"
4. Click **Install**

### From VSIX File

1. Download the latest `.vsix` file from [Releases](https://github.com/alternative-rvb/arvb-markdown-alerts/releases)
2. Open VS Code
3. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
4. Type "Install from VSIX" and select **Extensions: Install from VSIX...**
5. Select the downloaded `.vsix` file

## Usage

### Basic Syntax

```markdown
:::TYPE
Your alert content here
:::
```

Where `TYPE` is one of: `success`, `info`, `warning`, `danger`, or `spoiler`

**For spoiler alerts**, you can add a custom title:

```markdown
:::spoiler Title
Your spoiler content here
:::
```

### Examples

#### Success Alert

```markdown
:::success
Operation completed successfully!
:::
```

**Result:** Green alert with checkmark icon ✓

#### Info Alert

```markdown
:::info
Here's some useful information for you.
:::
```

**Result:** Blue alert with info icon ℹ

#### Warning Alert

```markdown
:::warning
Please review this carefully before proceeding.
:::
```

**Result:** Yellow/orange alert with warning icon ⚠

#### Danger Alert

```markdown
:::danger
Critical error! Immediate action required.
:::
```

**Result:** Red alert with X icon ✖

#### Spoiler Alert

```markdown
:::spoiler Click to reveal
This content is hidden until you click!
:::
```

**Result:** Collapsible `<details>` element with custom title 👁

### Rich Content Examples

#### Alert with Code Block

```markdown
:::info
To install the package, run:

\```bash
npm install package-name
\```
:::
```

#### Alert with List

```markdown
:::success
**Deployment Complete!**

- Frontend deployed
- Backend deployed
- Database migrated
- Cache cleared
:::
```

#### Alert with Links and Emphasis

```markdown
:::warning
*Important:* Please read the [documentation](https://example.com) before proceeding.
:::
```

## Testing

A comprehensive test file is included: `test-alerts.md`

1. Open `test-alerts.md` in VS Code
2. Press `Ctrl+K V` (or `Cmd+K V` on Mac) to open Markdown preview
3. Verify all 5 alert types display correctly with proper styling

## Visual Preview

| Alert Type | Icon | Color | Use Case |
|------------|------|-------|----------|
| **Success** | ✓ | Green | Confirmations, successful operations |
| **Info** | ℹ | Blue | General information, tips |
| **Warning** | ⚠ | Yellow/Orange | Cautions, important notes |
| **Danger** | ✖ | Red | Errors, critical warnings |
| **Spoiler** | 👁 | Gray | Collapsible hidden content |

> **Note:** All alerts automatically adapt to your VS Code theme (light/dark/high contrast)

## Development

### Prerequisites

- Node.js 22.21.1 or higher
- VS Code 1.80.0 or higher
- npm or yarn

### Build Commands

```bash
# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Watch mode for development
npm run watch

# Package extension
npm run package
```

### Project Structure

```
arvb-markdown-alerts/
├── src/
│   └── extension.ts       # Main extension code
├── media/
│   └── alerts.css        # Alert styles
├── test-alerts.md        # Comprehensive test file
├── package.json          # Extension manifest
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

### How It Works

1. The extension registers a custom markdown-it plugin via `extendMarkdownIt`
2. The plugin adds a block parser that detects `:::TYPE` syntax
3. Valid alert types are parsed and converted to HTML:
   - Regular alerts use `<div>` elements with appropriate CSS classes
   - Spoiler alerts use `<details>`/`<summary>` elements for collapsible content
4. The CSS file (`media/alerts.css`) is injected into the Markdown preview
5. Styles adapt automatically to VS Code's current theme

## Compatibility

- **VS Code Version:** 1.80.0 or higher (tested on 1.107.0)
- **Platform:** Windows, macOS, Linux
- **Themes:** Light, Dark, High Contrast
- **Electron:** 39.2.3+
- **Chromium:** 142.0.7444.175+
- **Node.js:** 22.21.1+

## Security

- All user input is escaped to prevent XSS attacks
- Alert types are validated against a whitelist
- No external dependencies that could introduce vulnerabilities
- Content Security Policy (CSP) compatible

## Troubleshooting

### Alerts not showing in preview

1. Make sure the extension is installed and enabled
2. Reload VS Code (`Ctrl+Shift+P` > "Reload Window")
3. Open Markdown preview (`Ctrl+K V`)
4. Check syntax: markers must be `:::` (three colons)

### Styling issues

1. Verify you're using a valid alert type: success, info, warning, danger, or spoiler
2. Check that the closing `:::` marker is present
3. Try reloading the Markdown preview

### Spoiler not collapsible

1. Make sure you're viewing in the Markdown preview (not the editor)
2. Verify the spoiler syntax includes a title: `:::spoiler Title`
3. Try clicking on the summary to expand/collapse
4. Check browser console for any errors

## Known Issues & Compatibility

### ⚠️ Extension Conflicts

**Markdown All in One (yzhang.markdown-all-in-one)** is **incompatible** with ARVB Markdown Alerts.

Both extensions modify the markdown-it parser, which causes conflicts in the rendering pipeline. If you have both extensions installed, alerts may:
- Not render at all (displayed as raw `:::` syntax)
- Render incorrectly with wrong styles
- Cause the extension to fail silently

**Solution:** Disable or uninstall "Markdown All in One" to use ARVB Markdown Alerts.

The extension will automatically detect this conflict and display a warning notification if both extensions are active.

### Remote Development (WSL, SSH, Dev Containers)

This extension works correctly in remote development environments (WSL, SSH, Dev Containers). If you encounter issues:

1. Ensure the extension is installed **in the remote environment**, not just locally
2. Look for "Install in WSL" or "Install in SSH" buttons in the Extensions view
3. Reload the VS Code window after installation

## Why Choose ARVB Markdown Alerts?

- **No Configuration Required**: Works out of the box, no settings to configure
- **Lightweight & Fast**: Minimal performance impact on VS Code
- **Standards Compliant**: Uses semantic HTML5 elements
- **Secure by Design**: All content is properly escaped to prevent XSS
- **Open Source**: MIT licensed, community-driven development

## Support & Feedback

- **Issues**: Report bugs or request features on [GitHub Issues](https://github.com/alternative-rvb/arvb-markdown-alerts/issues)
- **Discussions**: Join the conversation on [GitHub Discussions](https://github.com/alternative-rvb/arvb-markdown-alerts/discussions)
- **Reviews**: Leave a review on the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=alternative-rvb.arvb-markdown-alerts&ssr=false#review-details)

## Contributing

Contributions are welcome! Please feel free to:

- Submit bug reports and feature requests
- Create pull requests for improvements
- Share your use cases and feedback
- Help improve documentation

See our [GitHub repository](https://github.com/alternative-rvb/arvb-markdown-alerts) for more details.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for release history.

## License

MIT License - Copyright (c) 2024-2025 Alternative RVB

See [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [markdown-it](https://github.com/markdown-it/markdown-it)
- Inspired by GitHub-flavored Markdown alerts
- Developed with ❤️ for the VS Code community

---

**Enjoying ARVB Markdown Alerts?**

⭐ Star us on [GitHub](https://github.com/alternative-rvb/arvb-markdown-alerts) | 📝 Leave a [review](https://marketplace.visualstudio.com/items?itemName=alternative-rvb.arvb-markdown-alerts&ssr=false#review-details) | 🐛 [Report issues](https://github.com/alternative-rvb/arvb-markdown-alerts/issues)
