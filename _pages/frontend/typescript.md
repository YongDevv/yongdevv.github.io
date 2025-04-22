---
title: "TypeScript"
layout: archive
permalink: /frontend/typescript
author_profile: true
sidebar_main: true
types: posts
sidebar:
  nav: "docs"
---

{% assign posts = site.categories.typescript %}
{% for post in posts %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}