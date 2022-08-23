import { NavLink, useNavigate, useParams } from "react-router-dom";
import * as data from "../data";
import { TbTruckReturn } from "react-icons/tb";
import { AiFillSafetyCertificate } from "react-icons/ai";
import checkCart from "../Utils/CheckCart";
import { useCart, useCartActions } from "../Context/CartProvider";
import { toast } from "react-toastify";
import { BiArrowBack } from "react-icons/bi";
import { useEffect } from "react";

const SingleProductPage = () => {
  let id = useParams().id;

  const { cart } = useCart();

  let navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  const dispatch = useCartActions();

  const addProductHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div>
      <div className=" sm:mt-5 mt-3 px-[3%]">
        <button className="text-3xl dark:text-white" onClick={() => navigate(-1)}>
          <BiArrowBack />
        </button>
      </div>
      {data.products
        .filter((item) => `${item.id}` === id)
        .map((product) => (
          <div
            className="dark:bg-slate-800 bg-sky-600 mt-3 rounded px-6 py-7 flex sm:flex-row flex-col text-slate-50"
            key={product.id}
          >
            <div className="sm:w-7/12 relative">
              <img
                src={product.image}
                alt={product.name}
                className=" rounded sm:w-11/12"
              />
              {product.discount > 0 && (
                <p className="bg-sky-500 italic  absolute top-4 text-white p-0.5 text-3xl font-bold">
                  {Math.ceil((product.discount / product.price) * 100)}%
                </p>
              )}
            </div>
            <div className="sm:w-5/12 w-full flex flex-col h-fit sticky top-24 px-4 mt-6 sm:mt-0">
              <p className="lg:mb-20 sm:mb-14 mb-4 text-lg font-bold">
                {product.name}
              </p>
              <div className="lg:mb-20 sm:mb-14 mb-4">
                <p className="flex items-center lg:mb-8 mb-2 sm:mb-6 text-base sm:text-sm">
                  <AiFillSafetyCertificate className=" text-2xl" />
                  &nbsp; Guarantee of authenticity
                </p>
                <p className="flex items-center text-base sm:text-sm">
                  <TbTruckReturn className="text-2xl" />
                  &nbsp;Return guarantee
                </p>
              </div>
              <div className="lg:mb-20 sm:mb-10 mb-4">
                <p className="dark:text-slate-300 text-slate-600 text-2xl mb-4 line-through">
                  {product.discount > 0 && `$${product.price}`}
                </p>
                <p className="text-3xl font-bold">${product.offPrice}</p>
              </div>

              <div className="flex flex-col items-center">
                {checkCart(cart, product) ? (
                  <NavLink
                    className="dark:bg-slate-200 bg-sky-500 text-white text-xl rounded-md px-10 py-4 dark:text-slate-900"
                    to="/cart"
                  >
                    In cart!
                  </NavLink>
                ) : (
                  <button
                    onClick={() => addProductHandler(product)}
                    className="dark:bg-slate-200 bg-sky-500 text-white rounded-md text-xl px-10 py-4 dark:text-slate-900"
                  >
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SingleProductPage;
