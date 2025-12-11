# ARVB Markdown Alerts

Beautiful styled alerts for Markdown preview in Visual Studio Code. Add colorful, professional-looking alerts to your Markdown documents with a simple syntax.

## Features

- **5 Alert Types**: Success, Info, Warning, Danger, and Spoiler
- **Rich Content Support**: Use Markdown formatting inside alerts (lists, code blocks, links, emphasis, etc.)
- **Theme Aware**: Automatically adapts to VS Code themes (light, dark, high contrast)
- **Spoiler Support**: Collapsible content with custom titles using HTML5 `<details>`/`<summary>` elements
- **Lightweight**: No external dependencies beyond markdown-it
- **Secure**: Built-in XSS protection with HTML escaping

## Installation

### From VSIX File

1. Download the latest `arvb-markdown-alerts-1.0.0.vsix` file
2. Open VS Code
3. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
4. Type "Install from VSIX" and select "Extensions: Install from VSIX..."
5. Select the downloaded `.vsix` file
6. Reload VS Code when prompted

### From Source

```bash
# Clone the repository
git clone https://github.com/alternative-rvb/arvb-markdown-alerts.git
cd arvb-markdown-alerts

# Install dependencies
npm install

# Compile the extension
npm run compile

# Package the extension
npm run package

# Install the generated .vsix file
code --install-extension arvb-markdown-alerts-1.0.0.vsix
```

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

## Visual Guide

```
┌─────────────────────────────────────────┐
│ ✓ Success Alert (Green)                │
│ Operation completed successfully!       │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ ℹ Info Alert (Blue)                     │
│ Here's some useful information.         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ ⚠ Warning Alert (Yellow/Orange)         │
│ Please review before proceeding.        │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ ✖ Danger Alert (Red)                    │
│ Critical error detected!                │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ ▶ Spoiler Alert (Gray, Collapsible)    │
│ [Click to expand/collapse]              │
└─────────────────────────────────────────┘
```

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

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

MIT License - Copyright (c) 2024-2025 Alternative RVB

See [LICENSE](LICENSE) file for details.

## Author

**Alternative RVB**

## Acknowledgments

- Built with [markdown-it](https://github.com/markdown-it/markdown-it)
- Inspired by GitHub-flavored Markdown alerts
- Developed for the VS Code community

---

**Enjoy using ARVB Markdown Alerts!** If you find this extension useful, please consider giving it a star ⭐
