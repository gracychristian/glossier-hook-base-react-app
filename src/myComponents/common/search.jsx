import React from "react";

const SearchProd = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="query"
      className="mr-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search Glossier"
      value={value}
      onChange={(e) => {
        onChange(e.currentTarget.value);
      }}
    />
  );
};

export default SearchProd;
