import React, { useEffect, useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import PhotoCollection from "../Components/Restaurant/PhotoCollection";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { getImage } from "../Redux/Reducer/Image/Image.action";

function Photos() {
  const [photos, setPhotos] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
  );
  const dispatch = useDispatch();

  const closeViewer = () => {
    setIsMenuOpen(false);
  };

  const openViewer = (index) => {
    setIsMenuOpen(true);
  };

  useEffect(() => {
    if (reduxState) {
      dispatch(getImage(reduxState?.photos)).then((data) => {
        const images = [];
        data.payload.image.images.map(({ location }) => images.push(location));
        setPhotos(images);
      });
    }
  }, [reduxState]);

  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={photos}
          currentIndex={currentImg}
          disableScroll={false}
          onClose={closeViewer}
        />
      )}
      <div className="flex flex-wrap gap-2">
        {photos.map((photo) => (
          <PhotoCollection image={photo} openViewer={openViewer} />
        ))}
      </div>
    </>
  );
}

export default Photos;
