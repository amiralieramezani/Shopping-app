import Input from "./Common/Input";
import Radio from "./Common/Radio";
import { useFormik } from "formik";
import * as yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { signupUser } from "../Services/signupService";
import { toast } from "react-toastify";
import { useAuth, useAuthActions } from "../Context/AuthProvider";
import { useQuery } from "../hooks/useQuery";
import { useEffect } from "react";

const SignupForm = () => {
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
    name: "",
    gender: "",
    email: "",
    number: "",
    password: "",
    passwordConfirm: "",
    terms: false,
  };
  const onSubmit = async (values) => {
    const { name, email, number, password } = values;
    const userData = {
      name,
      email,
      phoneNumber: number,
      password,
    };
    try {
      const { data } = await signupUser(userData);
      toast.success("Signup successfully!", {
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

  const radioOptions = [
    { label: "male", value: "male" },
    { label: "female", value: "female" },
  ];

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Name is Required!")
      .min(3, "Name is too short!"),
    gender: yup.string().required("Gender is Required!"),
    email: yup
      .string()
      .email("Invalid E-mail Format!")
      .required("E-mail is Required!"),
    number: yup
      .string()
      .required("Phone number is Required!")
      .matches(/^[0-9]{11}$/, "Phone number is invalid!")
      .nullable(),
    password: yup
      .string()
      .required("Password is Required!")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    passwordConfirm: yup
      .string()
      .required("Password Confirmation is Required!")
      .oneOf([yup.ref("password"), null], "Passwords must match!"),
    terms: yup
      .boolean()
      .required("The terms and conditions must be accepted!")
      .oneOf([true], "The terms and conditions must be accepted!"),
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
      className="flex capitalize flex-col items-center max-w-md m-auto text-slate-50 bg-sky-600 dark:bg-slate-800 px-6 py-5 sm:px-12 sm:py-10 rounded-lg"
    >
      <Input formik={formik} name="name" label="name" />
      <div className="flex flex-col items-start w-full mb-6">
        <label htmlFor="">Gender</label>
        <div className="flex w-full justify-evenly">
          <Radio name="gender" formik={formik} radioOptions={radioOptions} />
        </div>
        <p className="text-red-600 m-0 text-sm h-5">
          {formik.errors.gender &&
            formik.touched.gender &&
            formik.errors.gender}
        </p>
      </div>
      <Input formik={formik} type="email" name="email" label="email" />

      <Input formik={formik} type="tel" name="number" label="phone number" />

      <Input formik={formik} type="password" name="password" label="password" />

      <Input
        formik={formik}
        type="password"
        name="passwordConfirm"
        label="password confirmation"
      />

      <div className="flex flex-col items-start w-full mb-6">
        <div>
          <input
            type="checkbox"
            id="terms"
            name="terms"
            value={true}
            onChange={formik.handleChange}
            checked={formik.values.terms}
          />
          &nbsp;
          <label htmlFor="terms">Terms and Conditions</label>
        </div>

        <p className="text-red-600 m-0 text-sm h-5">
          {formik.errors.terms && formik.touched.terms && formik.errors.terms}
        </p>
      </div>

      <button
        className="dark:bg-slate-50 bg-sky-400 dark:border-slate-600 border-2 dark:text-slate-900 px-7 py-2 rounded-xl disabled:cursor-not-allowed disabled:text-sky-300 disabled:border-sky-300 dark:disabled:text-slate-400 dark:disabled:border-slate-400"
        type="submit"
        disabled={!formik.isValid}
      >
        Submit
      </button>

      <div className="flex mt-8 w-full text-sm sm:text-base">
        <p className="text-slate-300 italic">Already have an Account?</p>
        &nbsp;&nbsp;
        <NavLink
          className="underline underline-offset-4 font-bold"
          to={`/login?redirect=${redirect}`}
        >
          {" "}
          Log in
        </NavLink>
      </div>
    </form>
  );
};

export default SignupForm;
