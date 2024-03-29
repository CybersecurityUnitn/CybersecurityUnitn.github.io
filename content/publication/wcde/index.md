---
title: "Web Cache Deception Escalates!"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- Seyed Ali Mirheidari
- Matteo Golinelli
- Kaan Onarlioglu
- Engin Kirda
- Bruno Crispo

date: "2022-08-10"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2022-05-06T17:40:06+02:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *USENIX Security Symposium*
publication_short: In *USENIX*

abstract: "Web Cache Deception (WCD) tricks a web cache into erroneously storing sensitive content, thereby making it widely accessible on the Internet. In a USENIX Security 2020 paper titled \"Cached and Confused: Web Cache Deception in the Wild\", researchers presented the first systematic exploration of the attack over 340 websites. This state-of-the-art approach for WCD detection injects markers into websites and checks for leaks into caches. However, this scheme has two fundamental limitations: 1) It cannot probe websites that do not present avenues for marker injection or reflection. 2) Marker setup is a burdensome process, making large-scale measurements infeasible. More generally, all previous literature on WCD focuses solely on personal information leaks on websites protected behind authentication gates, leaving important gaps in our understanding of the full ramifications of WCD. We expand our knowledge of WCD attacks, their spread, and implications. We propose a novel WCD detection methodology that forgoes testing prerequisites, and utilizes page identicality checks and cache header heuristics to test any website. We conduct a comparative experiment on 404 websites, and show that our scheme identifies over 100 vulnerabilities while \"Cached and Confused\" is capped at 18. Equipped with a technique unhindered by the limitations of the previous work, we conduct the largest WCD experiment to date on the Alexa Top 10K, and detect 1188 vulnerable websites. We present case studies showing that WCD has consequences well beyond personal information leaks, and that attacks targeting non-authenticated pages are highly damaging."

# Summary. An optional shortened abstract.
# summary: .

tags: [web security, web cache deception, web caches, cache poisoning]

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
links:
- name: On USENIX
  url: https://www.usenix.org/conference/usenixsecurity22/presentation/mirheidari

url_pdf: 'https://www.usenix.org/system/files/sec22-mirheidari.pdf'
url_code: 'https://github.com/Golim/wcde'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: 'https://www.usenix.org/system/files/sec22_slides-mirheidari.pdf'
url_source: ''
url_video: 'https://youtu.be/aeWUp-0kPaQ'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'WCD in action'
  focal_point: "Bottom"
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
# - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---
