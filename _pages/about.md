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
I am Kaizheng Wang (王凯征), a postdoctoral research fellow at the College of Computing and Data Science, Nanyang Technological University, Singapore, working under the supervision of [Prof. Siu Lun Chau](https://chau999.github.io/).I obtained my PhD from the Department of Computer Science at KU Leuven, Belgium, where I was advised by [Prof. Hans Hallez](https://www.kuleuven.be/wieiswie/en/person/00080562) and [Prof. David Moens](https://www.kuleuven.be/wieiswie/en/person/00012025). I have also had the privilege of working closely with [Prof. Fabio Cuzzolin](https://www.brookes.ac.uk/profiles/staff/fabio-cuzzolin), from whom I have also received invaluable guidance.

My current research centers on uncertainty representation and quantification in deep learning, aiming to enhance the robustness, reliability, and trustworthiness of machine learning models. If you have any questions about my research or would like to collaborate with me, please feel free to reach me.

# News
- **2026.01.12**: 🎉🎉 I officially started my journey as a research fellow at NTU.
- **2025.11.08**: 🎉🎉 Our Credal Ensemble Distillation paper was accpeted by AAAI 2026.
- **2025.10.31**: 🎉🎉 I successfully defended my PhD on *Deep Credal Neural Networks for Uncertainty Quantification*. I sincerely thank all the amazing people for their years of support, guidance, and encouragement.
- **2025.10.26**: 🎉🎉 Our review paper was accpeted by TPAMI.
- **2025.02.11**: 🎉🎉 Our Credal Wrapper paper was awarded Spotlight by ICLR 2025 (3.3% acceptance rate).
- **2025.01.22**: 🎉🎉 Two papers were accpeted by ICLR 2025.

# Selected Publications

{% assign pubs = site.publications | where: "selected", true | sort: "date" | reverse %}

{% for pub in pubs %}
- **[{{ pub.title }}]({{ pub.paperurl }})**  
<li>
  <strong>Title</strong><br>
  <span style="font-size: 0.9em;">
    Authors.<br>
    Venue.
  </span>
</li>

{% endfor %}

[→ Full publication list](/publications/)

# Educations
<style>
/* 容器：占满可用宽度，但不把内容居中 */
.edu-card-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  /* 不设置 margin:0 auto; 以保证左对齐 */
  padding-left: 0; /* 如果你的页面主体有内边距，可按需调整 */
}

/* 单个卡片：限定最大宽度，保证不太长，并且左对齐 */
.edu-card {
  display: flex;
  align-items: center;
  background: #fafafa;
  border-radius: 14px;
  padding: 14px 18px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  /* 关键：设置固定的 max-width，让卡片看起来不太长 */
  width: 100%;
  max-width: 760px;   /* ← 改这个值可以控制卡片“长度” */
  margin-left: 0;     /* 左对齐（重要） */
}

/* 鼠标悬停微动画 */
.edu-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.12);
}

/* logo 以高度为基准，保持比例 */
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

/* 文字左对齐（在卡片内） */
.edu-card .edu-body {
  text-align: left;
  line-height: 1.45;
}

/* 文字样式 */
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

/* 📱 手机端：卡片变竖排，宽度为100%（占满容器） */
@media (max-width: 600px) {
  .edu-card {
    flex-direction: column;
    align-items: flex-start;
    max-width: 100%;   /* 手机上占满 */
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

  <div class="edu-card">
    <img src="/assets/images/education/ku_leuven_v2.png" alt="KU Leuven">
    <div class="edu-body">
      <b>PhD in Engineering Technology</b><br>
      <span>KU Leuven, Bruges, Belgium</span><br>
      <small>2021.11 - 2025.10</small>
    </div>
  </div>

  <div class="edu-card">
    <img src="/assets/images/education/rwth_v2.png" alt="RWTH Aachen">
    <div class="edu-body">
      <b>MSc in Automation Engineering</b><br>
      <span>RWTH Aachen University, Aachen, Germany</span><br>
      <small>2018.04 - 2020.10</small>
    </div>
  </div>

  <div class="edu-card">
    <img src="/assets/images/education/zju_v2.png" alt="Zhejiang University">
    <div class="edu-body">
      <b>BEng in Mechatronics Engineering</b><br>
      <span>Zhejiang University, Hangzhou, China</span><br>
      <small>2013.09 - 2017.06</small>
    </div>
  </div>

</div>



# Academic and Educational Services
- **Workshop Organization**: Co-organizer of [E-pi UAI 2023](https://sites.google.com/view/epi-workshop-uai-2023/home?authuser=0)
- **Conference Reviewer**: NeurIPS; ICLR; ICML; AAAI; IJCAI; AISTATS
- **Journal Reviewer**: TMLR; IEEE SPL; IEEE OJCS
- **Teaching**: Lab session of *AI in Embedded Systems* \[B-KUL-B3076T\]
- **Master Thesis Supervision**: T. Demeulenaere and S. Francq (2022-2023); L. De Jonckheere (2022-2023); A. Beigrezaei (2023-2024)

 