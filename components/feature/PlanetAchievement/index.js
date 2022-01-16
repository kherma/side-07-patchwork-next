import React, { useState } from "react";
import PlanetView from "./PlanetView";
import PlanetData from "./PlanetData";
import PlanetAtmosphere from "./PlanetAtmosphere";
import PlanetDescription from "./PlanetDescription";
import { generatePlanet } from "../../../seed";

const PlanetAchievement = () => {
  const [planet, setPlanet] = useState({
    data: {},
    view: {},
  });

  const handleGeneratePlanet = () => {
    setPlanet(generatePlanet());
  };

  return (
    <div className="grid grid-cols-1 auto-rows-fr gap-4 w-full h-full md:grid-cols-2 md:gap-8">
      <PlanetDescription
        name={planet.data.name}
        description={planet.data.description}
        handleGeneratePlanet={handleGeneratePlanet}
      />
      <PlanetView />
      <PlanetData />
      <PlanetAtmosphere />
    </div>
  );
};

export default PlanetAchievement;
