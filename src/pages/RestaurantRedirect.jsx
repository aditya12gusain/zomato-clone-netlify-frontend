import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

function RestaurantRedirect() {
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    history.push(`/restaurant/${id}/overview`);
  });
  return <></>;
}

export default RestaurantRedirect;
