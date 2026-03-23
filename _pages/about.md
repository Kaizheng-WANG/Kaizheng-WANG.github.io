---
permalink: /
title: "Kaizheng WANG"
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<!-- {% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %} -->

<!-- <span class='anchor' id='about-me'></span>-->

# About Me
<p style="text-align: justify;">
I am Kaizheng Wang (王凯征), a research fellow at the College of Computing and Data Science, Nanyang Technological University, Singapore, working under the supervision of <a href="https://chau999.github.io/">Prof. Siu Lun Chau</a>. I obtained my PhD from the Department of Computer Science at KU Leuven, Belgium, where I was advised by <a href="https://www.kuleuven.be/wieiswie/en/person/00080562">Prof. Hans Hallez</a> and <a href="https://www.kuleuven.be/wieiswie/en/person/00012025">Prof. David Moens</a>. I have also had the privilege of working closely with <a href="https://www.brookes.ac.uk/profiles/staff/fabio-cuzzolin">Prof. Fabio Cuzzolin</a>, from whom I have also received invaluable guidance.
</p>

<p style="text-align: justify;">
My current research centers on uncertainty representation and quantification in deep learning, aiming to enhance the robustness, reliability, and trustworthiness of machine learning models. If you have any questions about my research or would like to collaborate with me, please feel free to reach out to me.
</p>

# News
<ul>
{% for item in site.data.news %}
  <li><strong>{{ item.date }}:</strong> {{ item.content | markdownify | remove: '<p>' | remove: '</p>' }}</li>
{% endfor %}
</ul>

# Publications
{% assign first_author_pubs = site.publications 
    | where: "first_author", true 
    | sort: "date" 
    | reverse %}

{% assign coauthor_pubs = site.publications 
    | where: "first_author", false 
    | sort: "date" 
    | reverse %}

<!-- <h2>First-Author Papers</h2> -->
<ul>
{% for pub in first_author_pubs %}
  {% assign authors_clean = pub.authors | strip %}
  {% assign authors_bold = authors_clean | replace: "Kaizheng Wang,", "<strong>Kaizheng Wang</strong>," %}
  {% if authors_bold == authors_clean %}
    {% assign authors_bold = authors_clean | replace: "Kaizheng Wang", "<strong>Kaizheng Wang</strong>" %}
  {% endif %}
  <li>
    <a href="{{ pub.paperurl }}"><strong>{{ pub.title }}</strong></a><br>
    <small><em>{{ authors_bold }}</em>.<br>
    {{ pub.venue_full | default: pub.venue }} (<strong>{{ pub.venue }}</strong>), {{ pub.date | date: "%Y" }}.
    {% if pub.note and pub.note != "" %}
      {% assign highlight_flag = false %}
      {% if pub.highlight == true or pub.highlight == "true" %}
        {% assign highlight_flag = true %}
      {% endif %}
      {% if highlight_flag %}
        <span style="color: blue; font-weight: bold;">{{ pub.note }}.</span>
      {% else %}
        {{ pub.note }}.
      {% endif %}
    {% endif %}</small>
  </li>
{% endfor %}
</ul>

<!-- <h2>Co-Author Papers</h2> -->

<ul>
{% for pub in coauthor_pubs %}
  {% assign authors_clean = pub.authors | strip %}
  {% assign authors_bold = authors_clean | replace: "Kaizheng Wang,", "<strong>Kaizheng Wang</strong>," %}
  {% if authors_bold == authors_clean %}
    {% assign authors_bold = authors_clean | replace: "Kaizheng Wang", "<strong>Kaizheng Wang</strong>" %}
  {% endif %}
  <li>
    <a href="{{ pub.paperurl }}"><strong>{{ pub.title }}</strong></a><br>
    <small><em>{{ authors_bold }}</em>.<br>
    {{ pub.venue_full | default: pub.venue }} (<strong>{{ pub.venue }}</strong>), {{ pub.date | date: "%Y" }}.
    {% if pub.note and pub.note != "" %}
      {% assign highlight_flag = false %}
      {% if pub.highlight == true or pub.highlight == "true" %}
        {% assign highlight_flag = true %}
      {% endif %}
      {% if highlight_flag %}
        <span style="color: red; font-weight: bold;">{{ pub.note }}.</span>
      {% else %}
        {{ pub.note }}.
      {% endif %}
    {% endif %}</small>
  </li>
{% endfor %}
</ul>

# Educations
<style>
.edu-card-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  padding-left: 0; 
}

.edu-card {
  display: flex;
  align-items: center;
  background: #fafafa;
  border-radius: 14px;
  padding: 14px 18px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  width: 100%;
  max-width: 760px;   
  margin-left: 0;    
}


.edu-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.12);
}


.edu-card img {
  height: auto;
  width: 140.0px;
  border-radius: 8px;
  margin-right: 15px;
  flex-shrink: 0;
  object-fit: contain;
  background-color: white;
  padding: 2px;
}

.edu-card .edu-body {
  text-align: left;
  line-height: 1.45;
}

.edu-card b {
  font-size: 1rem;
  color: #222;
}
.edu-card span {
  color: #666;
  font-size: 0.95rem;
}
.edu-card small {
  color: #888;
  font-size: 0.85rem;
}

@media (max-width: 600px) {
  .edu-card {
    flex-direction: column;
    align-items: flex-start;
    max-width: 100%;   
    padding: 12px;
  }
  .edu-card img {
    margin-right: 0;
    margin-bottom: 8px;
  }
  .edu-card-container {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>

<div class="edu-card-container">
  {% for edu in site.data.education %}
  <div class="edu-card">
    <img src="{{ edu.logo }}" alt="{{ edu.institution }}">
    <div class="edu-body">
      <b>{{ edu.degree }}</b><br>
      <span>{{ edu.institution }}, {{ edu.location }}</span><br>
      <small>{{ edu.date }}</small>
    </div>
  </div>
  {% endfor %}
</div>

# Services
<ul>
{% for service in site.data.services %}
  <li><strong>{{ service.type }}:</strong> {{ service.description | markdownify | remove: '<p>' | remove: '</p>' }}</li>
{% endfor %}
</ul>