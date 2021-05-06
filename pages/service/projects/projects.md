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
{% assign proj_tags = proj.tech_methods | split: ", " %}
{% assign all_tags = all_tags | concat: proj_tags %}
{% endfor %}
{% assign all_tags = all_tags | sort_natural | uniq %}
{% for tag in all_tags %}<a class="tag-link" href="#{{ tag | replace: " ", "-" | replace: ".", "DOT" | replace: "#", "HASH" | replace: "&", "AND" | replace: "+", "PLUS" }}">{{ tag | replace: " ", "&nbsp;"}}</a>{% if tag != all_tags.last %} &middot; {% endif %}{% endfor %}

Some projects we have worked on (not a comprehensive list):

Filter: <a class="filter-link selected" href="">All</a> &middot; <a class="filter-link" href="#active">Active</a> &middot; <a class="filter-link" href="#completed">Completed</a>

{% assign levels = site.data.projects | where: 'show',1 | group_by: 'level' | sort: 'name' %}
{% assign project_descriptions = site.project_descriptions %}
{% assign today_date = 'now' | date: '%s' %}

<div class="current-project-list">
    {% for level in levels %}
        {% assign projects = level.items | sort:'title' %}
        {% for project in projects %}
        {% assign project_end_date = project.end | date: '%s' %}
        {% if project_end_date >= today_date or project.end == undefined %}
            {% assign current = true %}
        {% else %}
            {% assign current = false %}
        {% endif %}
        {% assign proj_tags = project.tech_methods | split: ", " %}
        <div class="project {% if current %}active{% else %}completed{% endif %}{% for tag in proj_tags %} tag-{{ tag | replace: " ", "-" | replace: ".", "DOT" | replace: "#", "HASH" | replace: "&", "AND" | replace: "+", "PLUS" }}{% endfor %}">
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
        <hr/>
    {% endfor %}
</div>
<script>
window.addEventListener('load', (event) => {
    if (window.location.hash) {
        var tag = window.location.hash.slice(1);
        // Find the matching tag
        $("a.tag-link[href$='"+tag+"']").trigger("click");
        $("a.filter-link[href$='"+tag+"']").trigger("click");
    }
});
</script>
