---
title: Seminar Series
permalink: /community/seminars/
slug: seminars
type: text
---

<div class="alert alert-danger" role="alert"> This page has been archived and is retained solely for reference purposes.</div>

The RSE group organises seminars and promotes seminars from other groups which are of interest to the community. 
If you have an interesting seminar then announce it on the [mailing-list](/community). 
Below are a number of seminars which are scheduled or have taken place.


We aim to hold lunchtime seminars in the last week of every month, inviting speakers to talk about a wide range of topics that involves practical issues relating to research software.

If you would like to recommend a speaker or would like to give a talk then please [contact us](/contact). We have a budget to support inviting speakers.

*Note: The [GPU computing](http://gpucomputing.shef.ac.uk/seminars/) seminar series has now been merged with the RSE seminar series. Talks on GPU computing will be advertised through both mailing lists.*

{% assign seminars = site.events | where: 'category', 'seminar' | sort: 'date' | reverse %}
{% if seminars and seminars.size > 0 %}

## Seminars

{% for seminar in seminars %}
    {% assign object = seminar %}
  {% include seminar_individual.html event=seminar %}
{% endfor %}

{% endif %}

<script type="text/javascript">
    // Get the current date 
    var now = new Date();
    // Select all seminar elements
    var elements = document.getElementsByClassName("seminar-section");
    // Select the seminars heading
    var seminars_heading = document.getElementById("seminars");
    // Initialise a variable to store the last event which is in the future
    last_upcoming_element = null;
    // Iterate elements
    for (var i = 0; i < elements.length; i++) {
        element = elements[i]
        // Construct a date object based on the date of the event
        split_id = element.id.split("-")
        seminar_date = new Date(split_id[1], split_id[2] - 1, split_id[3]);
        // If the event is in the future, store it.
        if(seminar_date > now){
            last_upcoming_element = element
        }
    }
    // Modify / insert headings as appropriate, based on if any future seminars exist
    if(last_upcoming_element != null){
        // Modify existing heading
        seminars_heading.textContent = "Upcoming Seminars";
        // Inert a new heading after the last future event
        new_heading = document.createElement(seminars_heading.nodeName);
        new_heading.textContent = "Previous Seminars";
        last_upcoming_element.insertAdjacentElement('afterend', new_heading);
    } else {
        // Modify existing heading
        seminars_heading.textContent = "Previous Seminars";
    }
</script>

