import Picture from './Picture';
import { useContext } from 'react';
import CarImagesContext from '../context/CarImagesContext';

// Expect to receive a prop call "imgUrls"
// which will be an array of strings that should be URLs
const PictureList = () => {
  const sharedValueFromAppJs = useContext(CarImagesContext);
  const imgUrls = sharedValueFromAppJs.carUrls

  return (
    <ul>
      {imgUrls.map((imageUrl, i) => {
        return <li key={i}><Picture imgUrl={imageUrl} /></li>
      })}
    </ul>
  );
};

export default PictureList;
