import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import CartProvider from "./Context/CartProvider";
import Layout from "./Layout/Layout";
import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import ProfilePage from "./Pages/ProfilePage";
import "react-toastify/dist/ReactToastify.css";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import AuthProvider from "./Context/AuthProvider";
import CheckoutPage from "./Pages/CheckoutPage";
import ProductsPage from "./Pages/ProductsPage";
import SingleProductPage from "./Pages/SingleProductPage";
import ThemeProvider from "./Context/ThemeProvider";
import Theme from "./Layout/Theme";

function App() {
  return (
    <ThemeProvider>
      <Theme>
        <div className="dark:bg-slate-700 bg-slate-50 min-h-screen">
          <CartProvider>
            <AuthProvider>
              <Layout>
                <ToastContainer
                  position="top-right"
                  autoClose={1500}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss={false}
                  draggable
                  pauseOnHover={false}
                />
                <Routes>
                  <Route path="*" element={<NotFound />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/products/:id" element={<SingleProductPage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/" element={<HomePage />} />
                </Routes>
              </Layout>
            </AuthProvider>
          </CartProvider>
        </div>
      </Theme>
    </ThemeProvider>
  );
}

export default App;
