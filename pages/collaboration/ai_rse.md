---
title: Perspective from the RSE team on the use of AI
permalink: /collaboration/ai_rse
slug: evidence
type: text
---

<div id="rse-accordion" class="accordion shadow-sm"> 
  <div class="card border-bottom-0">
    <div class="card-header" id="headingOne" style="background-color: rgba(90,185,107,0.7); border: none;">
      <h5 class="mb-0">
        <button class="btn btn-link btn-block text-left d-flex justify-content-between align-items-center text-dark font-weight-bold" 
                type="button" 
                data-toggle="collapse" 
                data-target="#collapseOne" 
                aria-expanded="true" 
                aria-controls="collapseOne"
                style="text-decoration: none;">
            Collaboration, trust and transparency
          <i class="fas fa-chevron-down fa-xs text-muted"></i>
        </button>
      </h5>
    </div>
    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#rse-accordion">
      <div class="card-body bg-light">

        <ul>
          <li><b> Human to human interaction is what makes a collaboration.</b>  Exchange of AI information that is then understood only when deciphered by another AI is not a productive way to work. AI to AI is not a proxy for human to human. </li>
          <li><b> AI usage is agreed upon.</b>  When a collaboration starts, the AI usage should be discussed among the team members and agreed upon.</li>
          <li><b> AI is not a sustainable shortcut.</b> When adding AI-made content on top of AI-made content decreases the overall understanding of the work, AI usage should be reconsidered.</li>
          <li><b> AI usage is transparent.</b> Using AI is perfectly fine, but its usage should be disclosed.</li>
          <li><b> Humans are accountable, not the AI.</b> Validation and quality of work, human or AI made, is a human judgment. Credit for good work goes to humans, consequences for bad work as well. 
                <ul>
                    <li> <span class="text-primary">RSE corollary #1</span>: Software, human or AI made, should follow research standards (e.g. FAIR principles).</li>
                    <li> <span class="text-primary">RSE corollary #2</span>: Software tests, human or AI made, should be validated by a human.</li>
                </ul>

          </li>
        
         <li> <b> AI setup is shared. </b> AI content heavily depends on the prompt that generated it. When AI content is shared, the prompt should also be distributed. When a full agentic setup is used, the orchestration specification, model configuration and logs should be freely accessible by the team.  </li>

        </ul>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="headingTwo" style="background-color: rgba(194,201,73,0.7); border: none;">
      <h5 class="mb-0">
        <button class="btn btn-link btn-block text-left d-flex justify-content-between align-items-center text-dark font-weight-bold collapsed" 
                type="button" 
                data-toggle="collapse" 
                data-target="#collapseTwo" 
                aria-expanded="false" 
                aria-controls="collapseTwo"
                style="text-decoration: none;">
          Human understanding
          <i class="fas fa-chevron-down fa-xs text-muted"></i>
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#rse-accordion">
      <div class="card-body bg-light">

        <ul>
            <li> <b> Work is explainable by humans. </b>Contributions made to the team, or exchange of information between team members, should be understood by the humans who propose them. </li>
            <li> <b> Work is human digestible. </b> Contributions made to the team, or exchange of information between team members, should be made in reasonable volume. </li>
                <ul>
                    <li> <span class="text-primary">RSE corollary #3</span>: Software development should be made by small incremental changes. These changes should be recorded in the development history (incremental version control).</li>
                </ul>
    
            <li> <b> Work can be reused by a human. </b> Any type of AI generated output can be understood, modified, built upon, or incorporated into other works without the use of AI. </li>

        </ul>

      </div>
    </div>
  </div>


  <div class="card">
    <div class="card-header" id="headingFour" style="background-color: rgba(46,202,156,0.7); border: none;">
      <h5 class="mb-0">
        <button class="btn btn-link btn-block text-left d-flex justify-content-between align-items-center text-dark font-weight-bold collapsed" 
                type="button" 
                data-toggle="collapse" 
                data-target="#collapseFour" 
                aria-expanded="false" 
                aria-controls="collapseFour"
                style="text-decoration: none;">
            AI Security
          <i class="fas fa-chevron-down fa-xs text-muted"></i>
        </button>
      </h5>
    </div>
    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#rse-accordion">
      <div class="card-body bg-light">

        <ul>
            <li><b>AI safety.</b> It is the responsibility of the project team to figure out (with help of other services if need be) whether an AI can be used safely in the context of the project, and in line with the policy of the institution.</li>
            <li><b>Personal responsibility.</b> Users of AI are responsible for their own personal installation. </li>
        </ul>


      </div>
    </div>
  </div>



  <div class="card">
    <div class="card-header" id="headingFive" style="background-color: rgba(18,169,212,0.7); border: none;">
      <h5 class="mb-0">
        <button class="btn btn-link btn-block text-left d-flex justify-content-between align-items-center text-dark font-weight-bold collapsed" 
                type="button" 
                data-toggle="collapse" 
                data-target="#collapseFive" 
                aria-expanded="false" 
                aria-controls="collapseFive"
                style="text-decoration: none;">
          AI freedom
          <i class="fas fa-chevron-down fa-xs text-muted"></i>
        </button>
      </h5>
    </div>
    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#rse-accordion">
      <div class="card-body bg-light">

        <ul>
            <li> <b>Freedom to say no.</b> Members of the project team are free to not use generative AI tools for their own work, remain the sole owner of this decision and are able to explain the rationale behind it.</li>
            <li> <b>Freedom to decline.</b> Members of the project team retain the authority to challenge or decline further work where inherited knowledge erosion cannot be controlled [adapted from <a href="https://rdr.ucl.ac.uk/articles/report/AI-Assisted_Software_Development_Policy_for_UCL_Advanced_Research_Computing/34070631?file=69660984">here</a>].
                 <ul>
                    <li> <span class="text-primary">RSE corollary #4</span>: An RSE can decline to review/incorporate code that has not been reviewed and understood by its original creator.</li>
                </ul>
                
    
            </li>
        </ul>

      </div>
    </div>
  </div>






</div>

<br>
