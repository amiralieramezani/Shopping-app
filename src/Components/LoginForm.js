import Input from "./Common/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../Services/loginService";
import { toast } from "react-toastify";
import { useAuth, useAuthActions } from "../Context/AuthProvider";
import { useQuery } from "../hooks/useQuery";
import { useEffect } from "react";

const LoginForm = () => {
  const navigate = useNavigate();

  const setAuth = useAuthActions();

  const query = useQuery();

  const redirect = query.get("redirect") || "/";

  const auth = useAuth();

  useEffect(() => {
    if (auth) {
      navigate(redirect);
    }
  }, [redirect, auth]);

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      toast.success("Login successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      setAuth(data);
      //localStorage.setItem("authState", JSON.stringify(data));
      navigate(redirect);
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid E-mail Format!")
      .required("E-mail is Required!"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex capitalize flex-col items-center max-w-md m-auto text-slate-50 dark:bg-slate-800 bg-sky-600 px-6 py-5 sm:px-12 sm:py-10 rounded-lg"
    >
      <Input formik={formik} type="email" name="email" label="email" />

      <Input formik={formik} type="password" name="password" label="password" />

      <button
        className="dark:bg-slate-50 bg-sky-400 dark:border-slate-600 border-2 dark:text-slate-900 px-7 py-2 rounded-xl disabled:cursor-not-allowed disabled:text-sky-300 disabled:border-sky-300 dark:disabled:text-slate-400 dark:disabled:border-slate-400"
        type="submit"
        disabled={!formik.isValid}
      >
        Submit
      </button>
      <div className="flex mt-8 w-full sm:text-base text-sm">
        <p className="text-slate-300 italic">New to our online shop?</p>
        &nbsp;&nbsp;
        <NavLink
          className="underline underline-offset-4 font-bold"
          to={`/signup?redirect=${redirect}`}
        >
          {" "}
          Get started
        </NavLink>
      </div>
    </form>
  );
};

export default LoginForm;
