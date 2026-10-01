---
permalink: /
title: "Kaizheng WANG"
---

# About Me
<p style="text-align: justify;">
I am Kaizheng Wang (王凯征), a Research Fellow at Nanyang Technological University, Singapore, working with <a href="https://chau999.github.io/">Prof. Siu Lun Chau</a>. I received my PhD from KU Leuven, Belgium, where I was supervised by <a href="https://www.kuleuven.be/wieiswie/en/person/00080562">Prof. Hans Hallez</a> and <a href="https://www.kuleuven.be/wieiswie/en/person/00012025">Prof. David Moens</a>, and closely mentored by <a href="https://www.brookes.ac.uk/profiles/staff/fabio-cuzzolin">Prof. Fabio Cuzzolin</a>. Before that, I obtained my Bachelor's degree from Zhejiang University and my Master's degree from RWTH Aachen University.
</p>

<p style="text-align: justify;">
My research sits at the intersection of imprecise probability and machine learning, focusing on uncertainty representation and quantification in deep learning. My overarching goal is to build machine learning models that are robust, reliable, and trustworthy---achieved by designing epistemic learning algorithms that embed uncertainty-aware intelligence into AI systems, enabling them to recognize the boundaries of their own knowledge, across principled frameworks and high-stakes real-world applications.
</p>

<p style="text-align: justify;">
Always happy to discuss ideas or collaborate---please feel free to reach out!
</p>

# News
<ul id="news-list">
{% for item in site.data.news %}
  <li data-date="{{ item.date }}"><strong>{{ item.date }}:</strong> {{ item.content | markdownify | remove: '<p>' | remove: '</p>' }}</li>
{% endfor %}
</ul>
<script>
  // Show only news from the last 12 months. This runs in the visitor's browser,
  // so old items drop off by themselves without rebuilding the site.
  // All items stay in _data/news.yml (keep it newest first).
  (function () {
    var items = document.querySelectorAll('#news-list li');
    var cutoff = new Date();
    cutoff.setFullYear(cutoff.getFullYear() - 1);
    var shown = 0;
    items.forEach(function (li) {
      var p = li.getAttribute('data-date').split('.');   // "YYYY.MM.DD"
      var date = new Date(+p[0], +p[1] - 1, +p[2]);
      if (date < cutoff) { li.style.display = 'none'; } else { shown++; }
    });
    if (shown === 0 && items.length) { items[0].style.display = ''; }  // nothing recent: keep the latest item
  })();
</script>

# Selected Publications
{% assign first_author_pubs = site.publications 
    | where: "first_author", true 
    | sort: "date" 
    | reverse %}

<ul>
{% for pub in first_author_pubs %}
  {% assign authors_bold = pub.authors | strip | replace: "Kaizheng Wang", "<strong>Kaizheng Wang</strong>" %}
  <li>
    <a href="{{ pub.paperurl }}"><strong>{{ pub.title }}</strong></a><br>
    <small><em>{{ authors_bold }}</em>.<br>
    {{ pub.venue_full | default: pub.venue }} (<strong>{{ pub.venue }}</strong>), {{ pub.date | date: "%Y" }}.
    {% if pub.note and pub.note != "" %}
      {% if pub.highlight %}
        <span style="color: blue; font-weight: bold;">{{ pub.note }}.</span>
      {% else %}
        {{ pub.note }}.
      {% endif %}
    {% endif %}</small>
  </li>
{% endfor %}
</ul>

# Education
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

# Awards
<ul>
{% for award in site.data.awards %}
  <li><strong>{{ award.type }}</strong> {{ award.description | markdownify | remove: '<p>' | remove: '</p>' }}</li>
{% endfor %}
</ul>

# Services
<ul>
{% for service in site.data.services %}
  <li><strong>{{ service.type }}:</strong> {{ service.description | markdownify | remove: '<p>' | remove: '</p>' }}</li>
{% endfor %}
</ul>
