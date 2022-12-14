import { Link, NavLink } from "react-router-dom";
import checkCart from "../../Utils/CheckCart";
import { toast } from "react-toastify";
import { useCart, useCartActions } from "../../Context/CartProvider";

const Product = ({ product }) => {
  const { cart } = useCart();

  const dispatch = useCartActions();

  const addProductHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <>
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
    </>
  );
};

export default Product;
