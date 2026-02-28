---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% assign pubs = site.publications | sort: "date" | reverse %}
{% assign current_year = "" %}

{% for pub in pubs %}
  {% assign year = pub.date | date: "%Y" %}

  {% if year != current_year %}
    {% unless forloop.first %}</ul>{% endunless %}
    <h2>{{ year }}</h2>
    <ul>
    {% assign current_year = year %}
  {% endif %}

  <li>
    <strong><a href="{{ pub.paperurl }}">{{ pub.title }}</a></strong><br>
    {{ pub.authors }}.<br>
    <em>{{ pub.venue_full }}</em> (<strong>{{ pub.venue }}</strong>).
    {% if pub.note %}<strong> — {{ pub.note }}</strong>{% endif %}
  </li>

{% endfor %}
</ul>