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
            <b>{{project.long_title}}</b>
            <br/>
            Collaborating Department: <em>{{project.department}}</em>
            <br/>
            Technology and methods: <em>{{project.tech_methods}}</em>
            <br/>
            {% for project_description in project_descriptions %}
                {% if project_description.key == project.key %}                    
                    Description       
                    <br/>
                    {{project_description.content}}
                    <br/>
                {% endif %}
            {% endfor %}            
            RSEs involved: <em>{{project.rses}}</em>
            <br/><br/>
        {% endif %}
    {% endfor %}
</div>

<hr/>

## Previous Projects

<div class="previous-project-list">
    {% for project in projects %}
        {% assign project_end_date = project.end | date: '%s' %}
        {% if project_end_date < today_date %}
            <b>{{project.long_title}}</b>
            <br/>
            Collaborating Department: <em>{{project.department}}</em>
            <br/>
            Technology and methods: <em>{{project.tech_methods}}</em>
            <br/>
            {% for project_description in project_descriptions %}
                {% if project_description.key == project.key %}                    
                    Description       
                    <br/>
                    {{project_description.content}}
                    <br/>
                {% endif %}
            {% endfor %}            
            RSEs involved: <em>{{project.rses}}</em>
            <br/><br/>
        {% endif %}
    {% endfor %}
</div>
