---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% assign pubs = site.publications | sort: "date" | reverse %}

{% for pub in pubs %}

### {{ pub.date | date: "%Y" }}

{% break %}
{% endfor %}

{% assign current_year = "" %}

{% for pub in pubs %}
{% assign year = pub.date | date: "%Y" %}

{% if year != current_year %}
## {{ year }}
{% assign current_year = year %}
{% endif %}

- **[{{ pub.title }}]({{ pub.paperurl }})**  
  <small>
  {{ pub.authors }}.<br>
  <i>{{ pub.venue_full }}</i> (<strong>{{ pub.venue }}</strong>).
  {% if pub.note %}<strong>— {{ pub.note }}</strong>{% endif %}
  </small>

{% endfor %}