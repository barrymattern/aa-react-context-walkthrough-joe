import Picture from './Picture';
import { useContext } from 'react';
import CarImagesContext from '../context/CarImagesContext';

const PictureList = () => {
  const sharedValueFromAppJs = useContext(CarImagesContext);
  const imgUrls = sharedValueFromAppJs.carUrls

  return (
    <ul>
      {imgUrls.map((imgUrl, i) => {
        return <li key={i}><Picture imgUrl={imgUrl} /></li>
      })}
    </ul>
  );
};

export default PictureList;
