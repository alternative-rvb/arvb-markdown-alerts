# Contributing to ARVB Markdown Alerts

Thank you for your interest in contributing to ARVB Markdown Alerts! We welcome contributions from the community.

## How to Contribute

### Reporting Bugs

1. Check if the issue already exists in [GitHub Issues](https://github.com/alternative-rvb/arvb-markdown-alerts/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - VS Code version and platform
   - Extension version

### Suggesting Features

1. Check [GitHub Discussions](https://github.com/alternative-rvb/arvb-markdown-alerts/discussions) for similar ideas
2. Create a new discussion explaining:
   - The feature you'd like to see
   - Why it would be useful
   - How it might work

### Pull Requests

We actively welcome your pull requests!

#### Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/arvb-markdown-alerts.git
   cd arvb-markdown-alerts
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Open in VS Code**
   ```bash
   code .
   ```

4. **Make your changes**
   - Edit files in `src/`
   - Update styles in `media/`
   - Add tests if applicable

5. **Compile and test**
   ```bash
   npm run compile
   ```

   Or use **Watch Mode** for continuous compilation:
   ```bash
   npm run watch
   ```

6. **Debug the extension**
   - Press `F5` in VS Code to open Extension Development Host
   - Test your changes in the new window
   - Open a Markdown file and preview it (`Ctrl+K V`)

#### Code Guidelines

- **TypeScript**: Follow existing code style (4 spaces, single quotes)
- **Comments**: Add comments for complex logic
- **Security**: Always escape user input, validate against whitelist
- **Testing**: Test all 5 alert types thoroughly
- **Documentation**: Update README.md if adding features

#### Commit Messages

Use clear, descriptive commit messages:

```
feat: Add custom icon support for alerts
fix: Escape HTML in spoiler titles
docs: Update README with new examples
style: Format code with Prettier
refactor: Simplify alert parsing logic
test: Add XSS protection tests
```

#### Before Submitting

- ✓ Code compiles without errors (`npm run compile`)
- ✓ Extension works in VS Code (`F5` to test)
- ✓ All alert types render correctly
- ✓ No console errors in Markdown preview
- ✓ Updated documentation if needed
- ✓ Security best practices followed

#### Pull Request Process

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make your changes and commit
3. Push to your fork: `git push origin feature/my-feature`
4. Open a Pull Request to `main` branch
5. Describe your changes clearly
6. Wait for review and address feedback

## Development Tips

### Project Structure

```
arvb-markdown-alerts/
├── .vscode/          # VS Code workspace settings
├── media/            # CSS styles for alerts
├── src/              # TypeScript source code
│   └── extension.ts  # Main extension code
├── out/              # Compiled JavaScript (generated)
├── package.json      # Extension manifest
├── tsconfig.json     # TypeScript configuration
└── README.md         # Documentation
```

### Key Files

- **[src/extension.ts](src/extension.ts)**: Main extension logic, parser, and renderer
- **[media/alerts.css](media/alerts.css)**: Alert styles for all themes
- **[package.json](package.json)**: Extension metadata and configuration
- **[test-alerts.md](test-alerts.md)**: Test file with all alert examples

### Testing Workflow

1. Make changes to TypeScript or CSS
2. Compile (`npm run compile` or watch mode)
3. Press `F5` to launch Extension Development Host
4. Open `test-alerts.md`
5. Open Markdown preview (`Ctrl+K V`)
6. Verify all alerts render correctly
7. Test in light/dark/high-contrast themes

### Adding New Alert Types

To add a new alert type:

1. Add type to `ALERT_TYPES` in [src/extension.ts:5](src/extension.ts#L5)
2. Add CSS styles in [media/alerts.css](media/alerts.css)
3. Add styles for dark and high-contrast themes
4. Update README.md with examples
5. Add test cases to `test-alerts.md`

### Security Checklist

When making changes:

- [ ] User input is validated against whitelist
- [ ] All text is escaped with `escapeHtml()`
- [ ] No `eval()`, `innerHTML`, or code execution
- [ ] No external resources loaded
- [ ] CSS is safe (no JavaScript)
- [ ] Test with malicious input (XSS attempts)

See [SECURITY.md](SECURITY.md) for details.

## Code of Conduct

### Our Standards

- Be respectful and inclusive
- Welcome newcomers
- Give constructive feedback
- Focus on what's best for the community
- Show empathy towards others

### Unacceptable Behavior

- Harassment or discriminatory language
- Personal attacks or insults
- Publishing others' private information
- Any unethical or unprofessional conduct

## Questions?

- **General Questions**: [GitHub Discussions](https://github.com/alternative-rvb/arvb-markdown-alerts/discussions)
- **Bug Reports**: [GitHub Issues](https://github.com/alternative-rvb/arvb-markdown-alerts/issues)
- **Security Issues**: See [SECURITY.md](SECURITY.md)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to ARVB Markdown Alerts!** 🎉
