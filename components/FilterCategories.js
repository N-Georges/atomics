import React, { useEffect, useState } from "react";
import { getCategories } from "../lib/hygraph";
import { useRouter } from "next/router";

const FilterCategories = () => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  const onChangeOption = (e) => {
    router.push(`/category/${e.target.value}`);
  };

  return (
    <div className="w-32 sm:w-44">
      <select
        onChange={onChangeOption}
        defaultValue={"Choose a categories"}
        id="categories"
        className="bg-gray-50 border text-xs sm:text-sm truncate border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
      >
        <option
          className="text-xs sm:text-sm"
          defaultValue={"Choose a categories"}
          disabled
        >
          Choose a categories
        </option>
        {categories.map((category) => (
          <option
            className="text-xs sm:text-sm"
            key={category.slug}
            value={category.slug}
          >
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterCategories;
