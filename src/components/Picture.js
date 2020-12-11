import CarImagesContext from "../context/CarImagesContext";
import { useContext } from "react";

const Picture = ({ imgUrl }) => { // props.imgUrl
  const valueFromAppJs = useContext(CarImagesContext);
  console.log(valueFromAppJs);

  return (
    <img
      src={imgUrl}
      alt=""
    />
  );
};

export default Picture;
