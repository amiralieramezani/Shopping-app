import { useEffect } from "react";
import SignupForm from "../Components/SignupForm";

const SignupPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-[95%] m-auto py-20">
      <SignupForm />
    </div>
  );
};

export default SignupPage;
