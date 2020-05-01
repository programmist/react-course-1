import React from "react";
import { isTemperate } from "./helpers";

export default function Planet({ planet }) {
  return (
    <li className={isTemperate(planet) ? "temperate" : ""}>{planet.name}</li>
  );
}
