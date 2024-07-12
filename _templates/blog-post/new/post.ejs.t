---
to: blog/<%= slug %>.mdx
---

---
title: <%= title %>
tags: <% for (tag of tags) { %>
  - <%= tag %><% } %>
date: <%= date %>
excerpt: <%= excerpt %>
image: /blog/images/<%= image %>
category: <%= category %>
author: { name: <%= author %>, image: /blog/pfps/<%= authorImage %> }
---


