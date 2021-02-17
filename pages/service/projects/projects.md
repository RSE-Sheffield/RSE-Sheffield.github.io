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
    {% if project_end_date >= today_date %}
        {% assign current = true %}
    {% else %}
        {% assign current = false %}
    {% endif %}
    <div style="background-color: {% if current %}#eebf3f{% else %}#999{% endif %}">
        <b>{{project.long_title}}</b>
        <br/>
        {% if current %}
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
    </div>
    {% endfor %}
</div>

