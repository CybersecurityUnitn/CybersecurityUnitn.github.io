---
title: "Mitigating Code Injection Attacks on Modern GPUs"
authors:
- carlo-ramponi
- Adriaan Jacobs
- luigi-dell-eva
- Stijn Volckaert
- Silviu Vlasceanu
- Mahmoud Ammar
- bruno-crispo
date: "2026-06-04"
doi: "10.1145/3830454.3832680"

publishDate: 2026-06-04T00:00:00+02:00

publication_types: ["1"]

publication: "ACM Conference on Computer and Communications Security"
publication_short: "CCS 2026"

abstract: "Once specialized for graphics acceleration, Graphics Processing Units (GPUs) now serve as foundational components of parallel computing, driving advancements from immersive gaming to generative Artificial Intelligence (AI). However, while their computational capabilities have expanded dramatically, GPU security has lagged behind their expanding functionality. Recent studies reveal that GPUs remain susceptible to memory corruption attacks, a gap amplified by their reliance on memory-unsafe programming frameworks, such as CUDA. Although contemporary GPUs incorporate basic defenses like ASLR and stack canaries, the absence of hardware-enforced Data Execution Prevention (DEP) leaves them critically exposed to code-injection attacks, undermining the implementation of a robust W⊕X security policy. This work analyzes the potential of code-injection attacks on NVIDIA GPUs, executed independently of CPU vulnerabilities, in the presence of ASLR and stack canary protections. To address this gap, we design and implement a software-based DEP mechanism, a critical enabler of the W⊕X policy, to enforce strict memory permissions, eliminating executable-writable memory regions, and thereby neutralizing code-injection attacks. Our solution operates transparently alongside proprietary vendor toolchains and software components while maintaining compatibility with precompiled libraries. Empirical evaluations across diverse benchmarks on three different NVIDIA GPU architectures show that our approach incurs minimal overhead, with average runtime and memory overheads of less than 0.5%."
summary: ""

tags: [system security, GPU security, code injection]
categories: []
featured: true

links:
- name: CCS 2026
  url: https://www.sigsac.org/ccs/CCS2026/

url_pdf: "https://carloramponi.github.io/publications/cuDEP.pdf"
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
