# Development notes (internal)

Not for customers, the README is the customer-facing page.

```bash
pnpm install
pnpm dev          # esbuild watch -> main.js
pnpm build        # typecheck + production bundle
pnpm test         # tests of the shared crypto/protocol code
```

Copy `manifest.json`, `main.js` and `styles.css` to `<vault>/.obsidian/plugins/websync/` to try it.

## `shared/`

`shared/` is the crypto and wire-protocol code that the plugin and the Syncstone server must agree on byte for byte.
It is **copied** from the server repository, never edited here:

```bash
pnpm sync-shared ../websync
```

## Releasing

1. Bump `version` in `manifest.json` and `package.json` and add the version to `versions.json`.
2. Tag the commit with exactly that version (`git tag 0.1.1 && git push --tags`, no leading `v`).
3. The `release` workflow builds and attaches `main.js`, `manifest.json` and `styles.css` to a GitHub release.

The plugin `id` (`websync`) must never change once users have installed it.
