---
title: Contributions of the RSE team
permalink: /collaboration/evidence/
slug: evidence
type: text
---

<style> /* Highlight the active tab and dim the inactive ones */
  .project-tab .nav-link.active {
      filter: brightness(1.2); 
      border: 2px solid #333 !important;
      font-weight: bold;
      opacity: 1 !important;}

  .project-tab .nav-link {
      opacity: 0.7;}
</style>

The RSE team at Sheffield contributed to multiple areas of the research eco-system along the years. This can take a form of research publication, software releases, committee membership, event organisations, etc. 
We are listing here all the contribution made be our team and we grouped them in five categories:

* **Software and repositories:** As Research software engineers, this is our main work. This section mainly reports software repositories & releases of research software but might occasionaly highlights training development that we make open source on github.  
* **Traditional outputs:** This includes refereed papers, conference contributions & grants.
* **University activities:** We are taking part in multiple activites at the University of Sheffield and we list them all here. This can be committees, training organisation, workshops, etc. 
* **External activities:** This is all the activities we are doing outside of the University in the RSE community. Activities include invited talks and lectures, conference committees, panels,etc.
* **Others activities:** Any other things that show our contributions such as blog posts, awards or non-traditional bids.

<em>Note: This is a dynamically generated page and is continually updated.</em>


<br>

<section id="tabs" class="project-tab">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <nav>
                        <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                            <a class="nav-item nav-link active" id="nav-software-tab" data-toggle="tab" href="#nav-software" role="tab" aria-controls="nav-software" aria-selected="false" style="background-color: rgba(82, 184, 108, 0.7)">Software & repositories</a>
                            <a class="nav-item nav-link" id="nav-papers-tab" data-toggle="tab" href="#nav-papers" role="tab" aria-controls="nav-papers" aria-selected="true" style="background-color: rgba(68, 0, 153, 0.3)">Traditional outputs</a>
                            <a class="nav-item nav-link" id="nav-uos-tab" data-toggle="tab" href="#nav-uos" role="tab" aria-controls="nav-uos" aria-selected="false" style="background-color: rgba(235, 201, 68, 0.7)"  >University activities</a>
                            <a class="nav-item nav-link" id="nav-external-tab" data-toggle="tab" href="#nav-external" role="tab" aria-controls="nav-external" aria-selected="false"  style="background-color: rgba(68, 0, 153, 0.3)">External activities</a>
                            <a class="nav-item nav-link" id="nav-others-tab" data-toggle="tab" href="#nav-others" role="tab" aria-controls="nav-others" aria-selected="false" style="background-color: rgba(18, 169, 212, 0.7)" >Other activites</a>
                        </div>
                    </nav>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade" id="nav-papers" role="tabpanel" aria-labelledby="nav-papers-tab">
                            {% include evidence_papers_list.html %}
                            </div>
                            <div class="tab-pane fade show active" id="nav-software" role="tabpanel" aria-labelledby="nav-software-tab"> 
                            {% include evidence_software_list.html %}
                            </div>
                            <div class="tab-pane fade" id="nav-uos" role="tabpanel" aria-labelledby="nav-uos-tab">
                            {% include evidence_uos_list.html %}
                            </div>
                            <div class="tab-pane fade" id="nav-external" role="tabpanel" aria-labelledby="nav-external-tab">
                            {% include evidence_external_list.html %}
                            </div>
                            <div class="tab-pane fade" id="nav-others" role="tabpanel" aria-labelledby="nav-others-tab">
                            {% include evidence_others_list.html %}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

<br>
<br>
