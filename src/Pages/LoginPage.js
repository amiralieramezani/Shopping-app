import { useEffect } from "react";
import LoginForm from "../Components/LoginForm";

const LoginPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-[95%] m-auto py-20 ">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
