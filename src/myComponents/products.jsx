import React, { useState } from "react";
import { getProducts } from "../services/productsService";
import Cards from "../myComponents/common/card";
import SearchProd from "./common/search";
import Popularity from "./common/sortPopularity";

const Products = () => {
  const [products] = useState(getProducts());
  const [filtered, setFiltered] = useState(getProducts());
  const [sort, setSort] = useState("asc");
  const [searchField, setSearchField] = useState("");

  let searchProd = (query) => {
    let searchData = filtered;
    if (query) {
      searchData = products.filter((pr) => {
        return pr.name.toLowerCase().includes(query.toLowerCase());
      });
      setFiltered(searchData);
    } else {
      setFiltered(products);
    }

    setSearchField(query);
  };

  let onSort = () => {
    let sortL;
    if (sort === "asc") {
      sortL = [].concat(products).sort((a, b) => a.popularity - b.popularity);
      setFiltered(sortL);
      setSort("dec");
    } else if (sort === "dec") {
      sortL = [].concat(products).sort((a, b) => b.popularity - a.popularity);
      setFiltered(sortL);
      setSort("asc");
    } else {
      setFiltered(products);
    }
    setSearchField("");
  };

  return (
    <>
      <div className="px-2 flex">
        <SearchProd value={searchField} onChange={searchProd} />
        <Popularity onClick={onSort} />
      </div>
      <div className="flex justify-center mt-10">
        {filtered.length === 0 && (
          <h1 className="grid-cols-1 text-3xl font-bold">No results found!</h1>
        )}
      </div>

      <div className="p-2 grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {filtered.length > 0 &&
          filtered.map((prod) => <Cards key={prod._id} prod={prod} />)}
      </div>
    </>
  );
};

export default Products;
