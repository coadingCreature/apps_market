import React from "react";

import "./ClientFeedback.css";

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import StarIcon from '@material-ui/icons/Star';

function ClientFeedback () {

    return (

        <>

            <section className="client_feedback_container container">

               <div className="clinet_feedback_header">
                   <div>
                        <h1> Our Clients Feedback </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci deleniti temporibus vero blanditiis sapiente sed modi, debitis aliquam iusto at, facilis, sequi consequuntur aperiam dignissimos nulla explicabo quis sit harum!
                        </p>
                   </div>

                   <div className="read_more_btn">
                      <div> Read ore </div>
                      <div> 
                          <ArrowRightAltIcon/>
                      </div>
                    </div>

               </div>

               <div className="feed_back_grid">
                   
                    <div>
                        <img src="user.jpg" alt="user feedback"/>
                    </div>

                    <div>

                        <div className="star_ratings">
                            <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/>
                        </div>

                        <p> "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ipsa temporibus perferendis nihil odio amet quibusdam ullam quisquam velit voluptates, optio consectetur, provident eos cumque qui corrupti, expedita dicta officiis."" </p>
                        <h2> Dummy Name </h2>
                        <h3> product manager <span> @pixabay </span> </h3>
                    </div>
                    
               </div>

            </section>

        </>

    )

}

export default ClientFeedback