import React, { useState, useEffect } from "react";
import Style from './Home.module.scss';

function Nasapic() {
  const [nasaPic, setNasaPic] = useState({});
  const apikey = 'OZs8Q8ae7ee8JWBBJv4CGHTvNeMFgsqlk7Vs4Sh1';

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apikey}`)
      .then((response) => response.json())
      .then((data) => setNasaPic(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={Style.nasapic}>
      <h5 style={{paddingBottom:20}}>{nasaPic.title}</h5>
      <img src={nasaPic.url} alt={nasaPic.title} />
      <div className={Style.nasapicdes}>{nasaPic.explanation}</div >
    </div>
  );
}

export default Nasapic;