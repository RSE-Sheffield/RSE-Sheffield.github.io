---
title: Projects
permalink: /service/projects/
slug: projects
type: text
---

Research Software Engineering team projects are listed below.

<hr/>

{% assign projects = site.data.projects | sort: 'title' %}
{% assign project_descriptions = site.project_descriptions %}
{% assign today_date = 'now' | date: '%s' %}

<div class="current-project-list">
    {% for project in projects %}
        {% assign project_end_date = project.end | date: '%s' %}
        <b>{{project.long_title}}</b>
        <br/>
        {% if project_end_date >= today_date %}
        <b>Active project</b>
        {% else %}
        <b>Completed project</b>
        {% endif %}
        <br>
        {{project.start}} - {{project.end}}
        <br/>
        Collaborating dept/group/org: <em>{{project.department}}</em>
        <br/>
        Technology and methods: <em>{{project.tech_methods}}</em>
        <br/>
        RSEs involved: <em>{{project.rses}}</em>
        <br/>
        {% for project_description in project_descriptions %}
            {% if project_description.key == project.key %}                    
                <br/>
                {{project_description.content}}
            {% endif %}
        {% endfor %}            
        <br/>
    {% endfor %}
</div>

