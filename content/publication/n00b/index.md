---
title: "N00B: Bounds Checking for the Masses"
authors:
- Adriaan Jacobs
- carlo-ramponi
- Jonas Roels
- bruno-crispo
- Silviu Vlasceanu
- Mahmoud Ammar
- Stijn Volckaert
date: "2026-06-04"
doi: "10.1145/3830454.3832664"

publishDate: 2026-06-04T00:00:00+02:00

publication_types: ["1"]

publication: "ACM Conference on Computer and Communications Security"
publication_short: "CCS 2026"

abstract: "For decades, spatial memory safety vulnerabilities have plagued systems code. Effective mitigation seemingly demands the impossible: full legacy C/C++ compatibility, easy interoperability with external code, and low overhead, all while invasively transforming the program to bounds-check every memory access. A practical solution remains elusive, despite tremendous efforts by both academia and industry over nearly half a century. This paper identifies key challenges that hinder compilerbased memory safety enforcement and introduces N00B, an efficient cross-platform bounds checker designed to navigate these constraints. N00B’s hybrid approach avoids the limitations of pure pointer- or object-based approaches while combining their strengths in a pragmatic design that prioritizes practical deployability. Evaluation on common compatibility, security, and performance benchmarks shows that N00B achieves promising results, with a geomean runtime overhead of less than 50% on both ARM and x86 architectures, and extensive C/C++ source compatibility. Native support for gradual deployment further lowers barriers to adoption."
summary: ""

tags: [system security, memory safety, bounds checking]
categories: []
featured: true

links:
- name: CCS 2026
  url: https://www.sigsac.org/ccs/CCS2026/

url_pdf: "https://adriaanjacobs.github.io/files/ccs26n00b.pdf"
url_code:
url_dataset:
url_poster:
url_project:
url_slides:
url_source:
url_video:

projects: []
slides: ""
---
