import { useContext } from "react";
import CarImagesContext from "../context/CarImagesContext";

const Picture = ({ imgUrl }) => { // props.imgUrl
  const valueFromAppJs = useContext(CarImagesContext);
  console.log(valueFromAppJs);

  return (
    <img src={imgUrl} alt="1969 DODGE HEMI SUPER BEE" />
  );
};

export default Picture;
