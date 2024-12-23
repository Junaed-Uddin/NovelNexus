import { useEffect } from "react";
import { useState } from "react";
import Category from "../Category/Category";
import { ColorRing } from "react-loader-spinner";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
    setLoading(false);
  }, []);

  return (
    <div className="my-32 max-w-6xl mx-auto">
      <h2 className="text-4xl font-mono text-center font-semibold">
        Books Category
      </h2>
      {loading && (
        <div className="flex flex-col justify-center items-center mt-8">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      )}
      <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 px-5 xl:px-0 gap-7">
        {categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
