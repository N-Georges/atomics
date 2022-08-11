import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCategories } from "../lib/hygraph";
import { useRouter } from "next/router";

const FilterCategories = ({ posts }) => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  const onChangeOption = (e) => {
    router.push(`/category/${e.target.value}`);
  };

  return (
    <div className="w-44">

      <select
        onChange={onChangeOption}
        defaultValue={"Choose a categories"}
        id="categories"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
      >
        <option defaultValue={"Choose a categories"} disabled>
          Choose a categories
        </option>
        {categories.map((category) => (
          <option key={category.slug} value={category.slug}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterCategories;
