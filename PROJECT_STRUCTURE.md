# Project Structure

This document explains the organization of the ARVB Markdown Alerts extension project.

## Directory Tree

```
arvb-markdown-alerts/
├── .vscode/                    # VS Code workspace configuration
│   ├── extensions.json         # Recommended extensions for contributors
│   ├── launch.json             # Debug configurations
│   ├── settings.json           # Workspace settings
│   ├── tasks.json              # Build tasks
│   └── README.md               # Workspace configuration guide
│
├── media/                      # Static assets
│   └── alerts.css              # Alert styles for all themes
│
├── src/                        # TypeScript source code
│   └── extension.ts            # Main extension logic
│
├── out/                        # Compiled JavaScript (generated, gitignored)
│   ├── extension.js            # Compiled extension
│   └── extension.js.map        # Source maps
│
├── node_modules/               # Dependencies (gitignored)
│
├── .editorconfig               # Editor configuration for consistent coding style
├── .gitignore                  # Files to ignore in Git
├── .vscodeignore               # Files to exclude from .vsix package
│
├── CHANGELOG.md                # Version history and release notes
├── CONTRIBUTING.md             # Guide for contributors
├── LICENSE                     # MIT License
├── PUBLISHING.md               # How to publish to VS Code Marketplace
├── README.md                   # Main documentation (shown on Marketplace)
├── SECURITY.md                 # Security policy and vulnerability reporting
│
├── icon.png                    # Extension icon (128x128 minimum)
├── package.json                # Extension manifest and dependencies
├── package-lock.json           # Locked dependency versions
├── test-alerts.md              # Test file with all alert examples
├── tsconfig.json               # TypeScript compiler configuration
│
└── arvb-markdown-alerts-*.vsix # Packaged extension (generated, gitignored)
```

## Key Directories

### `.vscode/` - Development Configuration
Contains VS Code workspace settings for a consistent development experience:
- Debug configurations (F5 to test)
- Build tasks (Ctrl+Shift+B to compile)
- Recommended extensions
- Editor settings

**For developers**: These settings are committed to the repo to ensure consistency across all contributors.

### `src/` - Source Code
TypeScript source code:
- `extension.ts` - Main extension logic, parser, and HTML renderer
- Implements markdown-it plugin for custom alert blocks
- Contains XSS protection and input validation

### `media/` - Static Assets
CSS files injected into Markdown preview:
- `alerts.css` - Alert styles for light, dark, and high-contrast themes
- Pure CSS, no JavaScript

### `out/` - Build Output
Generated JavaScript from TypeScript compilation:
- Created by `npm run compile`
- Gitignored but included in `.vsix` package
- Contains source maps for debugging

## Key Files

### Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Extension manifest, metadata, and dependencies |
| `tsconfig.json` | TypeScript compiler configuration |
| `.editorconfig` | Code style rules for editors |
| `.gitignore` | Files to exclude from Git |
| `.vscodeignore` | Files to exclude from published package |

### Documentation Files

| File | Audience | Purpose |
|------|----------|---------|
| `README.md` | End users | Main documentation, shown on VS Code Marketplace |
| `CHANGELOG.md` | End users | Version history and release notes |
| `CONTRIBUTING.md` | Contributors | How to contribute to the project |
| `PUBLISHING.md` | Maintainers | How to publish to Marketplace |
| `SECURITY.md` | Security researchers | Security policy and vulnerability reporting |
| `LICENSE` | Everyone | MIT License terms |

### Source Files

| File | Purpose |
|------|---------|
| `src/extension.ts` | Main extension code |
| `media/alerts.css` | Alert styling |
| `test-alerts.md` | Test file with examples |
| `icon.png` | Extension icon |

## File Size Guidelines

To keep the extension lightweight:

- **Total package size**: Should be < 100 KB (currently ~20 KB)
- **icon.png**: Min 128x128, recommended 256x256
- **Source files**: Keep focused and concise
- **No large dependencies**: Only markdown-it runtime

## What Gets Published

When you run `npm run package`, the `.vsix` file includes:

✅ **Included:**
- `out/` - Compiled JavaScript
- `media/` - CSS files
- `icon.png` - Extension icon
- `README.md` - Main documentation
- `CHANGELOG.md` - Version history
- `LICENSE` - License file
- `package.json` - Manifest

❌ **Excluded** (via `.vscodeignore`):
- `.vscode/` - Development workspace settings
- `src/` - TypeScript source code
- `node_modules/` - Dependencies (bundled separately if needed)
- `test-alerts.md` - Test files
- `CONTRIBUTING.md`, `PUBLISHING.md`, `SECURITY.md` - Developer docs
- `.git/`, `.gitignore`, `.editorconfig` - Development files
- `*.vsix` - Previous packages
- `*.log` - Log files

## What Gets Committed to Git

✅ **Committed:**
- All source files (`src/`, `media/`)
- Configuration files
- Documentation
- Workspace settings (`.vscode/`)
- `package.json`, `tsconfig.json`, etc.

❌ **Gitignored:**
- `node_modules/` - Dependencies (install with `npm install`)
- `out/` - Build output (regenerate with `npm run compile`)
- `*.vsix` - Packages (create with `npm run package`)
- `*.log` - Log files
- `.env*`, `*.key` - Secrets and credentials
- `.vscode/*.local.json` - Personal settings

## Development Workflow

### Initial Setup
```bash
git clone https://github.com/alternative-rvb/arvb-markdown-alerts.git
cd arvb-markdown-alerts
npm install
code .
```

### Daily Development
1. Make changes to `src/extension.ts` or `media/alerts.css`
2. Compile: `npm run compile` (or run watch: `npm run watch`)
3. Test: Press `F5` to launch Extension Development Host
4. Debug: Use VS Code debugger with breakpoints

### Before Commit
```bash
npm run compile  # Ensure it compiles
# Test in VS Code (F5)
git add .
git commit -m "Your changes"
```

### Publishing
```bash
npm run compile
npm run package
vsce publish  # Or manually upload .vsix
```

## Best Practices

### Organization
- ✓ Keep related files together
- ✓ Use clear, descriptive file names
- ✓ Document non-obvious decisions
- ✓ Maintain consistent structure

### Documentation
- ✓ Keep README.md up to date
- ✓ Update CHANGELOG.md for each release
- ✓ Document breaking changes clearly
- ✓ Include examples in docs

### Code
- ✓ Follow TypeScript best practices
- ✓ Keep functions small and focused
- ✓ Add comments for complex logic
- ✓ Validate and escape user input

### Security
- ✓ Never commit secrets or keys
- ✓ Always escape HTML output
- ✓ Validate against whitelist
- ✓ Keep dependencies minimal

## Questions?

- **Structure questions**: See [CONTRIBUTING.md](CONTRIBUTING.md)
- **Publishing questions**: See [PUBLISHING.md](PUBLISHING.md)
- **Security questions**: See [SECURITY.md](SECURITY.md)
- **General questions**: [GitHub Discussions](https://github.com/alternative-rvb/arvb-markdown-alerts/discussions)

---

**Last updated**: 2024-12-12
