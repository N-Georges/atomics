import React, { useState, useEffect } from "react";

import AdjacentPostCard from "../components/AdjacentPostCard";
import { getAdjacentPosts } from "../lib/hygraph";

const AdjacentPosts = ({ createdAt, slug }) => {
  const [adjacentPost, setAdjacentPost] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getAdjacentPosts(createdAt, slug).then((result) => {
      setAdjacentPost(result);
      setDataLoaded(true);
    });
  }, [slug]);

  return (
    <div className="flex mb-8">
      {dataLoaded && (
        <>
          {adjacentPost.previous && (
            <div className="py-2 flex items-start flex-1 justify-start">
              <AdjacentPostCard post={adjacentPost.previous} position="LEFT" />
            </div>
          )}
          {adjacentPost.next && (
            <div className="py-2 flex items-end flex-1 justify-end">
              <AdjacentPostCard post={adjacentPost.next} position="RIGHT" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AdjacentPosts;
