import * as data from "../data";
import { Link, NavLink } from "react-router-dom";
import checkCart from "../Utils/CheckCart";
import { toast } from "react-toastify";
import { useCart, useCartActions } from "../Context/CartProvider";
import { useEffect, useState } from "react";
import Select from "react-select";
import { AiOutlineClose } from "react-icons/ai";
import { FaSortAmountDown } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";

const ProductsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { cart } = useCart();

  const dispatch = useCartActions();

  const [sortBar, setSortBar] = useState(false);

  const addProductHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`${product.name} added to cart!`);
  };

  const options = [
    { value: "new", label: "Newest" },
    { value: "expensive", label: "Price: High to Low" },
    { value: "cheap", label: "Price: Low to High" },
  ];

  const [sort, setSort] = useState({ value: "new", label: "Newest" });

  const sortWithSwitch = (sort) => {
    switch (sort.value) {
      case "expensive": {
        const filteredProducts = data.products.sort(
          (a, b) => b.offPrice - a.offPrice
        );
        return filteredProducts;
      }
      case "cheap": {
        const filteredProducts = data.products.sort(
          (a, b) => a.offPrice - b.offPrice
        );
        return filteredProducts;
      }
      case "new": {
        const filteredProducts = data.products.sort((a, b) => b.id - a.id);
        return filteredProducts;
      }
      default:
        return data.products;
    }
  };

  return (
    <>
      <div className="relative z-0">
        <img
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enUS/Images/originals-fw22-nmd-v3-launch-glpw-mh-d_tcm221-927802.jpg"
          alt="poster"
        />
        <p className="uppercase text-rose-500 font-bold lg:text-7xl md:text-6xl sm:text-4xl text-2xl absolute bottom-[50%] left-[5%] font-mono tracking-widest">
          nmd_v3
        </p>
        <p className="capitalize sm:max-w-[60%] max-w-[70%] text-slate-50 font-bold lg:text-lg md:text-base sm:text-xs text-[7px] absolute bottom-[30%] left-[5%] font-mono">
          The NMD evolves for a new generation. Featuring BOOST cushioning and
          bold technical detailing – the NMD_V3 is made to take on the city.
        </p>
      </div>
      <div className="mt-12 flex flex-row justify-start items-center px-3 border-b dark:border-slate-400 pb-4">
        <div className="flex-row items-center hidden sm:flex">
          <label className="mr-4 dark:text-white text-black">Sort :</label>
          <Select
            className="w-48"
            options={options}
            onChange={setSort}
            defaultValue={sort}
            value={sort}
          />
        </div>
        <div>
          <button
            className="flex flex-row items-center sm:hidden dark:text-white text-lg px-7"
            onClick={() => setSortBar(!sortBar)}
          >
            <FaSortAmountDown />
            &nbsp;{sort.label}
          </button>
          {sortBar && (
            <div className="fixed animate-sortBar-slide sm:hidden w-full bg-sky-500 dark:bg-slate-900 rounded-t-3xl bottom-0 left-0 text-white font-bold items-start flex flex-col px-6">
              <div className="mb-7 mt-3 w-full flex flex-row justify-between items-center">
                <label className="text-xl">Order by</label>
                <button
                  className="text-4xl"
                  onClick={() => setSortBar(!sortBar)}
                >
                  <AiOutlineClose />
                </button>
              </div>
              <button
                onClick={() => {
                  setSort({ value: "new", label: "Newest" });
                  setSortBar(!sortBar);
                }}
                className="w-full flex justify-between py-4 border-b"
              >
                Newest
                {sort.value === "new" && <BsCheckLg />}
              </button>
              <button
                onClick={() => {
                  setSort({ value: "expensive", label: "Price: High to Low" });
                  setSortBar(!sortBar);
                }}
                className="w-full flex justify-between py-4 border-b"
              >
                Price: High to Low
                {sort.value === "expensive" && <BsCheckLg />}
              </button>
              <button
                onClick={() => {
                  setSort({ value: "cheap", label: "Price: Low to High" });
                  setSortBar(!sortBar);
                }}
                className="w-full flex justify-between py-4"
              >
                Price: Low to High
                {sort.value === "cheap" && <BsCheckLg />}
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="grid sm:grid-cols-4 sm:gap-4 grid-cols-2 gap-2 mt-12">
        {sortWithSwitch(sort).map((product) => (
          <div
            key={product.id}
            className="dark:bg-slate-800 bg-white dark:text-white text-slate-900 flex flex-col justify-between rounded-lg py-6 px-4 snap-start"
          >
            <Link to={{ pathname: `/products/${product.id}` }}>
              <div className=" mb-2 sm:mb-5">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="sm:text-sm  mb-2 sm:mb-5 text-xs w-full">
                <p className=" truncate">{product.name}</p>
              </div>
              <div className="flex mb-2 sm:mb-5 flex-col justify-between">
                <div className="flex flex-row justify-between">
                  <p className=" font-bold">${product.offPrice}</p>
                  {product.discount > 0 && (
                    <p className="bg-sky-500 italic dark:text-black text-white rounded-full p-0.5 text-sm font-bold">
                      {Math.ceil((product.discount / product.price) * 100)}%
                    </p>
                  )}
                </div>
                <div className="flex flex-row">
                  <p className="dark:text-slate-300 text-slate-500 line-through">
                    {product.discount > 0 && `$${product.price}`}
                  </p>
                  <p>&nbsp;</p>
                </div>
              </div>
            </Link>

            <div className="flex flex-col items-center">
              {checkCart(cart, product) ? (
                <NavLink
                  className="dark:bg-slate-200 bg-sky-500 text-white rounded-md px-4 py-2 dark:text-slate-900"
                  to="/cart"
                >
                  In cart!
                </NavLink>
              ) : (
                <button
                  onClick={() => addProductHandler(product)}
                  className="dark:bg-slate-200 bg-sky-500 text-white rounded-md px-4 py-2 dark:text-slate-900"
                >
                  Add to cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
