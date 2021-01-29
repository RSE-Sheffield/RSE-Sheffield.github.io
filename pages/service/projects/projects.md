---
title: Projects
permalink: /service/projects/
slug: projects
type: text
---

Research Software Engineering team projects are listed below.

<hr/>

## Current Projects

{% assign projects = site.projects | sort: 'longname' %}
<div class="current-project-list">
    {% for project in site.projects %}
        {% if project.current == true %}
            <h3>{{project.longname}}</h3>
            <p>RSEs involved: <em>{{project.rses}}</em></p>
            <b>Project Description</b>
                {{ project.content }}
        {% endif %}
    {% endfor %}
</div>

<hr/>

## Previous Projects

{% assign projects = site.projects | sort: 'longname' %}
<div class="current-project-list">
    {% for project in site.projects %}
        {% if project.current == false %}
            <h3>{{project.longname}}</h3>
            <p>RSEs involved: <em>{{project.rses}}</em></p>
            <b>Project Description</b>
                {{ project.content }}
        {% endif %}
    {% endfor %}
</div>
