---
title: Team
permalink: /contact/team/
slug: team
type: text

placeholder_colours:
  - background: "var(--uos-dark-violet)"
    color: "var(--uos-wave-white)"
  - background: "var(--uos-purple)"
    color: "var(--uos-wave-white)"
  - background: "var(--uos-teal)"
    color: "var(--uos-wave-white)"
  - background: "var(--uos-peak-green)"
    color: "var(--uos-wave-white)"

---

Current members of the Research Software Engineering team are listed below. Previous members of the team can be found on our [Alumni](../alumni) page.

{% assign people = site.people | sort: 'othernames' | sort: 'surname' | sort: 'level'  %}
{% assign placeholder_idx = 0 %}
<div class="people-list row">
{% for person in people %}
  {% if person.alumnum == false %}
    <div class="col-12 col-sm-6 col-lg-4 mb-4 d-flex">
      {% assign colour_idx = placeholder_idx | modulo: page.placeholder_colours.size %}
      {% assign colours = page.placeholder_colours[colour_idx] %}
      {% include team_member_card.html person=person placeholder_color=colours.color placeholder_background=colours.background show_name=true show_role=true show_extra_links=false %}
    </div>
    {% assign placeholder_idx = placeholder_idx | plus: 1 %}
  {% endif %}
{% endfor %}
</div>
