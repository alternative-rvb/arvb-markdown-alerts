# Security Policy

## Security Features

ARVB Markdown Alerts is designed with security as a top priority. The extension implements multiple layers of protection to ensure safe Markdown rendering.

### Built-in Security Measures

#### 1. XSS Protection
- **HTML Escaping**: All user input (alert types and titles) is escaped using a comprehensive `escapeHtml()` function
- **Characters escaped**: `&`, `<`, `>`, `"`, `'`
- **Location**: [src/extension.ts:18-27](src/extension.ts#L18-L27)

#### 2. Input Validation
- **Whitelist Approach**: Only 5 predefined alert types are allowed
- **Allowed types**: `success`, `info`, `warning`, `danger`, `spoiler`
- **Invalid types are rejected**: Any other type is ignored and not rendered
- **Location**: [src/extension.ts:5](src/extension.ts#L5)

#### 3. No Code Execution
- **No `eval()`**: The extension never uses dynamic code execution
- **No external scripts**: All code is self-contained
- **No inline JavaScript**: CSS is pure styling without embedded scripts

#### 4. Content Security Policy (CSP) Compatible
- The extension works within VS Code's strict CSP
- No unsafe inline scripts or styles
- No external resource loading

#### 5. Minimal Dependencies
- **Runtime**: Only `markdown-it` (official, well-maintained package)
- **Development**: Only official VS Code and TypeScript packages
- **No untrusted dependencies**: All packages are from verified sources

### Security Best Practices

#### For Users
1. **Update Regularly**: Keep the extension updated to receive security patches
2. **Review Content**: Be cautious when opening Markdown files from untrusted sources
3. **Report Issues**: If you find a security issue, please report it responsibly (see below)

#### For Developers Contributing
1. **Never bypass input validation**: Always use the whitelist for alert types
2. **Always escape HTML**: Use `escapeHtml()` for any user-provided content
3. **Avoid external dependencies**: Only add dependencies when absolutely necessary
4. **Test security**: Verify XSS protection with test cases

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security issue, please follow responsible disclosure:

### How to Report

1. **DO NOT** open a public GitHub issue for security vulnerabilities
2. **Email**: Send details to the maintainer via GitHub private message or repository discussions
3. **Include**:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if available)

### What to Expect

- **Acknowledgment**: Within 48 hours
- **Assessment**: Within 7 days
- **Fix**: Critical issues within 14 days, others within 30 days
- **Disclosure**: Coordinated disclosure after fix is released

### Security Update Process

1. Vulnerability is reported and confirmed
2. Fix is developed and tested
3. Security advisory is prepared
4. Patch is released
5. Users are notified via GitHub and VS Code Marketplace
6. Public disclosure after users have time to update

## Known Security Considerations

### Safe Rendering
- All Markdown content is rendered by VS Code's built-in Markdown preview
- The extension only adds custom styling and alert block parsing
- No user content is executed as code

### No Data Collection
- The extension does not collect any user data
- No analytics or telemetry
- All processing is done locally

### Permissions
- The extension only requires Markdown preview access
- No file system write access
- No network access
- No access to VS Code settings or credentials

## Security Testing

### Manual Tests
Run the test file to verify security:
1. Open [test-alerts.md](test-alerts.md)
2. Open Markdown preview (`Ctrl+K V`)
3. Verify that:
   - All alerts render correctly
   - No JavaScript execution occurs
   - Invalid alert types are ignored
   - Special characters are properly escaped

### XSS Test Cases
Try these in your Markdown files (should be safe):

```markdown
:::success <script>alert('XSS')</script>
Should be escaped and not execute
:::

:::info"><img src=x onerror=alert('XSS')>
Should be escaped and not execute
:::

:::danger onclick="alert('XSS')"
Should be escaped and not execute
:::
```

All these should render as safe text without executing any scripts.

## Security Audit Results

**Last Audit**: 2024-12-12
**Status**: ✅ No vulnerabilities found
**Auditor**: Internal review

### Audit Checklist
- [x] XSS protection implemented
- [x] Input validation with whitelist
- [x] Output escaping for all user content
- [x] No dangerous functions (eval, innerHTML)
- [x] No external script loading
- [x] CSP compatible
- [x] Minimal dependencies
- [x] All dependencies from trusted sources
- [x] No sensitive data exposure
- [x] No unnecessary permissions

## References

- [OWASP XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
- [VS Code Extension Security Best Practices](https://code.visualstudio.com/api/references/extension-guidelines#security)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)

---

**Thank you for helping keep ARVB Markdown Alerts secure!**
