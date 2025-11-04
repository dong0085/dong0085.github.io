---
layout: home
title: "Blog"
permalink: /
author_profile: true
entries_layout: list
show_excerpts: true
hide_recent_posts: true
nav_section: blog
pagination:
  enabled: true
  per_page: 6
  permalink: '/page:num/'
---

{% assign posts = paginator.posts | default: site.posts %}
{% assign entries_layout = page.entries_layout | default: 'list' %}

<div class="entries-{{ entries_layout }}">
  {% for post in posts %}
    {% include archive-single.html type=entries_layout %}
  {% endfor %}
</div>

{% if paginator %}
  {% include paginator.html %}
{% endif %}
