"use client";
import { Button } from "keep-react";
import { ChatText, ShoppingCart } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../features/cartSlice.js";

const Cart = ({ setShow }) => {
  let products = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const totalPrice = products.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const deleteHandler = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="font-pop absolute top-0 right-0 rounded-md shadow-lg bg-white p-8 text-gray-500 z-50 max-w-[600px]">
      <div className="flex gap-x-10 justify-end">
        <button
          onClick={() => setShow(false)}
          className="font-bold text-2xl text-black"
        >
          X
        </button>
      </div>
      <Button shape="circle">
        <ShoppingCart size={20} />
      </Button>
      <div>
        {products.map((data) => (
          <div key={data.id} className="grid place-items-center">
            <div className="grid grid-cols-3 gap-2 items-center pb-8 pt-4 border-b border-gray-400 max-w-[400px]">
              <img src={data.thumbnail} alt="" className="w-7 h-5 block" />
              <div className="grid grid-cols-2 gap-6">
                <p className="w-10">{data.title}</p>
                <div>
                  <p>
                    {data.quantity}X ${data.price}
                  </p>
                </div>
              </div>
              <button onClick={() => deleteHandler(data.id)}>X</button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-around">
        <p>SubTotal</p>
        <p>${totalPrice}</p>
      </div>
      <Button className="w-full mt-8">
        <ChatText size={20} className="mr-1.5" />
        Your Cart
      </Button>
    </div>
  );
};

export default Cart;
