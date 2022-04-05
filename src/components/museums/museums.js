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

  const resetMuseum = () =>{
    selectedMuseumId = undefined;
  }

  if (selectedMuseumId === undefined) {
    return (
      (
        <div className="container">

          <div className="row mt-3">
            <nav id="myBreadcrumb" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page">Museos</li>
              </ol>
            </nav>
          </div>
      
          <div className="row" id="vitrina">
            <h1 id="tituloVitrina">MUSEOS</h1>
          </div>
      
          <div className="pb-4">
            <hr></hr>
          </div>
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
      (
        <div className = "container">
          <div className="row mt-3">
            <nav id="myBreadcrumb" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item" onClick = {resetMuseum}><a href="">Museos</a></li>
                <li class="breadcrumb-item active" aria-current="page">{museums.find((museum) => museum.id === selectedMuseumId).name}</li>
              </ol>
            </nav>
          </div>
      
          <div className="row" id="vitrina">
            <h1 id="tituloVitrina">{museums.find((museum) => museum.id === selectedMuseumId).name}</h1>
          </div>
      
          <div className="pb-4">
            <hr></hr>
          </div>
          <div className="container mx-5">
            {museums
              .find((museum) => museum.id === selectedMuseumId)
              .artworks.map((p) => (
                <Obra key={p.id} obra={p} />
              ))}
          </div>
        </div>
      )
    );
  }
}

export default Museums;
