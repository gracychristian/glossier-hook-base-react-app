import React, { useState } from "react";
import AddToCart from "./addToCartModal";

const Cards = ({ prod }) => {
  const [addProd, setAddProd] = useState();
  const [showModal, setShowModal] = useState(false);
  

  let openModal = (prod) => {
    // console.log("modal", prod);
    setAddProd(prod);
    let showHide = showModal === true ? false : true;
    setShowModal(showHide);
  };

  return (
    <div className="flex flex-col justify-end max-w-sm rounded overflow-hidden shadow-xl">
      <div className="flex justify-center">
        <img className="w-60" src={prod.img} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-3">{prod.name}</div>
        <div className="flex justify-between font-semibold text-lg">
          <p>₹ {prod.price}</p>
          <p>{prod.popularity}/10</p>
        </div>
      </div>
      <div className="px-6 pt-2 pb-5">
        {/* <button className="bg-rose-300 hover:bg-rose-600 text-white font-bold py-2 px-4 border border-rose-600 rounded">
          Add to cart
        </button> */}
        {/* <AddToCart prod={prod} /> */}
        {/* <button
          onClick={() => openModal(prod)}
          className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 border border-rose-900 rounded"
        >
          Add to cart
        </button> */}
        <button onClick={() => openModal(prod)} className="">
          <p className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 border border-rose-900 rounded">
            Add to cart
          </p>
        </button>
        {showModal && (
          <AddToCart
            prod={addProd}
            showModal={showModal}
            toggleModal={openModal}
          />
        )}
      </div>
    </div>
  );
};

export default Cards;
