import React from "react";
import FetchApi from "./FetchApi";

const Datashow = () => {
  const { data, isLoading, isError } = FetchApi();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-bold">
        Loading...
      </div>
    );
  }
  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-red-500">
        Something Went Wrong...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-64">
              <img
                src={product.image}
                alt={product.title}
                className="absolute w-full h-full object-contain p-4"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                {product.title}
              </h3>
              <p className="text-2xl font-bold mb-4">${product.price}</p>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Datashow;
