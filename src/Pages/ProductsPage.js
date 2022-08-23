import * as data from "../data";
import { useEffect, useState } from "react";
import Select from "react-select";
import { AiOutlineClose } from "react-icons/ai";
import { FaSortAmountDown } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";
import Product from "../Components/Common/Product";

const ProductsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [sortBar, setSortBar] = useState(false);

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
          <div className="dark:bg-slate-800 bg-white dark:text-white text-slate-900 flex flex-col justify-between rounded-lg py-6 px-4 snap-start">
            <Product key={product.id} product={product} />{" "}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
