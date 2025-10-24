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
      grid-template-areas: "image content"; /* Named areas */
    }

    .proj-content > img {
      max-height: 250px;
      grid-area: image; /* Place image in the 'image' area */
    }

    .proj-content > div { /* Target the content div */
      grid-area: content; /* Place content in the 'content' area */
    }

    .proj-content.no-image {
      grid-template-columns: 1fr; /* Single column when no image */
      grid-template-areas: "content"; /* Content takes full width */
      justify-items: start; /* Align content to the left when full width */
    }

    .proj-testimonial {
      padding:1.2em 15px 1.2em 15px;
      border-left:8px solid var(--uos-powder-violet);
      font-style: italic;
    }

    .proj-testimonial span {
      display: block;
      font-weight: bold;
      margin-top: 1em;
    }

    @media only screen and (max-width:768px) {

      .project > .proj-content {
        display: block;
      }

      .proj-content > img {
        padding-bottom: 1em;
      }
    }

</style>

The Research Software Engineering team at Sheffield has worked on projects involving a variety of methods and technologies, below are some of the projects we have either worked on or are currently working on:

{% assign today_date = 'now' | date: '%s' %}
{% assign projects = site.case_studies %}

<div class="current-project-list">
{% for project in projects %}
    {% if project.include %}
    <div class="project">
      <h3>{{ project.title }}</h3>
      <h4>{% include join_list_commas_and.html list=project.pi_name %}</h4>
      <h5>{{ project.dept}}</h5>
      <hr/>
      <b>{{ project.start_date | date_to_string }} - {{ project.end_date | date_to_string }}</b>
      <br/>
      RSE{% if project.rses.size > 1 %}s{% endif %}: <em>{% include join_list_commas_and.html list=project.rses %}</em>
      <br/>
      {%- if project.collaborators.size > 0 -%}
      Collaborator{% if project.collaborators.size > 1 %}s{% endif %}: <em>{% include join_list_commas_and.html list=project.collaborators %}</em>
      {%- endif -%}
      <div class="proj-content {% if project.image == blank %}no-image{% endif %}">
        {% if project.image %}
        <img src="/assets/images/project_images/{{ project.image }}">
        {% endif %}
        <div>
          {{ project.content }}
        </div>
      </div>
      <hr/>
      {%- if project.testimonial['quote'] -%}
      <blockquote class = "proj-testimonial">
        {{ project.testimonial['quote'] | markdownify }}
        <span>{{ project.testimonial['author'] }}</span>
      </blockquote>
      <hr/>
      {%- endif -%}

      <b>Funding source{% if project.funding_sources.size > 1 %}s{% endif %}: </b> 
      <ul>
      {% for source in project.funding_sources %}
      <li> 
      {%- if source['url'] -%}
      <a href = "{{ source['url'] }}">{{ source['name'] }}</a>
      {%- else -%}
      {{ source['name'] }}
      {%- endif -%}
      </li>
      {% endfor %}
      </ul>

      <b>Software: </b><a href = "{{ project.software_link['url']}}">{{ project.software_link['name'] }}</a>
      <br/>
      <b>Publication{% if project.publication_links.size > 1 %}s{% endif %}:</b>
      <ul>
      {% for link in project.publication_links %}
      <li> <a href = "{{ link['url'] }}">{{ link['description'] }}</a> </li>
      {% endfor %}
      </ul>
    </div>
    {% endif %}
{% endfor %}
</div>
