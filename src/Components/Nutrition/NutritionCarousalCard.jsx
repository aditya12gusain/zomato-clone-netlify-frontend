import React from "react";

function NutritionCardContainerLG({ image, title }) {
  return (
    <>
      <div className="hidden lg:block w-64 h-full px-9">
        <div className="w-full h-58">
          <img
            src={image}
            alt="food"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div>
          <h3 className="text-xl my-1 font-medium text-black">{title}</h3>
        </div>
      </div>
    </>
  );
}

function NutritionCardContainerSM({ image, title }) {
  return (
    <div className="block lg:hidden bg-white shadow rounded-md w-24 h-full px-3 md:px4 md:w-56">
      <div className="w-full h-full md:h-36">
        <img
          src={image}
          alt="nutrition"
          className="w-full h-full object-cover rounded-t-md object-center"
        />
      </div>
      <div>
        <h3 className="text-sm my-1 text-center font-light md:text-xl">
          {title}
        </h3>
      </div>
    </div>
  );
}

function NutritionCarousalCard(props) {
  return (
    <>
      <NutritionCardContainerLG {...props} />
      <NutritionCardContainerSM {...props} />
    </>
  );
}

export default NutritionCarousalCard;
