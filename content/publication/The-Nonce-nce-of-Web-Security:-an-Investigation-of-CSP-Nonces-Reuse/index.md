---

title: "The Nonce-nce of Web Security: An Investigation of CSP Nonces Reuse"
authors: [Matteo Golinelli, Francesco Bonomi, Bruno Crispo]
date: 2023-08-24T11:58:46+02:00
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2023-08-24T11:58:46+02:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "Workshop on Attacks and Software Protection at ESORICS 2023"
publication_short: "WASP @ ESORICS 2023"

abstract: "Content Security Policy (CSP) is an effective security mechanism that prevents the exploitation of Cross-Site Scripting (XSS) vulnerabilities on websites by specifying the sources from which their web pages can load resources, such as scripts and styles. CSP nonces enable websites to allow the execution of specific inline scripts and styles without relying on a whitelist. In this study, we measure and analyze the use of CSP nonces in the wild, specifically looking for nonce reuse, short nonces, and invalid nonces. We find that, of the 2271 sites that deploy a nonce-based policy, 598 of them reuse the same nonce value in more than one response, potentially enabling attackers to bypass protection offered by the CSP against XSS attacks. We analyze the causes of the nonce reuses to identify whether they are introduced by the server-side code or if the nonces are being cached by web caches. Moreover, we investigate whether nonces are only reused within the same session or for different sessions, as this impacts the effectiveness of CSP in preventing XSS attacks. Finally, we discuss the possibilities for attackers to bypass the CSP and achieve XSS in different nonce reuse scenarios."

# Summary. An optional shortened abstract.
summary: ""

tags: [web security, CSP, CSP nonces, web caches, large-scale analysis]
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf:
url_code: "https://github.com/Golim/nonce-nce"
url_dataset:
url_poster:
url_project:
url_slides:
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
