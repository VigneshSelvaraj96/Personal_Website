import React from "react";
import Terminal from "../about/Terminal";
import Yelpss from "../../img/YelpSS.png";
import "./Portfolio.css";

export default function Yelpprojectslide() {
  //function that returns the HTML for the project
  function project() {
    return (
      <>
        <div className="d-flex container">
          <div className="row d-flex justify-content-around">
            <div className="col-lg-6">
              <h2>Yelp Clone Web App</h2>
            </div>
            <div className="row d-flex justify-content-around pt-5">
              <div className="col-lg-6">
                <h3>
                  <strong>Technologies Used:</strong>
                </h3>
                <p>
                  Angular, Node.js, Express, HTML, CSS, JavaScript, Typescript,
                  Yelp API, Ipinfo API, Google Maps API, Google Cloud Platform
                </p>
              </div>
              <div className="col-lg-6 pt-2">
                <img className='green-border' src={Yelpss} alt="YelpProjectSS">
                </img>
                </div>
            </div>
            <div className="row d-flex justify-content-center pt-5">
              <div className="col">
                <h3>Project Description: </h3>
                <p>
                  This project is a clone of the Yelp website. It allows users
                  to search for businesses based on location and category. The
                  user can also filter the results based on price, ratings, and
                  distance. You can also view the location of the business
                  on a map, read and write reviews as well as see photos of the business.
                </p>
                <br></br>
                <h3>Developer Comments: </h3>
                <p>
                  This project was a great learning experience for me. I picked up angular in 10 days to be able to
                  complete this project within the given timeline. It was alot of fun navigating through the yelp api and display the results
                  in a meaningful way. I also learnt how to use the google maps api to display the location of the business on a map. The most challenging part of the project was
                  using observables to pass data between sibling components. Using angular was a great experience, especially when i had to display dynamic JS data. I also learnt 
                  how to use the google cloud platform to host the website.
                </p>
                <br></br>
                </div> 
            </div>
            <div className="d-flex row">
              <div className="col-lg-6 justify-content-center">
                <a class="link-button green-border" href="https://github.com/VigneshSelvaraj96/Yelp_Clone_Angular_Web_App" target="_blank" rel="noreferrer">
                  View Source Code <i class="fa fa-github"></i>
                </a>
              </div>
              <div className="col-lg-6 justify-content-center">
                <a class="link-button green-border" href="https://yelpcloneangular.wl.r.appspot.com/search" target="_blank" rel="noreferrer">
                  View Live Demo <i class="fa fa-external-link"></i>
                </a>
            </div>
          </div>
        </div>
        </div>
      </>
    );
  }

  return (
    <div className="container pt-5">
      <div className="row justify-content-center">
        <div className="col-8">
          <Terminal text={project()}></Terminal>
        </div>
      </div>
    </div>
  );
}
