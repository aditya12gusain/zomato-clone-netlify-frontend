import React from "react";

function PhotoCollection(props) {
  return (
    <>
      <div
        className="w-32 h-32 md:w-48 flex flex-col md:h-48"
        onClick={props.openViewer}
      >
        <div className="w-full h-full overflow-hidden rounded-lg">
          <img
            src={props.image}
            alt="restaurant"
            className="w-full h-full object-cover object-center transform transition duration-400 rounded-lg hover:scale-110"
          />
        </div>
      </div>
    </>
  );
}

export default PhotoCollection;
