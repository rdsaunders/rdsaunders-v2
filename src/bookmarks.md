---
title: "Bookmarks"
layout: "layouts/base.njk"
---

<ul>
    {% for item in collections.bookmarks %}
        <li><a href="{{ item.url }}">{{ item.data.title }}</a></li>
    {% endfor %}
</ul>
