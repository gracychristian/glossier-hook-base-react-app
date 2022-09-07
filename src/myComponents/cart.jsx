import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

const Cart = () => {
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem("orderList") || "[]")
  );

  let onIncrement = (id, qnt, shdId) => {
    for (let i = 0; i < cartList?.length; i++) {
      if (cartList[i]._id === id) {
        if (cartList[i].shades.id === shdId) {
          if (qnt != 10) {
            cartList[i].quant = parseInt(qnt) + 1;
            localStorage.setItem("orderList", JSON.stringify(cartList));
            let list = JSON.parse(localStorage.getItem("orderList"));
            setCartList(list);
          } else {
            return null;
          }
        }
      }
    }
  };

  let onDecrement = (id, qnt, shdId) => {
    for (let i = 0; i < cartList?.length; i++) {
      if (cartList[i]._id === id) {
        if (cartList[i].shades.id === shdId) {
          if (qnt != 1) {
            cartList[i].quant = parseInt(qnt) - 1;
            localStorage.setItem("orderList", JSON.stringify(cartList));
            let list = JSON.parse(localStorage.getItem("orderList"));
            setCartList(list);
          } else {
            return null;
          }
        }
      }
    }
  };

  let totalSum = () => {
    const sum =
      cartList && cartList.reduce((a, v) => (a += v.price * v.quant), 0);
    return sum;
  };

  let removeProd = (prod) => {
    const list = localStorage.getItem("orderList")
      ? JSON.parse(localStorage.getItem("orderList"))
      : [];
    const index = _.findIndex(list, prod);
    if (index === -1) return;
    list.splice(index, 1);
    localStorage.setItem("orderList", JSON.stringify(list));
    setCartList(list);
  };

  //  ----------------------------Payment---------------------------------------
  // Razorpay
  let loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  let displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_xNbznQkHnOeM6p", // Enter the Key ID generated from the Dashboard
      amount: amount * 100,
      currency: "INR",
      name: "Glossier",
      description: "Test Transaction",
      image:
        "https://livestatic.novopay.in/resources/img/nodeapp/img/Logo_NP.jpg",
      handler: function (response) {
        console.log(response.razorpay_payment_id);
        alert("Payment Successfull");
      },

      prefill: {
        name: "Gracy",
        email: "Gracy@example.com",
        contact: "9999999999",
      },
      modal: {},
      theme: {
        color: "#0096C5",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  // Stripe Pay

  // };

  //  -------------------------------------------------------------------

  return (
    <>
      <h2 className="flex justify-center mb-4"> My Order </h2>
      {cartList?.length == 0 && (
        <h4 className="flex justify-center mt-5">
          Opps! Cart is empty!!!
          <Link to="/products" className="ml-2">
            Shop here
          </Link>
        </h4>
      )}
      <table className="w-full table-auto" hidden={cartList?.length == 0}>
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Shade</th>
            <th scope="col">Rating</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Subtotal</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartList?.map((order, index) => (
            <tr key={index}>
              <td className="w-96">
                <span className="flex items-center">
                  <img src={order.img} className="w-20" />
                  {order.name}
                </span>
              </td>
              <td className="">
                <span className="td-span">
                  <img className="w-10" src={order.shades?.img} />
                </span>
              </td>
              <td>
                {" "}
                <span className="td-span">{order.popularity}/10 </span>
              </td>
              <td className="">
                {" "}
                <span className="td-span">₹ {order.price}</span>
              </td>
              <td>
                <span className="td-span">
                  <div className="flex justify-around w-24">
                    <button
                      onClick={() =>
                        onDecrement(order._id, order.quant, order.shades.id)
                      }
                      className=""
                      disabled={order.quant === 1 ? "disabled" : ""}
                    >
                      <svg
                        className="h-6 w-6 text-black"
                        viewBox="0 0 24 24"
                        fill={order.quant === 1 ? "#bec6d3" : "#fa6b83e0"}
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
                    {order.quant}
                    <button
                      onClick={() =>
                        onIncrement(order._id, order.quant, order.shades.id)
                      }
                      className=""
                      disabled={order.quant === 10 ? "disabled" : ""}
                    >
                      <svg
                        className="h-6 w-6 text-black"
                        viewBox="0 0 24 24"
                        fill={order.quant === 10 ? "#bec6d3" : "#fa6b83e0"}
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
                </span>
              </td>
              <td>
                <span className="td-span">₹ {order.price * order.quant}</span>
              </td>
              <td onClick={() => removeProd(order)}>
                {" "}
                <span className="td-span">
                  <svg
                    className="h-6 w-6 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4">
              <button
                className="mt-5 mr-3 bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 border border-rose-900 rounded"
                onClick={() => displayRazorpay(totalSum())}
              >
                Order with Razorpay
              </button>
              {/* <button
            style={{
              color: "#ffff",
              backgroundColor: "#ff9797",
              borderColor: "#ec0000",
            }}
            className="btn"
            onClick={() => this.redirectToCheckout()}
          >
            Order with Stripe
          </button> */}
            </td>
            <td colSpan="8" className="text-center">
              {/* <div mt-3 ></div> */}
              {cartList?.length != 0 && (
                <strong className="mt-5">Total: ₹ {totalSum()}</strong>
              )}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default Cart;
