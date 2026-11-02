## What and why

<!-- One or two sentences. Link the issue if there is one: Fixes #123 -->

## How I checked it

<!-- What you ran or tried. For changes you can see, add a screenshot or a short clip with no private notes in it. -->

## Checklist

- [ ] `pnpm typecheck`, `pnpm lint`, `pnpm test` and `pnpm build` pass
- [ ] I did not edit anything in `shared/` (it is copied from the Syncstone server, see CONTRIBUTING.md)
- [ ] No new network request, no telemetry and no third party service (Obsidian's plugin policy)
- [ ] No Node.js or Electron API, the plugin must run on mobile
- [ ] The README or the texts in `src/i18n/` are updated if the change needs it
