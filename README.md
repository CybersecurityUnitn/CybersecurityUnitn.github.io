# UniTN Cybersecurity Research Group

This is a standalone Hugo site. It has no theme module, page builder, CMS plugin,
or Wowchemy/Hugo Blox dependency.

## Local development

Run `hugo server` and open the local URL Hugo prints. A production-equivalent
build is `hugo --minify`.

## Content

- Publications live in `content/publication/<slug>/index.md`.
- Team profiles live in `content/authors/<slug>/_index.md`; place an `avatar.*`
  beside a profile to display a portrait.
- Navigation is configured in `config/_default/menus.yaml`.
- Site-wide links and institution details are in `config/_default/params.yaml`.

The homepage, directory, publication, and contact views are ordinary Hugo
templates in `layouts/`; visual styling is in `assets/css/site.css`.
