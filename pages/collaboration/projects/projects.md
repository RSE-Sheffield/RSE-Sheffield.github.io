---
title: Projects
permalink: /collaboration/projects/
slug: projects
type: text
---

<style>
    .project {
        color: #656565;
        background-color: WhiteSmoke;
        padding: 10px;
        border: 1px solid gray;
        margin: 10px;
    }

    .project > .proj-content {
        display: grid;
        grid-template-columns: 1fr 2fr;
        margin-top: 1rem;
        column-gap: 25px;
        justify-items: center;
    }

    .proj-content > img {
        max-height: 250px;
    }

    .proj-testimonial {
      padding:1.2em 15px 1.2em 15px;
      border-left:8px solid var(--uos-deep-violet-70);
      font-style: italic;
    }

    .proj-testimonial span {
      display: block;
      font-weight: bold;
      margin-top: 1em;
    }

</style>

The Research Software Engineering team at Sheffield has worked on projects involving a variety of methods and technologies, below are some of the projects we have either worked on are are currently working on:

{% assign today_date = 'now' | date: '%s' %}
{% assign projects = site.case_studies %}

<div class="current-project-list">
{% for project in projects %}
    {% if project.include %}
    <div class="project">
      <h3>{{ project.title }}</h3>
      <h4>{{ project.pi_name}}</h4>
      <h5>{{ project.dept}}</h5>
      <hr/>
      <b>{{ project.start_date | date_to_string }} - {{ project.end_date | date_to_string }}</b>
      <br/>
      RSE(s): <em> {{ project.rses | join: ", " }} </em>
      <br/>
      {%- if project.collaborators.size > 0 -%}
      Collaborator(s): <em>{{ project.collaborators | join: ", " }}</em>
      {%- endif -%}
      <div class = "proj-content">
          <img src="/assets/images/project_images/{{ project.image }}">
          <div>
            {{ project.content}}
          </div>
      </div>
      <hr/>
      {%- if project.testimonial['quote'] -%}
      <blockquote class = "proj-testimonial">
        {{ project.testimonial['quote'] }}
        <span>{{ project.testimonial['author'] }}</span>
      </blockquote>
      <hr/>
      {%- endif -%}
      <b>Funding source(s): </b> {{ project.funding_sources | join: ", " }}
      <br/>
      <b>Software: </b><a href = "{{ project.software_link['url']}}">{{ project.software_link['name'] }}</a>
      <br/>
      <b>Publication(s):</b>
      <ul>
      {% for link in project.publication_links %}
      <li> <a href = "{{ link['url'] }}">{{ link['description'] }}</a> </li>
      {% endfor %}
      </ul>
    </div>
    {% endif %}
{% endfor %}
</div>
