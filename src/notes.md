---
title: "Notes"
layout: "layouts/base.njk"
---

<ul>
    {% for item in collections.notes %}
        <li><a href="{{ item.url }}">{{ item.data.title }}</a></li>
    {% endfor %}
</ul>
