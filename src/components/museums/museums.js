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
      <h1>Museums</h1>
      <ul id="lista">
        {museums.map((museums) => (
          <li key={museums.id}>{museums.name}</li>
        ))}
      </ul>

      <ul>{}</ul>
    </div>
  );
}

export default Museums;
