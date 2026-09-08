---
title: "Hidden Web Caches Discovery"
authors: [Matteo Golinelli, Bruno Crispo]
date: 2024-07-23T11:18:04+02:00
doi: "10.1145/3678890.3678931"

# Schedule page publish date (NOT publication's date).
publishDate: 2024-07-23T11:18:04+02:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: "The 27th International Symposium on Research in Attacks, Intrusions and Defenses (RAID 2024)"
publication_short: "RAID 2024"

abstract: "Web caches play a crucial role in web performance and scalability. However, detecting cached responses is challenging when web servers do not reliably communicate the cache status through standardized headers. This paper presents a novel methodology for cache detection using timing analysis. Our approach eliminates the dependency on cache status headers, making it applicable to any web server. The methodology relies on sending paired requests using HTTP multiplexing functionality and makes heavy use of cache-busting to control the origin of the responses. By measuring the time it takes to receive responses from paired requests, we can determine if a response is cached or not. In each pair, one request is cache-busted to force retrieval from the origin server, while the other request is not and might be served from the cache, if present. A faster response time for the non-cache-busted request compared to the cache-busted one suggests the first one is coming from the cache. We implemented this approach in a tool and achieved an estimated accuracy of 89.6% compared to state-of-the-art methods based on cache status headers. Leveraging our cache detection approach, we conducted a large-scale experiment on the Tranco Top 50k websites. We identified a significant presence of hidden caches (5.8%) that do not advertise themselves through headers. Additionally, we employed our methodology to detect Web Cache Deception (WCD) vulnerabilities in these hidden caches. We discovered that 1.020 of them are susceptible to WCD vulnerabilities, potentially leaking sensitive data. Our findings demonstrate the effectiveness of our timing analysis methodology for cache discovery and highlight the importance of a tool that does not rely on cache-communicated cache status headers."

# Summary. An optional shortened abstract.
summary: ""

tags: [web security, large-scale analysis, web cache]
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: 'https://dl.acm.org/doi/pdf/10.1145/3678890.3678931'
url_code: 'https://github.com/Golim/hidden-web-caches-discovery'
url_dataset:
url_poster:
url_project:
url_slides: 'Hidden Web Caches Discovery ITASEC.pdf'
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
