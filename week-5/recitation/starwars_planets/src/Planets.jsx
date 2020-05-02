import React from "react";
import axios from "axios";
import Planet from "./Planet";
import "./styles.css";

export default function Planets() {
  /**
   * Array of planet objects
   */
  const [planets, setPlanets] = React.useState([]);

  /**
   * The URL to the next page or results
   */
  const [next, setNext] = React.useState(null);

  /**
   * The URL to the previous page or results
   */
  const [prev, setPrev] = React.useState(null);

  /**
   * Retrieve a page of results and update state variables
   *
   * @param {string} url - The URL of the results page to retrieve
   */
  const updateResults = (url) => {
    axios(url).then((resp) => {
      const { previous, next, results } = resp.data;
      setPrev(previous);
      setNext(next);
      setPlanets(results);
    });
  };

  /**
   * Get initial page of results
   */
  React.useEffect(
    updateResults.bind(null, "https://swapi.dev/api/planets/"),
    []
  );

  /**
   * Get the previous page of results
   */
  const prevPage = () => {
    updateResults(prev);
  };

  /**
   * Get the next page of results
   */
  const nextPage = () => {
    updateResults(next);
  };

  return (
    <React.Fragment>
      {planets.map((planet) => (
        <Planet key={planet.url} planet={planet} />
      ))}
      <div>
        <button disabled={!prev} onClick={prevPage}>
          &lt; Prev
        </button>
        <button disabled={!next} onClick={nextPage}>
          Next &gt;
        </button>
      </div>
    </React.Fragment>
  );
}
