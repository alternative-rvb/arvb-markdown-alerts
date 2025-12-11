# Changelog

All notable changes to the "ARVB Markdown Alerts" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-12-11

### Added
- Initial release of ARVB Markdown Alerts
- Support for 5 alert types: Success, Info, Warning, Danger, Spoiler
- Rich Markdown content support inside alerts (lists, code blocks, links, emphasis)
- Automatic theme adaptation (light, dark, high contrast)
- Spoiler alerts with collapsible content using HTML5 `<details>`/`<summary>` elements
- XSS protection with HTML escaping
- Comprehensive test file with examples
- Full documentation and usage guide

### Features
- Simple `:::type` syntax for creating alerts
- Custom titles for spoiler alerts
- Zero configuration required
- Lightweight and performant
- Secure by design

---

## Future Plans

- [ ] Support for custom alert colors
- [ ] Additional alert icons
- [ ] Keyboard shortcuts for inserting alerts
- [ ] Snippets for quick alert creation
- [ ] Multi-language support

---

**Note:** For a detailed list of changes, see the [commit history](https://github.com/alternative-rvb/arvb-markdown-alerts/commits/main).
