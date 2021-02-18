---
title: Projects
permalink: /service/projects/
slug: projects
type: text
---

<style>
    .active {
        padding: 10px;
        border: 1px solid gray;
        margin: 10px;
        }   
    .completed {
        color: #656565;
        background-color: WhiteSmoke;
        padding: 10px;
        border: 1px solid gray;
        margin: 10px;
    }    
</style>

The Research Software Engineering team at Sheffield has worked on projects involving a variety of methods and technologies:

{% for proj in site.data.projects %}
{% assign proj_tags = proj.tech_methods | split: "," %}
{% assign all_tags = all_tags | concat: proj_tags %}
{% endfor %}
{{ all_tags | sort_natural | uniq | join: " &middot; " }}

Some projects we have worked on (not a comprehensive list):

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
    <div class="{% if current %}active{% else %}completed{% endif %}">
        <b>{{project.long_title}} </b>
        {% if current %}
            (Active project)
        {% else %}
            (Completed project)
        {% endif %}
        <hr/>
        {{project.start}} - {{project.end}}
        <br/>
        Collaborating with: <em>{{project.department}}</em>
        <br/>
        Technology and methods: <em>{{project.tech_methods}}</em>
        <br/>
        RSEs involved: <em>{{project.rses}}</em>
        <hr/>
        {% for project_description in project_descriptions %}
            {% if project_description.key == project.key %}                    
                <br/>
                {{project_description.content}}
            {% endif %}
        {% endfor %}            
    </div>
    {% endfor %}
</div>

