import { useCart, useCartActions } from "../Context/CartProvider";
import { RiShoppingCartFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { TbTruckReturn } from "react-icons/tb";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdOutlineExposureNeg1, MdOutlineExposurePlus1 } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { useAuth } from "../Context/AuthProvider";
import { useEffect } from "react";

const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const userData = useAuth();
  const { cart, total, fake_total, discount } = useCart();
  const dispatch = useCartActions();
  if (!cart.length)
    return (
      <div className=" dark:text-slate-50 text-slate-900 sm:mt-[10vh] mt-[6vh] uppercase w-full flex flex-col items-center px-6 ">
        <p className="sm:text-9xl text-6xl">
          <RiShoppingCartFill />
        </p>
        <p className="sm:mt-[5vh] mt-[2vh] sm:text-3xl">no item in cart!</p>
        <p className="sm:mt-[5vh] mt-[2vh] sm:text-xl text-sm text-center">
          You can go to the following pages to see more products:
        </p>
        <div className=" sm:mt-[4vh] mt-[2vh] text-xl text-blue-500">
          <NavLink to="/">Home</NavLink>
        </div>
      </div>
    );

  const incrementHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };

  const decreaseHandler = (cartItem) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: cartItem });
  };

  return (
    <>
      <div className="m-auto  w-[98%] flex lg:flex-row flex-col mt-[6vh]">
        <div className="sm:w-[95%] lg:w-[75%] m-auto dark:bg-slate-400 bg-sky-200 sm:px-10 sm:py-6 px-2 py-1 rounded-xl">
          <p className="text-slate-50 sm:text-2xl sm:mb-4 text-center dark:bg-slate-900 bg-sky-600 sm:py-4 rounded-xl text-lg py-1 mb-2 flex items-baseline justify-center">
            <RiShoppingCartFill />
            &nbsp;Your Cart
          </p>
          {cart.map((item) => (
            <div
              className="flex flex-row justify-between dark:bg-slate-800 bg-sky-500 text-slate-50 sm:py-6 py-3 px-2 sm:px-10 sm:mb-4 mb-1 rounded-xl"
              key={item.id}
            >
              <div className="sm:w-[20%] w-[32%] flex flex-col items-center">
                <Link to={{ pathname: `/products/${item.id}` }}>
                  <img
                    className="w-full rounded-xl"
                    src={item.image}
                    alt={item.name}
                  />
                </Link>

                <div className="flex flex-row w-full h-8 mt-5">
                  <button
                    onClick={() => decreaseHandler(item)}
                    className="dark:bg-slate-600 bg-sky-700 text-slate-50 w-1/3 sm:text-2xl text-xl rounded-l-md"
                  >
                    {item.quantity === 1 ? (
                      <FaTrash className="w-full sm:text-xl" />
                    ) : (
                      <MdOutlineExposureNeg1 className="w-full pl-1" />
                    )}
                  </button>
                  <input
                    className="bg-slate-50 dark:text-slate-800 text-sky-800 w-1/3 text-center"
                    readOnly
                    type="number"
                    value={item.quantity}
                  />
                  <button
                    onClick={() => incrementHandler(item)}
                    className="dark:bg-slate-600 bg-sky-700 text-slate-50 sm:text-2xl text-xl w-1/3 rounded-r-md"
                  >
                    <MdOutlineExposurePlus1 className="w-full pr-1" />
                  </button>
                </div>
              </div>
              <Link
                className="sm:w-[75%] w-[66%] "
                to={{ pathname: `/products/${item.id}` }}
              >
                <div className="flex flex-col justify-between">
                  <p className="text-sm sm:text-xl mb-4">{item.name}</p>
                  <div className="mb-4">
                    <p className="flex items-center text-xs sm:text-sm">
                      <AiFillSafetyCertificate className=" text-2xl" />
                      &nbsp; Guarantee of authenticity
                    </p>
                    <p className="flex items-center text-xs sm:text-sm">
                      <TbTruckReturn className="text-2xl" />
                      &nbsp;Return guarantee
                    </p>
                  </div>
                  <div>
                    {item.discount > 0 && (
                      <p className="capitalize sm:text-sm text-xs">
                        -${item.quantity * item.discount} off
                      </p>
                    )}
                    <p className="sm:text-lg text-sm">
                      ${item.quantity * item.offPrice}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <CartSummery
          total={total}
          fake_total={fake_total}
          discount={discount}
          userData={userData}
        />
      </div>
      <div className="px-6 py-3 lg:hidden w-full fixed bottom-0 dark:bg-slate-900/90 bg-white/90  h-16 backdrop-blur-sm dark:text-slate-50 text-slate-900 flex flex-row justify-between items-center">
        <div className=" flex flex-col items-center">
          <p className="capitalize text-sm">total price</p>
          <p className="font-mono -tracking-tighter text-lg">${total}</p>
        </div>
        <NavLink
          className="dark:bg-slate-200 bg-sky-500 text-slate-50 w-1/2 h-full  flex items-center justify-center font-bold rounded-md dark:text-slate-900"
          to={userData ? "/checkout" : "/login?redirect=/checkout"}
        >
          Check out!
        </NavLink>
      </div>
    </>
  );
};

export default CartPage;

const CartSummery = ({ fake_total, discount, total, userData }) => {
  return (
    <div className="dark:bg-slate-900 text-slate-50 bg-sky-500 lg:w-[20%] mb-28 rounded-xl h-fit lg:sticky lg:top-20 sm:w-[95%] m-auto mt-5 lg:px-4 lg:py-8 px-6 py-8">
      <div className="flex flex-row justify-between text-sm mb-3">
        <p>Products prices:</p>
        <p>${fake_total}</p>
      </div>
      {discount > 0 && (
        <div className="flex flex-row justify-between text-sm mb-6">
          <p>Your profit:</p>
          <p>
            ${discount} ({Math.ceil((discount / fake_total) * 100)}%)
          </p>
        </div>
      )}

      <div className=" text-xs  mb-3">
        <p>
          The shipping cost is calculated based on the address, delivery time,
          weight and volume of your shipment
        </p>
      </div>
      <hr />
      <div className="flex flex-row justify-between text-sm mt-3">
        <p>Total shopping cart:</p>
        <p>${total}</p>
      </div>
      <div className="mt-6 lg:flex hidden justify-center lg:bg-transparent  lg:static">
        <NavLink
          className="dark:bg-slate-200 border bg-sky-400 text-slate-50 rounded-md lg:px-4 lg:py-2 dark:text-slate-900"
          to={userData ? "/checkout" : "/login?redirect=/checkout"}
        >
          Check out!
        </NavLink>
      </div>
    </div>
  );
};
