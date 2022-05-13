---
# Documentation: https://wowchemy.com/docs/managing-content/

title: Generative Adversarial Networks for Subdomain Enumeration
subtitle: ''
summary: ''
authors:
- Luca Degani
- Francesco Bergadano
- Seyed Ali Mirheidari
- Fabio Martinelli
- Bruno Crispo
tags:
- subdomain enumeration
- subdomain takeover
- generative adversarial networks
categories: []
date: '2022-01-01'
lastmod: 2022-05-13T14:56:18+02:00
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
publishDate: '2022-05-13T12:56:18.041069Z'
publication_types:
- '1'
abstract: Subdomain enumeration is a fundamental step of many security processes (i.e.,
  vulnerability discovery, OSINT, host enumeration, etc.). Up to now, this has been
  achieved with deterministic procedures that have shown some limitations. For instance,
  the process typically requires the generation of a candidate, which is subsequently
  checked for validity. While the validation is a straightforward procedure, the definition
  of an optimal candidate generation strategy is still an open problem. This paper
  presents a novel subdomain enumeration tool that allows the generation of high-quality
  sub-domain candidates. We employ a Generative Adversarial Network (GAN) to sample
  unseen candidates from the distribution of valid subdomain names. The model learns
  this distribution from publicly available datasets. Moreover, by sampling from the
  trained model, we address the limitations of traditional algorithms. Our experiments
  were carried out against 15 domains and a ground truth of 1164 other targets. The
  15 domains were carefully selected from bug bounty platforms to avoid terms of use
  violations. Several factors influenced the choices, including the popularity, the
  expected number of subdomains, and the available services. Our experiments aim to
  validate our approach by testing the performance increase in subdomain enumeration
  processes against the state-of-the-art. We benchmark our proposal in terms of candidates'
  validity and sample uniqueness. The results showed that, with our GAN, the performance
  of a traditional subdomain enumeration workflow increased by up to 61%. In addition,
  according to our ground truth experiments, the GAN was able to guess, on average,
  32% of subdomains.
publication: '*Proceedings of the 37th ACM/SIGAPP Symposium on Applied Computing*'
doi: 10.1145/3477314.3506967
links:
- name: URL
  url: https://doi.org/10.1145/3477314.3506967
---
