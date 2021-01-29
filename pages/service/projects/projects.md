---
title: Projects
permalink: /service/projects/
slug: projects
type: text
---

Research Software Engineering team projects are listed below.

{% assign projects = site.projects | sort: 'shortname' %}
<div class="project-list">
    {% for project in site.projects %}
        <h2>{{project.longname}}</h2>
        {{ project.description }}
    {% endfor %}
</div>
