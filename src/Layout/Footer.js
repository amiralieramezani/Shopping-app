import {
  AiFillFacebook,
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from "react-icons/ai";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  if (pathname === "/cart") {
    return (
      <footer className=" bg-sky-400 dark:bg-slate-900 hidden lg:flex flex-col justify-around min-h-[30vh] text-white mt-10 py-5">
        <div className="sm:flex grid grid-cols-3 sm:flex-row  sm:justify-evenly">
          <div className="flex items-center flex-col">
            <p className="sm:text-lg mb-4 text-xs sm:font-bold uppercase">
              PRODUCTS
            </p>
            <p className="sm:text-sm mb-3 capitalize  text-[10px]  sm:block">
              shoes
            </p>
            <p className="sm:text-sm mb-3 capitalize  text-[10px] sm:block">
              clothing
            </p>
            <p className="sm:text-sm mb-3 capitalize text-[10px] sm:block">
              accessories
            </p>
            <p className="sm:text-sm mb-3 capitalize hidden sm:block">
              gift carts
            </p>
            <p className="sm:text-sm mb-3 capitalize hidden sm:block">
              new arrivals
            </p>
            <p className="sm:text-sm mb-3 capitalize hidden sm:block">
              best sellers
            </p>
          </div>
          <div className="flex  items-center  flex-col uppercase">
            <p className="sm:text-lg mb-4 text-xs sm:font-bold">SUPPORT</p>
            <p className="sm:text-sm mb-3 capitalize  text-[10px] sm:block">
              help
            </p>
            <p className="sm:text-sm mb-3 capitalize  text-[10px] sm:block">
              shipping
            </p>
            <p className="sm:text-sm mb-3 capitalize  text-[10px] sm:block">
              size charts
            </p>
            <p className="sm:text-sm mb-3 capitalize  hidden sm:block">
              store locator
            </p>
            <p className="sm:text-sm mb-3 capitalize  hidden sm:block">
              order tracking
            </p>
            <p className="sm:text-sm mb-3 capitalize  hidden sm:block">
              returns
            </p>
          </div>
          <div className="flex  items-center flex-col uppercase">
            <p className="sm:text-lg text-xs mb-4 sm:font-bold">COMPANY INFO</p>
            <p className="sm:text-sm mb-3 capitalize  text-[10px] sm:block">
              about us
            </p>
            <p className="sm:text-sm mb-3 capitalize  hidden sm:block">
              student discount
            </p>
            <p className="sm:text-sm mb-3 capitalize  text-[10px] sm:block">
              adidas apps
            </p>
            <p className="sm:text-sm mb-3 capitalize  hidden sm:block">
              adiclub
            </p>
            <p className="sm:text-sm mb-3 capitalize  hidden sm:block">press</p>
            <p className="sm:text-sm mb-3 capitalize  text-[10px] sm:block">
              careers
            </p>
          </div>
          <div className="sm:flex items-center hidden grid-cols-2 sm:flex-col uppercase">
            <p className="sm:text-lg text-xs mb-4 sm:font-bold ">FOLLOW US</p>
            <AiFillFacebook className="sm:mb-4 sm:text-2xl text-xl mb-2" />
            <AiFillGoogleCircle className="sm:mb-4 sm:text-2xl text-xl mb-2" />
            <AiFillInstagram className="sm:mb-4 sm:text-2xl text-xl mb-2" />
            <AiFillTwitterSquare className="sm:mb-4 sm:text-2xl text-xl mb-2" />
            <AiOutlineWhatsApp className="sm:mb-4 sm:text-2xl text-xl mb-2" />
            <AiOutlineYoutube className="sm:mb-4 sm:text-2xl text-xl mb-2" />
          </div>
        </div>
        <div className="sm:hidden flex flex-row justify-around">
          <AiFillFacebook className="sm:mb-4 sm:text-2xl text-xl mb-2" />
          <AiFillGoogleCircle className="sm:mb-4 sm:text-2xl text-xl mb-2" />
          <AiFillInstagram className="sm:mb-4 sm:text-2xl text-xl mb-2" />
          <AiFillTwitterSquare className="sm:mb-4 sm:text-2xl text-xl mb-2" />
          <AiOutlineWhatsApp className="sm:mb-4 sm:text-2xl text-xl mb-2" />
          <AiOutlineYoutube className="sm:mb-4 sm:text-2xl text-xl mb-2" />
        </div>
      </footer>
    );
  }
  return (
    <footer className=" bg-sky-400 dark:bg-slate-900 flex flex-col justify-around min-h-[30vh] text-white mt-10 py-5">
      <div className="sm:flex grid grid-cols-3 sm:flex-row  sm:justify-evenly">
        <div className="flex items-center flex-col">
          <p className="sm:text-lg mb-4 text-xs sm:font-bold uppercase">
            PRODUCTS
          </p>
          <p className="sm:text-sm mb-3 capitalize  text-[10px]  sm:block">
            shoes
          </p>
          <p className="sm:text-sm mb-3 capitalize  text-[10px] sm:block">
            clothing
          </p>
          <p className="sm:text-sm mb-3 capitalize text-[10px] sm:block">
            accessories
          </p>
          <p className="sm:text-sm mb-3 capitalize hidden sm:block">
            gift carts
          </p>
          <p className="sm:text-sm mb-3 capitalize hidden sm:block">
            new arrivals
          </p>
          <p className="sm:text-sm mb-3 capitalize hidden sm:block">
            best sellers
          </p>
        </div>
        <div className="flex  items-center  flex-col uppercase">
          <p className="sm:text-lg mb-4 text-xs sm:font-bold">SUPPORT</p>
          <p className="sm:text-sm mb-3 capitalize  text-[10px] sm:block">
            help
          </p>
          <p className="sm:text-sm mb-3 capitalize  text-[10px] sm:block">
            shipping
          </p>
          <p className="sm:text-sm mb-3 capitalize  text-[10px] sm:block">
            size charts
          </p>
          <p className="sm:text-sm mb-3 capitalize  hidden sm:block">
            store locator
          </p>
          <p className="sm:text-sm mb-3 capitalize  hidden sm:block">
            order tracking
          </p>
          <p className="sm:text-sm mb-3 capitalize  hidden sm:block">returns</p>
        </div>
        <div className="flex  items-center flex-col uppercase">
          <p className="sm:text-lg text-xs mb-4 sm:font-bold">COMPANY INFO</p>
          <p className="sm:text-sm mb-3 capitalize  text-[10px] sm:block">
            about us
          </p>
          <p className="sm:text-sm mb-3 capitalize  hidden sm:block">
            student discount
          </p>
          <p className="sm:text-sm mb-3 capitalize  text-[10px] sm:block">
            adidas apps
          </p>
          <p className="sm:text-sm mb-3 capitalize  hidden sm:block">adiclub</p>
          <p className="sm:text-sm mb-3 capitalize  hidden sm:block">press</p>
          <p className="sm:text-sm mb-3 capitalize  text-[10px] sm:block">
            careers
          </p>
        </div>
        <div className="sm:flex items-center hidden grid-cols-2 sm:flex-col uppercase">
          <p className="sm:text-lg text-xs mb-4 sm:font-bold ">FOLLOW US</p>
          <AiFillFacebook className="sm:mb-4 sm:text-2xl text-xl mb-2" />
          <AiFillGoogleCircle className="sm:mb-4 sm:text-2xl text-xl mb-2" />
          <AiFillInstagram className="sm:mb-4 sm:text-2xl text-xl mb-2" />
          <AiFillTwitterSquare className="sm:mb-4 sm:text-2xl text-xl mb-2" />
          <AiOutlineWhatsApp className="sm:mb-4 sm:text-2xl text-xl mb-2" />
          <AiOutlineYoutube className="sm:mb-4 sm:text-2xl text-xl mb-2" />
        </div>
      </div>
      <div className="sm:hidden flex flex-row justify-around">
        <AiFillFacebook className="sm:mb-4 sm:text-2xl text-xl mb-2" />
        <AiFillGoogleCircle className="sm:mb-4 sm:text-2xl text-xl mb-2" />
        <AiFillInstagram className="sm:mb-4 sm:text-2xl text-xl mb-2" />
        <AiFillTwitterSquare className="sm:mb-4 sm:text-2xl text-xl mb-2" />
        <AiOutlineWhatsApp className="sm:mb-4 sm:text-2xl text-xl mb-2" />
        <AiOutlineYoutube className="sm:mb-4 sm:text-2xl text-xl mb-2" />
      </div>
    </footer>
  );
};

export default Footer;
