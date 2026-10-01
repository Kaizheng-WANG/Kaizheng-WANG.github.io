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

News only shows items from the last 12 months (filtered in the browser, so no rebuild is needed);
keep `_data/news.yml` newest first. Older items stay in the file.

A paper appears under *Selected Publications* when its file has `first_author: true`;
`highlight: true` + `note: "Spotlight"` shows the note in bold blue.

## Preview locally

```bash
bundle install
bundle exec jekyll serve   # http://localhost:4000
```
