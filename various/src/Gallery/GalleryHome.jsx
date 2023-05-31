import { useState } from "react";
import { sculptureList } from '../Gallery/GallerDate';
import "../Gallery/styleGallery.css"
const GalleryHome = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <div>
      <button className="next-btn" onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button className="show-hide-btn" onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p className="showmore-text">{sculpture.description}</p>}
      <img className="nature-img"
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </div>
  )
}

export default GalleryHome