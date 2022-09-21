import React, { useState } from "react";

const AddToCart = ({ prod, toggleModal }) => {
  const [cartList] = useState(
    JSON.parse(localStorage.getItem("orderList") || "[]")
  );
  let data = cartList.find((d) => d._id === prod._id);
  const [quant, setQuant] = useState(data?.quant || 1);
  const [shade, setShade] = useState();
  const [price, setPrice] = useState(prod.price);

  let onIncrement = () => {
    if (quant < 10) {
      setQuant(Number(quant) + 1);
    }
  };

  let onDecrement = () => {
    if (quant > 1) {
      setQuant(Number(quant) - 1);
    }
  };

  let getShades = (shd, qnt) => {
    let price = shd.price !== prod.price ? shd.price : prod.price;
    setShade(shd);
    setQuant(qnt);
    setPrice(price);
  };

  let addToCart = (prod) => {
    if (shade === undefined) {
      alert("Please select Shades!!");
    } else {
      let prodData = { ...prod, price: shade.price, quant, shades: shade };
      let index = cartList.findIndex((ind) => ind._id === prodData._id);
      console.log("index", index);
      let shd = cartList.filter((sh) => sh);
      let checkShd = shd.some((s) => s.shades.img === prodData.shades.img);
      console.log("checkShd", checkShd);

      if (index !== -1 && checkShd === true) {
        cartList[index] = prodData;
      } else {
        cartList.push(prodData);
      }
      toggleModal();
      console.log("list", cartList);
      localStorage.setItem("orderList", JSON.stringify(cartList));
    }
  };

  return (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className="relative w-auto my-6 mx-auto max-w-lg">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded">
            <h3 className="text-3xl font=semibold">{prod.name}</h3>
            <button
              className="bg-transparent border-0 text-black float-right"
              onClick={toggleModal}
            >
              <span className="text-black opacity-7 h-6 w-6 text-xl block py-0 rounded-full">
                x
              </span>
            </button>
          </div>
          <div className="relative p-6 grid grid-cols-2">
            {/* <div className="flex flex-col justify-end max-w-sm rounded overflow-hidden shadow-xl"> */}
            <div className="">
              <img className="w-36" src={prod.img} alt="product" />
            </div>
            <div className="flex justify-between flex-col px-5 py-3">
              {/* <div className="font-bold text-xl mb-3">{prod.name}</div> */}
              <div className="flex justify-between font-semibold text-lg">
                <h5> Price: ₹ {price}</h5>
                <h5 className="flex items-center">
                  <svg
                    className="h-6 w-6 text-yellow-300 mr-1"
                    viewBox="0 0 24 24"
                    fill="gold"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>{" "}
                  {prod.popularity}/10
                </h5>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <h5 className="">Shades:</h5>
                <div className="w-28 flex justify-between">
                  {prod.shades.map((shd) => {
                    return (
                      <button
                        className="btn btn-sm"
                        style={{ width: "30%" }}
                        key={shd.id}
                        onClick={() => getShades(shd, quant)}
                      >
                        <img className="w-8" src={shd.img} alt="shades" />
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <h5 className="">Quantity: </h5>
                {/* <div className="w-28 flex justify-between"> */}
                <div className="w-28 flex justify-around">
                  <button
                    onClick={() => onDecrement()}
                    className=""
                    disabled={quant === 1 ? "disabled" : ""}
                  >
                    <svg
                      className="h-6 w-6 text-black"
                      viewBox="0 0 24 24"
                      fill={quant === 1 ? "#bec6d3" : "#fa6b83e0"}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <circle cx="12" cy="12" r="10" />{" "}
                      <line x1="8" y1="12" x2="16" y2="12" />
                    </svg>
                  </button>
                  {quant}
                  <button
                    onClick={() => onIncrement()}
                    className=""
                    disabled={quant === 10 ? "disabled" : ""}
                  >
                    <svg
                      className="h-6 w-6 text-black"
                      viewBox="0 0 24 24"
                      fill={quant === 10 ? "#bec6d3" : "#fa6b83e0"}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <circle cx="12" cy="12" r="10" />{" "}
                      <line x1="12" y1="8" x2="12" y2="16" />{" "}
                      <line x1="8" y1="12" x2="16" y2="12" />
                    </svg>
                  </button>
                </div>
                {/* </div> */}
              </div>
            </div>
            {/* </div> */}
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 border border-gray-400 rounded mr-1"
              type="button"
              onClick={toggleModal}
            >
              Close
            </button>
            <button
              className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 border border-rose-900 rounded"
              type="button"
              onClick={() => {
                addToCart(prod);
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
