import { useEffect, useState } from "react";
import Museum from "./museum";
import Obra from "./obra";

function Museums() {
  const url = "https://back-museums-uniandes.herokuapp.com/api/museums";

  const [museums, setMuseums] = useState([]);

  const [selectedMuseumId, setSelectedMuseum] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((museums) => {
        console.log("Museums", museums);
        setMuseums(museums);
      });
  }, []);

  const selectMuseums = (id) => {
    console.log("Id del museo: ", id);
    setSelectedMuseum(id);
  };

  const showMuseums = (titulo) => {
    const vitrina = document.getElementById("tituloVitrina");
    vitrina.innerHTML = titulo;
  };

  if (selectedMuseumId === undefined) {
    return (
      showMuseums("MUSEOS"),
      (
        <div className="container">
          <div className="row d-flex justify-content-around">
            {museums.map((p) => (
              <Museum
                key={p.id}
                museum={p}
                onClick={(id) => selectMuseums(id)}
              />
            ))}
          </div>
        </div>
      )
    );
  } else {
    return (
      showMuseums(
        museums.find((museum) => museum.id === selectedMuseumId).name
      ),
      (
        <div className="container mx-5">
          {museums
            .find((museum) => museum.id === selectedMuseumId)
            .artworks.map((p) => (
              <Obra key={p.id} obra={p} />
            ))}
        </div>
      )
    );
  }
}

export default Museums;
