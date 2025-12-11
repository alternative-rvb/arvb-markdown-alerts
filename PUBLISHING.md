# Publishing to VS Code Marketplace

This guide explains how to publish the ARVB Markdown Alerts extension to the Visual Studio Code Marketplace.

## Prerequisites

1. **Visual Studio Marketplace Publisher Account**
   - Create an account at [Visual Studio Marketplace](https://marketplace.visualstudio.com/manage)
   - Create a publisher if you haven't already

2. **Personal Access Token (PAT)**
   - Go to [Azure DevOps](https://dev.azure.com/)
   - Create a new Personal Access Token with **Marketplace (Manage)** scope
   - Save the token securely (you won't be able to see it again)

3. **Install vsce** (already in devDependencies)
   ```bash
   npm install -g @vscode/vsce
   ```

## Publishing Steps

### 1. Prepare the Extension

Make sure everything is ready:

```bash
# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Test the extension in VS Code (F5)
# Verify all features work correctly
```

### 2. Update Version

Update the version in [package.json](package.json):

```json
{
  "version": "1.0.1"  // Increment according to semver
}
```

Update [CHANGELOG.md](CHANGELOG.md) with new changes.

### 3. Create Package

```bash
npm run package
```

This creates a `.vsix` file (e.g., `arvb-markdown-alerts-1.0.0.vsix`).

### 4. Test the Package Locally

```bash
code --install-extension arvb-markdown-alerts-1.0.0.vsix
```

Test thoroughly before publishing!

### 5. Login to vsce

```bash
vsce login alternative-rvb
```

Enter your Personal Access Token when prompted.

### 6. Publish to Marketplace

```bash
vsce publish
```

Or publish the specific `.vsix` file:

```bash
vsce publish --packagePath arvb-markdown-alerts-1.0.0.vsix
```

### 7. Verify Publication

- Check the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=alternative-rvb.arvb-markdown-alerts)
- Install from marketplace and test
- Check analytics and reviews

## Publishing with Different Version Bumps

```bash
# Patch version (1.0.0 -> 1.0.1)
vsce publish patch

# Minor version (1.0.0 -> 1.1.0)
vsce publish minor

# Major version (1.0.0 -> 2.0.0)
vsce publish major

# Specific version
vsce publish 1.2.3
```

## Unpublishing (Use with Caution!)

```bash
# Unpublish a specific version
vsce unpublish alternative-rvb.arvb-markdown-alerts@1.0.0

# Unpublish entire extension (WARNING: Cannot undo!)
vsce unpublish alternative-rvb.arvb-markdown-alerts
```

## Best Practices

1. **Always test locally** before publishing
2. **Update CHANGELOG.md** with every release
3. **Follow semantic versioning**:
   - MAJOR: Breaking changes
   - MINOR: New features (backward compatible)
   - PATCH: Bug fixes
4. **Write detailed release notes** on GitHub
5. **Respond to user reviews and issues** promptly
6. **Keep README.md up to date** with features
7. **Test on multiple platforms** (Windows, macOS, Linux)

## Troubleshooting

### Error: "Missing publisher name"
Make sure `publisher` field is set in [package.json](package.json).

### Error: "Invalid icon"
Ensure [icon.png](icon.png) is at least 128x128 pixels.

### Error: "Missing README"
The [README.md](README.md) file must exist and be properly formatted.

### Error: "Authentication failed"
Your Personal Access Token may have expired. Create a new one.

## Useful Commands

```bash
# Show extension info
vsce show alternative-rvb.arvb-markdown-alerts

# List all versions
vsce show alternative-rvb.arvb-markdown-alerts --json

# Package without publishing
vsce package

# Validate package without publishing
vsce ls
```

## Resources

- [VS Code Publishing Guide](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [vsce Documentation](https://github.com/microsoft/vscode-vsce)
- [Extension Manifest Reference](https://code.visualstudio.com/api/references/extension-manifest)
- [Marketplace Publisher Portal](https://marketplace.visualstudio.com/manage)

---

**Note:** Keep your Personal Access Token secure and never commit it to version control!
