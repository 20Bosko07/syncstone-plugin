# Contributing to the Syncstone plugin

Thanks for wanting to help. This is the Obsidian plugin of [Syncstone](https://syncst.one). The plugin is open source (MIT), the Syncstone service it connects to is not.

## What is most helpful

- **Bug reports** with clear steps and the sync log. Use the issue form, it asks for what we need.
- **Small fixes** as a pull request: a typo, a broken layout on mobile, a clearer message.
- **Translations**: the texts live in `src/i18n/` (English, German, French, Spanish, Italian, Dutch).

For a bigger change, **open an issue first** and say what you plan. That saves you the work if it does not fit.

## What we cannot accept

- **Changes in `shared/`.** This folder holds the encryption and the wire protocol. It is copied from the Syncstone server and plugin and server must agree on it byte for byte, so it is never edited here. If you found a problem in it, open an issue and describe it.
- **Anything that sends data to a third party** or collects usage data. Obsidian's plugin policy forbids it, and so do we.
- **Anything that needs the server to read note content.** Notes are encrypted on the device.

## Set up

```bash
pnpm install
pnpm dev          # builds main.js and watches for changes
```

Copy `manifest.json`, `main.js` and `styles.css` to `<vault>/.obsidian/plugins/websync/` in a test vault. Use a vault you can afford to lose while you try things.

Before you open a pull request:

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm build
```

## Code

- TypeScript, strict. No `any` that you can avoid.
- No Node.js or Electron APIs: the plugin runs on iOS and Android, too.
- Use Obsidian's own helpers (`requestUrl`, `createEl`, `window.setTimeout`, the `Platform` API).
- Keep texts in `src/i18n/` and add every new text in all six languages, or at least English.
- Short, plain commit messages that say what changed and why.

## Releases

Maintainers do the releases (version in `manifest.json`, `package.json` and `versions.json`, then a tag). Please do not bump the version in a pull request.

## License

By contributing you agree that your work is published under the [MIT license](LICENSE) of this repository.

Please also read the [code of conduct](CODE_OF_CONDUCT.md).
