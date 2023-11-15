---
title: Alumni
permalink: /contact/alumni/
slug: alumni
type: text
---

Previous members of the RSE Sheffield team:

{% assign people = site.people | sort: 'othernames' | sort: 'surname' | sort: 'level'  %}
<div class="people-list">
{% for person in people %}
    {% if person.alumnum == true %}
      {% if person.othernames and person.surname %}
        <h2><a href="{{person.url}}">{{person.othernames}} {{person.surname}}</a></h2>
      {% endif %}
      {{ person.content }}
    {% endif %}
{% endfor %}
</div>
