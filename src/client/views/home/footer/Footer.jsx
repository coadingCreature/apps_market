import React from 'react';

import "./Footer.css";

export default function Footer () {

    return (

        <div>

            <section className="footer_container">

                <div className="contact_us_container">

                    <div>
                        <h1>COntact Us</h1>
                        <p>Lorem ipsum, dolor sit amet <br/> consectetur adipisicing elit. </p>
                    </div>

                    <div className="contact_us_input">
                        <input type="text" placeholder=" Email here "/>
                        <div> send </div>
                    </div>

                </div>

                <div className="footer_elements_grid container">
                    <div>
                        <img src="./footer_logo.svg" alt="footer_logo" />
                    </div>

                    <div>

                        <ul>
                            <li> <b> Links </b> </li>
                            <li> Home </li>
                            <li> Pricing </li>
                            <li> Download </li>
                            <li> About </li>
                            <li> Services </li>
                        </ul>

                    </div>

                    <div>

                        <ul>
                            <li> <b> Support </b> </li>
                            <li> FAQ </li>
                            <li> how it </li>
                            <li> Features </li>
                            <li> Contact </li>
                            <li> Reporting </li>
                        </ul>

                    </div>


                    <div>

                        <ul>
                            <li> <b>  Contact Us </b> </li>
                            <li> +91 9876543210 </li>
                            <li> abc@gmail.com </li>
                            <li> Abc City, India </li>
                        </ul>

                    </div>

                </div>

            </section>
            
        </div>

    )
}
