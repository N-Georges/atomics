import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCategories } from "../lib/hygraph";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="border rounded-lg p-8 pb-4 mb-8">
      <h3 className="text-xl mb-4 font-semibold border-b pb-4">Categories</h3>
      <div className="flex w-full  vertical-scroll overflow-x-scroll pb-5 space-x-2">
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <a className="cursor-pointer bg-gray-100 hover:bg-gray-200 min-w-max block px-2 py-1 rounded-md border-2 border-gray-100">
              {category.name}
            </a>
          </Link>
        ))}
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <a className="cursor-pointer bg-gray-100 hover:bg-gray-200 min-w-max block px-2 py-1 rounded-md border-2 border-gray-100">
              {category.name}
            </a>
          </Link>
        ))}
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <a className="cursor-pointer bg-gray-100 hover:bg-gray-200 min-w-max block px-2 py-1 rounded-md border-2 border-gray-100">
              {category.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
