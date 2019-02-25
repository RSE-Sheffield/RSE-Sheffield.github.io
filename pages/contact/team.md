---
title: Team
permalink: /contact/team/
slug: team
type: text
---

Current members of the Research Software Engineering team are listed below. Previous members of the team can be found on our [Alumni](../alumni) page.

{% assign people = site.people | sort: 'othernames' | sort: 'surname' | sort: 'level'  %}
<div class="people-list">
{% for person in people %}
    {% if person.alumni == false %}
      {% if person.othernames and person.surname %}
        <h1><a href="{{person.url}}">{{person.othernames}} {{person.surname}}</a></h1>
      {% endif %}
      {{ person.content }}
    {% endif %}
{% endfor %}
</div>
