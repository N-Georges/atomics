import React from "react";

const LoadMoreButton = ({handleLoadMore}) => {
  return <button className="border rounded-lg py-2 px-4 font-semibold" onClick={handleLoadMore}>Load More</button>;
};

export default LoadMoreButton;
