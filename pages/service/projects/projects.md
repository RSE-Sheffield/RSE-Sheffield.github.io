---
title: Projects
permalink: /service/projects/
slug: projects
type: text
---

Research Software Engineering team projects are listed below.

<hr/>

## Current Projects

{% assign projects = site.data.projects | sort: 'title' %}
{% assign project_descriptions = site.project_descriptions %}
{% assign today_date = 'now' | date: '%s' %}

<div class="current-project-list">
    {% for project in projects %}
        {% assign project_end_date = project.end | date: '%s' %}
        {% if project_end_date >= today_date %}
            {% for project_description in project_descriptions %}
                {% if project_description.key == project.key %}
                    <b>{{project.long_title}}</b>
                    <br/>
                    Collaborating Department: {{project.department}}
                    <br/>
                    Description
                    <br/>
                    {{project_description.content}}
                {% endif %}
            {% endfor %}
        {% endif %}
    {% endfor %}
</div>

<hr/>

## Previous Projects

<div class="previous-project-list">
    {% for project in projects %}
        {% assign project_end_date = project.end | date: '%s' %}
        {% if project_end_date < today_date %}
            {% for project_description in project_descriptions %}
                {% if project_description.key == project.key %}
                    <b>{{project.long_title}}</b>
                    <br/>
                    Collaborating Department: {{project.department}}
                    <br/>
                    Description
                    <br/>
                    {{project_description.content}}
                {% endif %}
            {% endfor %}
        {% endif %}
    {% endfor %}
</div>
