import { useState } from "react";

function Museum(props) {
  console.log("Cada museo: ", props);

  const [name] = useState(props.museum.name);
  const [city] = useState(props.museum.city);
  const [image] = useState(props.museum.image);

  return (
    <div className="card" onClick={() => props.onClick(props.museum.id)}>
      <img
        className="card-img-top mx-auto"
        id="imagenMuseo"
        src={image}
        alt={name}
      ></img>
      <div className="card-body">
        <p className="card-text" id="nombreGaleria">
          {name}
        </p>
        <p className="card-text" id="nombreCiudad">
          {city}
        </p>
      </div>
    </div>
  );
}

export default Museum;
