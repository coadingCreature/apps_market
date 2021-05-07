import React from "react";

import "./LandingServices.css";


function LandingServices () {

    return (

        <>

            <section className="landing_service_container">

                <div className="container">

                    <div className="services_header">

                        <h1> We provide various kind of service for you </h1>

                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illum autem aliquam quaerat libero qui illo vero voluptatibus modi expedita repudiandae, quam doloremque quasi accusantium! Pariatur ratione officiis dolore numquam. </p>
                   
                   </div>

                    <div className="landing_services_grid">

                        <div>

                            <img src="./smartphone.svg" alt=" smartphone " />

                            <h2> Unique app ui </h2>

                            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nesciunt labore obcaecati maiores nam! Mollitia, earum eligendi. Eos laudantium pariatur, vitae assumenda vel voluptates fugiat quibusdam aut voluptatibus quam amet. </p>

                        </div>

                        
                        <div>

                            <img src="./Dashboard.svg" alt=" smartphone " />

                            <h2> ecclient dashboard </h2>

                            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nesciunt labore obcaecati maiores nam! Mollitia, earum eligendi. Eos laudantium pariatur, vitae assumenda vel voluptates fugiat quibusdam aut voluptatibus quam amet. </p>

                        </div>

                        
                        <div>

                            <img src="./construction.svg" alt=" smartphone " />

                            <h2> by construction </h2>

                            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nesciunt labore obcaecati maiores nam! Mollitia, earum eligendi. Eos laudantium pariatur, vitae assumenda vel voluptates fugiat quibusdam aut voluptatibus quam amet. </p>

                        </div>

                    </div>
                    
                </div>

            </section>

        </>

    )

}

export default LandingServices;