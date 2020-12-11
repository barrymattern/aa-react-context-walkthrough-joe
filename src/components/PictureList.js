import Picture from './Picture'

const PictureList = () => {
  return (
    <ul>
      <li><Picture imgUrl={"https://cdn1.mecum.com/auctions/fl0117/fl0117-275088/images/fl0117-275088_1@2x.jpg?1481909731000"} /></li>
      <li><Picture imgUrl={"https://cdn1.mecum.com/auctions/fl0117/fl0117-275088/images/fl0117-275088_2@2x.jpg?1481909731000"} /></li>
      <li><Picture imgUrl={"https://cdn1.mecum.com/auctions/fl0117/fl0117-275088/images/fl0117-275088_8@2x.jpg?1481909731000"} /></li>
      <li><Picture imgUrl={"https://cdn1.mecum.com/auctions/fl0117/fl0117-275088/images/fl0117-275088_3@2x.jpg?1481909731000"} /></li>
    </ul>
  );
};

export default PictureList;
