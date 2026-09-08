---
title: "OAuth 2.0 Redirect URI Validation Falls Short Literally"
authors: [Tommaso Innocenti, Matteo Golinelli, Kaan Onarlioglu, Ali Mirheidari, Bruno Crispo, Engin Kirda]
date: 2023-09-19T10:41:53+02:00
doi: "10.1145/3627106.3627140"

# Schedule page publish date (NOT publication's date).
publishDate: 2023-09-19T10:41:53+02:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: "Annual Computer Security Applications Conference (ACSAC)"
publication_short: "ACSAC 2023"

abstract: OAuth 2.0 requires a complex redirection trail between websites and Identity Providers (IdPs). In particular, the "redirect URI" parameter included in the popular Authorization Grant Code flow governs the callback endpoint that users are routed to, together with their security tokens. The protocol specification, therefore, includes guidelines on protecting the integrity of the redirect URI. In this work, we analyze the OAuth 2.0 specification in light of modern systems-centric attacks and reveal that the prescribed redirect URI validation guidance exposes IdPs to path confusion and parameter pollution attacks. Based on this observation, we propose novel attack techniques and experiment with 16 popular IdPs, empirically verifying that the OAuth 2.0 security guidance is under-specified. We finally present end-to-end attack scenarios that combine our attack techniques with common web application vulnerabilities, ultimately resulting in a complete compromise of the secure delegated access that OAuth 2.0 promises.

# Summary. An optional shortened abstract.
summary: ""

tags: [web security, OAuth, large-scale analysis]
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: 'https://dl.acm.org/doi/pdf/10.1145/3627106.3627140'
url_code: 'https://github.com/innotommy/OAuthpaper-code'
url_dataset:
url_poster:
url_project:
url_slides: 'OAuth 2.0 Redirect URI Validation Falls Short Literally ITASEC 24.pdf'
url_source:
url_video:

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
