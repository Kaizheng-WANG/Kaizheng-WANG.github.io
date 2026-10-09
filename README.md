# Kaizheng Wang — Homepage

Source of <https://kaizheng-wang.github.io>, built with Jekyll on GitHub Pages
(based on [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io), MIT License).

## Where to edit

| What | File |
| --- | --- |
| Bio / section layout | `_pages/about.md` |
| News, awards, education, services | `_data/*.yml` |
| Publications (one file per paper) | `_publications/*.md` |
| Profile header (photo, title, links) | `author:` in `_config.yml` |
| Top navigation bar | `_data/navigation.yml` |

### Profile header

Photo next to name / position / links, centered as one group (all under `author:` in `_config.yml`).
`name_native` ("王凯征") is shown after the English name in Microsoft YaHei; devices without it
use their own Chinese sans font (PingFang on Mac/iPhone). Leave it empty to hide it.

### Folding with "Show more"

- **News** shows the last 12 months; older items fold behind *Show more* (filtered in the browser,
  so no rebuild is needed). Keep `_data/news.yml` newest first; old items stay in the file.
- **Awards / Services**: add `fold: true` to an item in `_data/awards.yml` or `_data/services.yml`
  to fold it behind *Show more*.

The button only appears when something is folded.

### Publications: Featured / All

*Featured* (the default view) lists papers whose file has `first_author: true` **or**
`corresponding_author: true`; *All* lists every paper, newest first.
`corresponding_author: true` also puts a † after my name, and the
"(† corresponding author)" legend appears next to the heading once any paper uses it.
`highlight: true` + `note: "Spotlight"` shows the note in bold blue.

Styles for these parts live in `_sass/_homepage.scss`, the button logic in `assets/js/homepage.js`.

## Preview locally

```bash
bundle install
bundle exec jekyll serve   # http://localhost:4000
```
