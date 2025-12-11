# VS Code Workspace Configuration

This directory contains the development workspace configuration for the ARVB Markdown Alerts extension.

## Files

### [launch.json](launch.json)
Debug configurations for the extension:
- **Run Extension**: Launch the extension in a new VS Code window (F5)
- **Extension Tests**: Run tests in debug mode

### [tasks.json](tasks.json)
Build tasks for development:
- **npm: compile** (default build task - `Ctrl+Shift+B`)
- **npm: watch** - Continuous compilation on file changes
- **npm: package** - Create `.vsix` package for distribution

### [extensions.json](extensions.json)
Recommended VS Code extensions for contributors:
- ESLint - JavaScript/TypeScript linting
- Prettier - Code formatting
- TypeScript - Enhanced TypeScript support

### [settings.json](settings.json)
Workspace settings for consistent development experience:
- Auto-format on save
- TypeScript configuration
- File/search exclusions
- Language-specific formatting rules

## Usage

### Debugging the Extension

1. Open the project in VS Code
2. Press `F5` or select **Run > Start Debugging**
3. A new VS Code window opens with the extension loaded
4. Open a Markdown file and preview it to test your changes

### Compiling TypeScript

**Manual compilation:**
```bash
npm run compile
```

**Watch mode (auto-recompile on changes):**
```bash
npm run watch
```

**Using VS Code tasks:**
- Press `Ctrl+Shift+B` to run the default build task
- Or `Ctrl+Shift+P` > "Tasks: Run Task" > Select a task

### Creating a Package

```bash
npm run package
```

This creates a `.vsix` file that can be installed in VS Code.

## Customizing Settings

If you need personal settings that differ from the workspace defaults:

1. Create a `.vscode/settings.local.json` file (gitignored)
2. Add your custom settings there
3. They will override workspace settings for your local environment

Example `.vscode/settings.local.json`:
```json
{
  "editor.fontSize": 14,
  "workbench.colorTheme": "Monokai"
}
```

## See Also

- [CONTRIBUTING.md](../CONTRIBUTING.md) - Full contribution guide
- [PUBLISHING.md](../PUBLISHING.md) - How to publish to marketplace
- [package.json](../package.json) - Extension manifest and scripts
