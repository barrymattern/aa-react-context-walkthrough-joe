import PictureList from "./components/PictureList"

const carImages = [ // info usually comes from your server
  "https://cdn1.mecum.com/auctions/fl0117/fl0117-275088/images/fl0117-275088_1@2x.jpg?1481909731000",
  "https://cdn1.mecum.com/auctions/fl0117/fl0117-275088/images/fl0117-275088_2@2x.jpg?1481909731000",
  "https://cdn1.mecum.com/auctions/fl0117/fl0117-275088/images/fl0117-275088_8@2x.jpg?1481909731000",
  "https://cdn1.mecum.com/auctions/fl0117/fl0117-275088/images/fl0117-275088_3@2x.jpg?1481909731000",
]

function App() {
  return (
    <div id="app-element">
      <PictureList imgUrls={carImages} />
    </div>
  );
};

export default App;
