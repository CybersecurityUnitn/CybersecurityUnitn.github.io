---
title: "AgentLSD: Evaluating AI Security Agents Under Adversarial Task Contamination"
authors: [Matteo Golinelli, Idilio Drago, Matteo Boffa, Francesco Bergadano, Bruno Crispo]
date: 2026-09-10T11:18:04+02:00
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2026-09-10T11:18:04+02:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['preprint']

# Publication name and optional abbreviated publication name.
publication: "19th ACM Workshop on Artificial Intelligence and Security (AISec 2026)"
publication_short: "AISec 2026"

abstract: "AI agents for security inspect web pages, source code, logs, configuration files, and command outputs. These environments may contain deceptive artifacts that influence the agent’s behavior. We call this adversarial task contamination. Unlike prompt injection, deceptions operate through misleading task evidence rather than competing instructions. We present AgentLSD, a controlled framework for studying adversarial task contamination. AgentLSD uses Capture the Flag (CTF ) challenges as its experimental environment. We inject trap artifacts, such as fake flags, misleading hints, decoy endpoints, and hidden cues, while preserving the intended CTF solution. The framework supports paired clean and trap-augmented experiments with deterministic trap generation, runtime injection, telemetry, and delivery verification. We evaluate six models on 11 web CTF challenges. In the clean condition, agents capture 41% of the flags, and no model solves every challenge. We then measure the impact of task contamination. Even when the agent still recovers the flag, traps increase the number of turns (+20) and reasoning tokens (+2k). Solve-rate effects are more heterogeneous, as some model–challenge pairs are largely unaffected while others follow decoys or submit wrong flags. These results show that clean CTF performance understates vulnerability to deceptive task evidence. AgentLSD isolates this effect and provides a reproducible benchmark for studying it. We release the framework, configurations, trap specifications, and raw traces."

# Summary. An optional shortened abstract.
summary: ""

tags: ["AI Security", "AI Agents", "Adversarial Task Contamination", "Prompt Injection", "Capture the Flag", "CTF"]
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: ''
url_code: ''
url_dataset:
url_poster:
url_project:
url_slides: ''
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
