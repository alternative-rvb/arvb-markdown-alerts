# ARVB Markdown Alerts - Test File

**Instructions:** Press `Ctrl+K V` (or `Cmd+K V` on Mac) to open the Markdown preview and see the alerts in action!

---

## Success Alerts ✓

### Simple Success Alert

:::success
Operation completed successfully!
:::

### Success Alert with Rich Content

:::success
**Great job!** Your file has been saved.

- Changes committed to repository
- Build passed all tests
- Deployment initiated

You can now safely close this window.
:::

### Success Alert with Code

:::success
Installation successful! Run the following command to start:

```bash
npm start
```
:::

---

## Info Alerts ℹ

### Simple Info Alert

:::info
This is an informational message.
:::

### Info Alert with Rich Content

:::info
**New Feature Available**

We've added support for the following alert types:
1. Success alerts
2. Info alerts
3. Warning alerts
4. Danger alerts
5. Spoiler alerts

Check the documentation for more details.
:::

### Info Alert with Links and Emphasis

:::info
*Note:* The configuration file is located at `config/settings.json`.

For more information, visit the [official documentation](https://example.com).
:::

---

## Warning Alerts ⚠

### Simple Warning Alert

:::warning
Please review before proceeding.
:::

### Warning Alert with Rich Content

:::warning
**Deprecation Notice**

The `oldMethod()` function will be removed in version 2.0.

**Migration steps:**
- Replace `oldMethod()` with `newMethod()`
- Update your configuration files
- Test thoroughly before deploying

See migration guide for details.
:::

### Warning Alert with Code Example

:::warning
Using deprecated syntax! Update your code:

**Old:**
```javascript
const result = oldAPI.fetch();
```

**New:**
```javascript
const result = await newAPI.fetch();
```
:::

---

## Danger Alerts ✖

### Simple Danger Alert

:::danger
Critical error detected!
:::

### Danger Alert with Rich Content

:::danger
**Security Vulnerability Found**

A critical security issue has been detected in your dependencies.

**Severity:** High
**CVE:** CVE-2024-12345

**Action Required:**
1. Stop all running services immediately
2. Update affected packages
3. Review security logs
4. Contact security team

Do not ignore this warning!
:::

### Danger Alert with Technical Details

:::danger
**Build Failed**

```
Error: Module not found
  at resolveModule (webpack.js:123)
  at compile (build.js:456)
```

Fix the import statements and try again.
:::

---

## Spoiler Alerts 👁

### Simple Spoiler Alert

:::spoiler Cliquez pour révéler
This content is hidden until you click!
:::

### Spoiler Alert with Rich Content

:::spoiler Plot Twist Revealed
**The Big Reveal**

The main character was actually the villain all along! In the final chapter, it's revealed that all the mysterious events were orchestrated by them.

*Key evidence:*
- The mysterious note found in chapter 3
- The alibi that didn't quite add up
- The connection to the secondary character
:::

### Spoiler Alert with Code

:::spoiler Solution to the Challenge
```python
def solve(n):
    return sum(i for i in range(n) if i % 3 == 0 or i % 5 == 0)

result = solve(1000)
print(result)  # Answer: 233168
```
:::

---

## Nested and Combined Examples

### Alert Within a List

Here's a task list with an embedded alert:

- [ ] Review the code
- [ ] Run tests
- [x] Check the warning below

:::warning
Don't forget to update the version number in package.json!
:::

- [ ] Deploy to production

### Multiple Alerts in Sequence

:::info
Step 1: Clone the repository
:::

:::warning
Step 2: Make sure you have Node.js 18+ installed
:::

:::success
Step 3: Run `npm install` to install dependencies
:::

:::danger
Step 4: Never commit your `.env` file!
:::

---

## Complex Content Examples

### Success with Tables

:::success
**Deployment Status**

| Service | Status | Version |
|---------|--------|---------|
| API     | ✓ Running | 2.1.0 |
| Web     | ✓ Running | 1.5.3 |
| Database| ✓ Running | 14.2  |

All systems operational!
:::

### Info with Blockquote

:::info
As the documentation states:

> The system will automatically retry failed requests up to 3 times with exponential backoff. If all retries fail, an error will be logged and the operation will be aborted.

Keep this in mind when debugging connection issues.
:::

### Warning with Multiple Paragraphs

:::warning
**Important Maintenance Notice**

The system will undergo scheduled maintenance this weekend.

**Downtime Window:**
Saturday, December 14, 2024 from 2:00 AM to 6:00 AM EST

All services will be unavailable during this period. Please plan accordingly.

We apologize for any inconvenience this may cause.
:::

---

## Edge Cases

### Empty Alert (should still render)

:::info
:::

### Alert with Only Code Block

:::danger
```
FATAL ERROR: System memory exceeded
Process terminated with exit code 137
```
:::

### Alert with Inline Formatting

:::success
You've earned **500 points** and unlocked the *Master Developer* badge! 🎉
:::

---

## Test Complete

If you can see all the alerts above properly styled with their respective colors and icons, the extension is working correctly!

**Expected Results:**
- ✓ Success alerts appear in green
- ℹ Info alerts appear in blue
- ⚠ Warning alerts appear in yellow/orange
- ✖ Danger alerts appear in red
- 👁 Spoiler alerts appear as collapsible details/summary elements

**Spoiler Test:** The spoiler alerts should be collapsible and show their title in the summary. Click on them to reveal or hide the content.
