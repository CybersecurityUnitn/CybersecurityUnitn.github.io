---
title: "TAGShield: Persistent Tagging for Robust Stack Memory Error Protection"
authors:
- michele-grisafi
- carlo-ramponi
- Silviu Vlasceanu
- Mahmoud Ammar
- bruno-crispo
date: "2026-06-04"
doi: "10.1145/3779208.3785279"

publishDate: 2026-06-04T00:00:00+02:00

publication_types: ["1"]

publication: "ACM ASIA Conference on Computer and Communications Security"
publication_short: "AsiaCCS 2026"

abstract: "Stack memory errors such as buffer overflows remain a major security challenge for software written in memory unsafe languages like C and C++. Arm Memory Tagging Extension (MTE) offers a promising foundation for detecting spatial violations by associating tags with both pointers and memory objects. However, existing MTE-based runtime defenses do not preserve pointer tag integrity. In particular, pointer tags can be inadvertently corrupted or adversarially altered during pointer arithmetic operations, which are common in system-level code, thereby rendering the security guarantees of current solutions questionable. This paper presents TAGShield, a runtime exploit mitigation mechanism that leverages MTE to provide persistent and deterministic protection against stack spatial memory errors while enforcing pointer tag integrity. TAGShield combines a transparent compile time tagging scheme with lightweight software instrumentation that checks and maintains tag correctness. Evaluation results demonstrate that TAGShield introduces a geometric mean runtime overhead of less than 10% on representative benchmarks, including SPEC CPU2006 and nginx, while effectively mitigating all stack spatial memory vulnerabilities in the Juliet C/C++ test suite."
summary: ""

tags: [system security, memory safety, stack protection]
categories: []
featured: true

links:
- name: AsiaCCS 2026
  url: https://asiaccs2026.cse.iitkgp.ac.in/

url_pdf: "https://carloramponi.github.io/publications/TAGShield.pdf"
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
