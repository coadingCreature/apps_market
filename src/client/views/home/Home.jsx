import React from "react";


import Header from "./header/Header";

import LandingProject from "./landing_projects/LandingProjects";

import WhyUs from "./why_us/WhyUs";

import LandingServices from "./landing_services/LandingServices";

import LandingPortFolio from "./landing_portfolio/LandingPortfilio";

import ClientFeedback from "./client_feedback/ClientFeedback";

import Footer from "./footer/Footer";



function Home () {

    return (

        <>

            <Header/>

            <LandingServices/>

            <WhyUs/>

            <LandingProject/>

            <LandingPortFolio/>

            <ClientFeedback/>

            <Footer/>
            
        </>

    )

}

export default Home;