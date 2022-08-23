const Input = ({label ,name, formik, type="text"}) => {
  return (
    <div className="flex flex-col items-start w-full mb-6">
      <label htmlFor={name}>{label}</label>
      <input
        className="bg-slate-50 text-slate-900 outline-none p-2 rounded-md w-full"
        id={name}
        type={type}
        {...formik.getFieldProps(name)}
        name={name}
      />
      <p className="text-red-600 m-0 text-sm h-5">
        {formik.errors[name] && formik.touched[name] && formik.errors[name]}
      </p>
    </div>
  );
};

export default Input;
