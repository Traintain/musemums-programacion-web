import { useState } from "react";

function Obra(props) {
  const [name] = useState(props.obra.name);
  const [description] = useState(props.obra.description);

  return (
    <div className="row d-flex justify-content-around">
      <div className="card">
        <img
          className="card-img-top mx-auto"
          id="imagenObra"
          src="https://latarta.com.co/wp-content/uploads/2018/06/default-placeholder.png"
          alt={name}
        ></img>
        <div className="card-body">
          <p className="card-text" id="nombreObra">
            {name}
          </p>
        </div>
      </div>

      <div className="card" id="descripcionObra">
        <div className="card-body">
          <p className="card-text" id="nombreObra">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Obra;
