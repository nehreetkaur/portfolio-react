import React from "react";
import "../styles/Work.css"
import code from "../styles/assests/images/code.jpg"
import meeting from "../styles/assests/images/meeting.jpg"
import laptop from "../styles/assests/images/laptop.jpg"
import white from "../styles/assests/images/white.jpg"
import desk from "../styles/assests/images/desk.jpg"
import key from "../styles/assests/images/key.jpg"

function Work() {
    return (

        <section className="projects">
        <h1>My Work</h1>
        <section id="projects" className="projsec">
          <img src={meeting} alt="meeting in office" />
          <section className="projectinfo">
            <h2>Project 1</h2>
            <p>This is my First Project ,completed in as a group of four.The link will take you to the deployed site.
                    IT'S About Cocktails.User can enter the cocktail in search bar and provided with ingredients and instructions
                    with five restaurants

        </p><br/>
        <a href="https://afam-26.github.io/Cocktail-on-the-run/">Github-Deployed-link</a><br/><br/>
        <a href="https://github.com/Afam-26/Cocktail-on-the-run">Github-repository</a>
      </section>
        </section>
      <section className="projsec">

<section className="projectinfo">
  <h2>Project2</h2>
  <p>In this assignment , made random password generator with the use of prompts and confirm,
                    user will reply the prompts and unique password generated in the end.
                    The link will take you to the deployed site.
  </p><br/>
  <a href="https://nehreetkaur.github.io/randompasswordhmk3/">Github-Deployed-link</a><br/><br/>
  <a href="https://github.com/nehreetkaur/randompasswordhmk3">Github-repository</a>
</section>

<img src={laptop} alt="laptop" />
</section>







<section className="projsec">
<img src={white} alt="white office desk" />
<section className="projectinfo">
  <h2>Project 3</h2>
  <p id="Work">This is my day planner assignment.User can enter the event in time block and it will
                shown after the refresh with the help of local storage as well.The link will take you to the deployed site.
                Different colors representing the specific time.


  </p><br/>
  <a href="https://nehreetkaur.github.io/Dayplannerhmk5/">Github-Deployed-link</a><br/><br/>
  <a href="https://github.com/nehreetkaur/Dayplannerhmk5">Github-repository</a>

</section>
</section>




<section className="projsec">

<section className="projectinfo">
  <h2>Project 4</h2>
  <p>In this application , user will see the **BURGER APP** by running
                **node server.js** command on the terminal and listening to the port.
                After, connecting to the database, user will open the application the browser
                via **local host and the mentioned Port Number**. User will easily add the burger name according to its liking
                by clicking on the **ADD THE BURGER** Button.
                They can see the **added** burger name under **DEVOURE BURGER** section. User can easily, **devoured** the
                burger by clicking on the **DEVOURE IT** button and can see the selected burger under the **DEVOURED**
                section.User must have all **DEPENDENCIES** before running the application.</p>


<br/>
  <a href=" https://burger-nehreet.herokuapp.com/">HEROKU-Deployed-link</a><br/><br/>
  <a href="https://github.com/nehreetkaur/burger">Github-repository</a>

</section>
<img src={code} alt="white office desk" />
</section>
<section className="projsec">
      <img src={key} alt="keyboard" />

      <section class="projectinfo">
        <h2>Project 5</h2>
        <p>This is a complete FULL-STACK APPLICATION about PET FINDER/ADOPTION. In this application, user can login with
          google and explore the application and post comments as well.If the user is not logged in , can't see the
          previous comments and not be able to do the search for pets and post comments. When user, post the comments,
          it
          shows in the database that who posted the comments details.


        </p><br/>
        <a href="https://pet-adoption-platform.herokuapp.com/">HEROKU-Deployed-link</a><br/><br/>
        <a href="https://github.com/priteshpatel823/project_2">Github-repository</a>

      </section>

    </section>




    

    

    <section className="projsec">

      <section className="projectinfo">
        <h2>Project 6</h2>
        <p>In this application, user can click on Get started button. Then,user can enter the title and some text in the
          next line. As, soon user can enter text ,Save button will be visilble. Afterwords, user can save their entry
          by
          clicking on the save button. Saved entry text will be visible on the screen. User, can delete the text entries
          if they want to by clicking on the Red trash icon on the screen.Also, there is creation of server and working
          with them.

        </p><br/>
        <a href="https://peaceful-mountain-90866.herokuapp.com/">HEROKU-Deployed-link</a><br/><br/>
        <a href="https://github.com/nehreetkaur/note-takerapphmk">Github-repository</a>

      </section>
      <img src={desk} alt="monitor-desk" />
    </section>


</section>



    
        
       



    )
}

export default Work;