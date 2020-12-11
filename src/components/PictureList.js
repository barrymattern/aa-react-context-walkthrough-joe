import Picture from './Picture'

// Expect to receive a prop call "imgUrls"
// which will be an array of strings that should be URLs
const PictureList = ({ imgUrls }) => {
  return (
    <ul>
      {imgUrls.map((imageUrl, i) => {
        return <li key={i}><Picture imgUrl={imageUrl} /></li>
      })}
    </ul>
  );
};

export default PictureList;
