---
title: "Activity"
layout: "layouts/base.njk"
---

<ul>
    {% for item in collections.activity %}
        <li><a href="{{ item.url }}">{{ item.data.title }}</a></li>
    {% endfor %}
</ul>
