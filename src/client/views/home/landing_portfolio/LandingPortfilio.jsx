import React from "react";

import "./LandingPortFolio.css";


function LandingPortFolio () {

    return (

        <>

            <section className="landing_portfoli_container ">

                <div className="landing_poerfolio_header container">
                    
                    <h1> our portfolio </h1>

                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni error nostrum atque nobis quae, ipsa, vitae asperiores officia illum tempore quis </p>
                
                </div>

                <div className="landing_portfolio_grid">

                    <div>
                        <img src="portfolio_1.svg" alt=" portfolio 1 " />
                    </div>

                    <div>
                        <img src="portfolio_2.svg" alt=" portfolio 2 " />
                    </div>

                    <div>
                        <img src="portfolio_3.svg" alt=" portfolio 3" />
                    </div>

                    <div>
                        <img className="show_hide" src="portfolio_3.svg" alt=" portfolio 3" />
                    </div>

                    <div>
                        <img className="last_portfolio" src="portfolio_4.svg" alt=" portfolio 3" />
                    </div>

            </div>

            </section>

        </>

    )

}

export default LandingPortFolio;