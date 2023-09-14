---


title: Web Cache Deception Escalates!
subtitle: ''
summary: ''
authors:
- Seyed Ali Mirheidari
- Matteo Golinelli
- Kaan Onarlioglu
- Engin Kirda
- Bruno Crispo
tags: []
categories: []
date: '2022-08-01'
lastmod: 2022-05-13T14:59:15+02:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
publishDate: '2022-05-13T12:59:15.825235Z'
publication_types:
- '1'
abstract: "Web Cache Deception (WCD) tricks a web cache into erroneously storing sensitive content, thereby making it widely accessible on the Internet. In a USENIX Security 2020 paper titled \"Cached and Confused: Web Cache Deception in the Wild\", researchers presented the first systematic exploration of the attack over 340 websites. This state-of-the-art approach for WCD detection injects markers into websites and checks for leaks into caches. However, this scheme has two fundamental limitations: 1) It cannot probe websites that do not present avenues for marker injection or reflection. 2) Marker setup is a burdensome process, making large-scale measurements infeasible. More generally, all previous literature on WCD focuses solely on personal information leaks on websites protected behind authentication gates, leaving important gaps in our understanding of the full ramifications of WCD. We expand our knowledge of WCD attacks, their spread, and implications. We propose a novel WCD detection methodology that forgoes testing prerequisites, and utilizes page identicality checks and cache header heuristics to test any website. We conduct a comparative experiment on 404 websites, and show that our scheme identifies over 100 vulnerabilities while \"Cached and Confused\" is capped at 18. Equipped with a technique unhindered by the limitations of the previous work, we conduct the largest WCD experiment to date on the Alexa Top 10K, and detect 1188 vulnerable websites. We present case studies showing that WCD has consequences well beyond personal information leaks, and that attacks targeting non-authenticated pages are highly damaging."

publication: '*31st USENIX Security Symposium (USENIX Security 22)*'
links:
- name: URL
  url: https://www.usenix.org/conference/usenixsecurity22/presentation/mirheidari

url_pdf: 'https://www.usenix.org/system/files/sec22-mirheidari.pdf'
url_code: 'https://github.com/Golim/wcde'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: 'https://www.usenix.org/system/files/sec22_slides-mirheidari.pdf'
url_source: ''
url_video: 'https://youtu.be/aeWUp-0kPaQ'

image:
  caption: 'WCD in action'
  focal_point: "Bottom"
  preview_only: false

---