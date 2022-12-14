import React from "react";
import { getPosts, getSeoPosts } from "../../lib/hygraph";
import PostCard from "../../components/PostCard";
import Categories from "../../components/Categories";
import FilterCategories from "../../components/FilterCategories";
import { NextSeo } from "next-seo";

const category = ({ posts, seo }) => {
  return (
    <>
      <NextSeo
        title={`${seo[0].seo.title} | Category`}
        description={seo[0].seo.description}
        canonical={seo[0].seo.url}
        openGraph={{
          url: `${seo[0].seo.url}`,
          title: `${seo[0].seo.title} | Category`,
          description: `${seo[0].seo.description}`,
          images: [
            {
              url: `${seo[0].seo.image.url}`,
              width: 800,
              height: 600,
              alt: `${seo[0].seo.title}`,
              type: "image/jpeg",
            },
            {
              url: `${seo[0].seo.image.url}`,
              width: 900,
              height: 800,
              alt: `${seo[0].seo.title}`,
              type: "image/jpeg",
            },
            { url: `${seo[0].seo.image.url}` },
            { url: `${seo[0].seo.image.url}` },
          ],
          site_name: `${seo[0].seo.title}`,
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-8 divide-y col-span-1 px-10 my-5 min-h-screen border-b space-y-5 md:border-b-0 md:border-r">
          <div className="md:hidden">
            <FilterCategories posts={posts} />
          </div>
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="md:col-span-4 col-span-1 p-5 h-screen hidden md:inline">
          <div className="md:sticky relative top-8  h-screen">
            <Categories />
          </div>
        </div>
      </div>
    </>
  );
};

export default category;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const seo = await getSeoPosts();

  return {
    props: {
      posts,
      seo,
    },
  };
}
