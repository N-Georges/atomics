import Head from "next/head";
import Categories from "../components/Categories";
import PostWidget from "../components/PostWidget";
import PostCard from "../components/PostCard";
import { getPosts } from "../lib/hygraph";
import FilterCategories from "../components/FilterCategories";
import { useEffect, useState } from "react";
import LoadMoreButton from "../components/LoadMoreButton";
import FeaturedPosts from "../section/FeaturedPosts";
import { NextSeo } from "next-seo";

export default function Home({ posts }) {
  const data = posts;

  // Array of all news articles
  const allNews = data;

  // State for the list
  const [list, setList] = useState([...allNews.slice(0, 2)]);

  // State to trigger oad more
  const [loadMore, setLoadMore] = useState(false);

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(allNews.length > 2);

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true);
  };

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length;
      const isMore = currentLength < allNews.length;
      const nextResults = isMore
        ? allNews.slice(currentLength, currentLength + 2)
        : [];
      setList([...list, ...nextResults]);
      setLoadMore(false);
    }
  }, [loadMore, hasMore]); //eslint-disable-line

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < allNews.length;
    setHasMore(isMore);
  }, [list]); //eslint-disable-line

  return (
    <div>
      <NextSeo
        title="Atomics - Blog"
        description="Atomics partage des articles autour de la tech."
        canonical="https://atomics.vercel.app/"
        openGraph={{
          url: "https://atomics.vercel.app/",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
          site_name: "Atomics",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <FeaturedPosts />
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-8 divide-y col-span-1 px-10 my-5 min-h-screen border-b border-t-0 space-y-5 md:border-b-0 md:border-r">
          <div className="md:hidden">
            <FilterCategories posts={posts} />
          </div>
          {list.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
          <div className="text-center py-5">
            {hasMore ? (
              <LoadMoreButton handleLoadMore={handleLoadMore} />
            ) : (
              <p>No more results</p>
            )}
          </div>
        </div>
        <div className="md:col-span-4 col-span-1 p-5 h-screen ">
          <div className="md:sticky relative top-8  h-screen">
            <PostWidget />
            <div className="hidden md:inline">
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: {
      posts,
    },
  };
}
