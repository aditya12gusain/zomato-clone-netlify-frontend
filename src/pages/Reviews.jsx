import React, { useState, useEffect } from "react";
import ReviewCard from "../Components/Restaurant/ReviewCard";
import AddReviewCard from "../Components/Restaurant/Reviews/AddReviewCard";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { getReviews } from "../Redux/Reducer/Reviews/reviews.action";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
  );

  const dispatch = useDispatch();

  useEffect(() => {
    reduxState &&
      dispatch(getReviews(reduxState?._id)).then((data) => {
        setReviews(data.payload.reviews);
      });
  }, [reduxState]);

  return (
    <>
      <div className="w-full flex flex-col md:flex-row relative gap-6">
        <div className="w-full md:w-8/12 flex flex-col gap-3">
          <div className="md:hidden">
            <AddReviewCard />
          </div>
          {reviews.map((review) => (
            <ReviewCard {...review} />
          ))}
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex items-start md:w-4/12 sticky rounded-xl top-2 bg-white p-3 shadow-md flex-col gap-3"
        >
          <AddReviewCard />
        </aside>
      </div>
    </>
  );
}

export default Reviews;
