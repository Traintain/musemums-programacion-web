import { useEffect, useState } from "react";

function Museums() {
  const url = "https://back-museums-uniandes.herokuapp.com/api/museums";

  const [museums, setMuseums] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((museums) => {
        console.log("Museums", museums);
        setMuseums(museums);
      });
  }, []);

  return (
    <div className="container">
      <div className="row mt-3">
        <p>Home &gt; Museos</p>
      </div>

      <div className="row" id="vitrina">
        <h1 id="tituloVitrina">MUSEOS</h1>
      </div>

      <div className="pb-4">
        <hr></hr>
      </div>

      <div className="row d-flex justify-content-around">
        {museums.map((museums) => (
          <div className="card" key={museums.id}>
            <img
              className="card-img-top mx-auto"
              id="imagenMuseo"
              src={museums.image}
              alt={museums.name}
            ></img>
            <div className="card-body">
              <p className="card-text" id="nombreGaleria">
                {museums.name}
              </p>
              <p className="card-text" id="nombreCiudad">
                {museums.city}
              </p>
            </div>
          </div>
        ))}
      </div>

      <ul>{}</ul>
    </div>
  );
}

export default Museums;
