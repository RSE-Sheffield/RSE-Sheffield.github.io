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
            <b>{{project.longname}}</b>
            <br/>
            RSEs involved: <em>{{project.rses}}</em>
            <br/>
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
            <b>{{project.longname}}</b>
            <br/>
            RSEs involved: <em>{{project.rses}}</em>
            <br/>
                {{ project.content }}
        {% endif %}
    {% endfor %}
</div>
