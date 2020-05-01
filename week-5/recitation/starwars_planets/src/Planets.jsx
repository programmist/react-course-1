import React from "react";
import axios from "axios";
import Planet from "./Planet";
import "./styles.css";

export default function Planets() {
  const [planets, setPlanets] = React.useState([]);
  React.useEffect(() => {
    axios("https://swapi.dev/api/planets/").then((resp) => {
      // breakpoint;
      setPlanets(resp.data.results);
    });
  }, []);

  return (
    <React.Fragment>
      {planets.map((planet) => (
        <Planet key={planet.url} planet={planet} />
      ))}
    </React.Fragment>
  );
}
