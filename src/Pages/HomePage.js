import { useEffect } from "react";
import Blog from "../Components/Common/Blog";
import Product from "../Components/Common/Product";
import * as data from "../data";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="relative z-0">
        <img
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enUS/Images/originals-fw22-nmd-v3-sustain-hp-mh-v2-d_tcm221-928499.jpg"
          alt="poster"
        />
        <p className="uppercase text-rose-500 font-bold lg:text-7xl md:text-6xl sm:text-4xl text-2xl absolute bottom-[50%] left-[5%] font-mono tracking-widest">
          nmd_v3
        </p>
        <p className="capitalize text-slate-50 font-bold lg:text-lg md:text-base sm:text-sm text-[8px] absolute bottom-[30%] left-[5%] font-mono">
          The NMD evolves for a new generation.
        </p>
      </div>
      <div className="uppercase dark:text-slate-50 text-slate-900 font-bold italic flex flex-row justify-center xl:mt-32 xl:mb-16 md:mt-20 md:mb-10 sm:mt-14 sm:mb-8 mb-4 mt-10  font-mono tracking-wider 2xl:text-5xl xl:text-2xl md:text-2xl sm:text-lg">
        <label>POPULAR RIGHT NOW</label>
      </div>
      <div className="flex no-scrollbar items-center mt-[4vh] overflow-scroll snap-x flex-row dark:bg-slate-500 bg-sky-300 sm:w-[95%] w-[98%] m-auto rounded-xl dark:text-slate-50 text-slate-900 py-9">
        <div className=" snap-start min-w-[3%]"></div>
        {data.products
          .filter((item) => item.popular === true)
          .map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
      <div className="uppercase dark:text-slate-50 text-slate-900 font-bold italic flex flex-row justify-center xl:mt-32 xl:mb-16 md:mt-20 md:mb-10 sm:mt-14 sm:mb-8 mb-4 mt-10  font-mono tracking-wider 2xl:text-5xl xl:text-2xl md:text-2xl sm:text-lg">
        <label>BLOG</label>
      </div>
      <div className="flex no-scrollbar items-center mt-[4vh] overflow-scroll snap-x flex-row dark:bg-slate-500 bg-sky-300 sm:w-[95%] w-[98%] m-auto rounded-xl dark:text-slate-50 text-slate-900 py-9">
        <div className=" snap-start min-w-[3%]"></div>
        {data.blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
