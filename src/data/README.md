Use the `ui.json` file to centralize repeated UI labels (CTAs, common button text, FAQ title).

Guidelines

- Add repeated site-wide short labels to `src/data/ui.json`.
- Keep per-item button texts in each data file when you need a specific label for that item.
- Prefer sentence or title case (e.g. "Saber más", "Pedir cita gratuita") instead of ALL-CAPS for better accessibility and consistency.

Quick checks

- Run `npm run check-data` to locate remaining ALL-CAPS tokens in `src/data` JSON files; the script will warn about potential values to normalize.
