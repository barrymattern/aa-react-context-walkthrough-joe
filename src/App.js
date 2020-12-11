import { useState } from "react";
import NiceBox from "./components/NiceBox";
import CarImagesContext from "./context/CarImagesContext";

function App() {
  const [carImages, setCarImages] = useState([ // info usually comes from your server
  "https://cdn1.mecum.com/auctions/fl0117/fl0117-275088/images/fl0117-275088_1@2x.jpg?1481909731000",
  "https://cdn1.mecum.com/auctions/fl0117/fl0117-275088/images/fl0117-275088_2@2x.jpg?1481909731000",
  "https://cdn1.mecum.com/auctions/fl0117/fl0117-275088/images/fl0117-275088_8@2x.jpg?1481909731000",
  "https://cdn1.mecum.com/auctions/fl0117/fl0117-275088/images/fl0117-275088_3@2x.jpg?1481909731000",
]);

/* Wrap a bunch of components in a Provider Component */
/* The "value" prop is the value that is shared with all nested component within */
  return (
    <CarImagesContext.Provider value={{ carUrls: carImages }}>
      <div id="app-element">
        <NiceBox />
      </div>
    </CarImagesContext.Provider>
  );
};

export default App;
