import React, { useState, useEffect } from "react";
import Style from './Home.module.scss';
import Terminal from "../about/Terminal";
import { Box } from "@mui/material";

function Nasapic() {
  const [nasaPic, setNasaPic] = useState({});
  const apikey = 'OZs8Q8ae7ee8JWBBJv4CGHTvNeMFgsqlk7Vs4Sh1';

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apikey}`)
      .then((response) => response.json())
      .then((data) => setNasaPic(data))
      .catch((error) => console.log(error));
  }, []);


  function nasapictitleandtext() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-6 mx-auto mb-2">
              <Box color='black' className={Style.nasapictitle}>Nasa's Astronomy Picture of the Day
              </Box >
            </div>
          </div>
          <div className="row d-flex align-items-center mt-3 mb-3">
            <div className="col-lg-6">
              <img src={nasaPic.url} alt={nasaPic.title} className={Style.nasapic} />
            </div >
            <div className="col-lg-6 text-center mt-lg-0 mt-5">
                <Box color='black' className={Style.nasapictitle}>{nasaPic.title}
                </Box >
              <div className={Style.nasapicdes}>{nasaPic.explanation}
              </div>
            </div>
          </div >
        </div>
      </>
    );
  }

  return (
    <>
          <Terminal text={nasapictitleandtext()}>
          </Terminal>
    </>
  );
}

export default Nasapic;