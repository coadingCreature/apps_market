import React from 'react';

import "./Header.css";


import {
    Row,
    Col,
    Navbar,
    Nav,
  } from "react-bootstrap";

import HomeIcon from '@material-ui/icons/Home';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';


export default function Header () {

    return (

       <section className="header_container">

            <Row className="navbar_container">
            <Col
                style={{
                background: "#3c41df",
                color: "#fff",
                padding: "1rem",
                fontSize: "20px",
                fontWeight: "500",
                overflow: "hidden",
                zIndex:"100"
                }}
            >
                <Navbar className="container" expand="lg" sticky="top" fixed="top" style={{color:"#fff"}}>
                <Navbar.Brand href="#home">
                        <div className="nav_logo_container">
                            <div>
                                <HomeIcon style={{fontSize:"3rem", marginBottom:"0.5rem",color:"#5c84dc"}}/>
                            </div>
                            <div>
                                <h1> Apps <span> Market </span> </h1>
                            </div>

                        </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                
                    <Nav className="nav_links_container">
                    <Nav.Link className="nav_links" href="#home" active>
                        Home
                    </Nav.Link>
                    <Nav.Link className="nav_links" href="#link">Service</Nav.Link>
                    <Nav.Link className="nav_links" href="#link">Blog</Nav.Link>
                    <Nav.Link className="nav_links" href="#deets">News</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                            <div className="navbar_btn">
                                Contact Us
                            </div>
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </Col>
            </Row>

           <div className="header_grid_container">
               <img src="./header.png" alt="header" />
           </div>

           <div className="header_grid container">
               
               <div className="header_txt_container">

                     <div>
                        <h1> We create applications with excellent technology. </h1>
                        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas ea delectus minima commodi qui ullam adipisci. Veniam optio hic quisquam earum adipisci architecto saepe, quibusdam eligendi id sed sunt amet? </p>
                    </div>
                    
                    <div className="header_btn_container">
                        <div>
                            <img className="header_btn" src="./header_btn.svg" alt="header button" /> 
                        </div>
                        <div className="explor_more"> 
                            <div>
                                <b> explore more </b> 
                            </div>
                            <div>
                                <ArrowRightAltIcon/>
                            </div>
                        </div>
                    </div>
               </div>

               <div>
                   <img className="header_imgs" src="./header_imgs.svg" alt="header" />
               </div>
                
           </div>
        

       </section>

    )
}
