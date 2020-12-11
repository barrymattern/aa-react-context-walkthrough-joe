import Picture from './Picture';
import { useContext } from 'react';
import CarImagesContext from '../context/CarImagesContext';

const PictureList = () => {
  const { setCarImages, carUrls } = useContext(CarImagesContext);

  const changeCars = () => {
    const newCars = [
      "https://silodrome.com/wp-content/uploads/2017/09/Dodge-Super-Bee-1.jpg",
      "https://silodrome.com/wp-content/uploads/2017/09/Dodge-Super-Bee-11-1480x833.jpg",
      "https://silodrome.com/wp-content/uploads/2017/09/Dodge-Super-Bee-10.jpg"
    ];

    setCarImages(newCars);
  };


  return (
    <>
      <button onClick={changeCars}>Change Cars</button>
      <ul>
        {carUrls.map((imgUrl, i) => {
          return <li key={i}><Picture imgUrl={imgUrl} /></li>
        })}
      </ul>
    </>
  );
};

export default PictureList;
