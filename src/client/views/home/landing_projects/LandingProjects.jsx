import React from "react";

import "./LandingProject.css";

function LandingProject () {

    return (

        <>

            <section className="landing_projects_container">

                <div className="container">

                    <div className="landing_project_header">
                        <h1> We Complected 1200+ Projects Yearly Successfully and Counting </h1>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima explicabo ea optio quis libero quasi ratione adipisci reiciendis animi eveniet quas </p>
                    </div>

                    <div className="landing_project_grid">

                        <div className="projects">
                            <div>
                                <img src="./project_complected.svg" alt=" project complected " />
                            </div>
                        </div>

                        <div className="projects">
                            <div>
                                <img className="project_icons" src="./active_project.svg" alt=" active projects " />
                            </div>
                            <div>
                                <h2> 100+ </h2>
                                <h3> active projects </h3>
                            </div>
                        </div>

                        <div className="projects">
                            <div>
                                <img  className="project_icons" src="./client.svg" alt=" client satisfied" />
                            </div>
                            <div>
                                <h2> 90+ </h2>
                                <h3> client satisfied </h3>
                            </div>
                        </div>

                        <div className="projects">
                            <div>
                                <img  className="project_icons" src="./client.svg" alt=" client satisfied" />
                            </div>
                            <div>
                                <h2> 56+ </h2>
                                <h3> country available </h3>
                            </div>
                        </div>
                    </div>


                </div>

            </section>

        </>

    )

}

export default LandingProject;