const CheckBoxInput = ({ formik, checkBoxOptions, name }) => {
  return (
    <div className="flex flex-col items-start w-full mb-6">
      <label>Intrests</label>
      <div className="flex flex-wrap w-full">
        {checkBoxOptions.map((item) => (
          <div className="min-w-1/3 mx-4 flex" key={item.value}>
            <input
              type="checkbox"
              id={item.value}
              name={name}
              value={item.value}
              onChange={formik.handleChange}
              checked={formik.values[name].includes(item.value)}
            />
            &nbsp;
            <label htmlFor={item.value}>{item.label}</label>
          </div>
        ))}
      </div>
      <p className="text-red-600 m-0 text-sm h-5">
        {formik.errors[name] && formik.touched[name] && formik.errors[name]}
      </p>
    </div>
  );
};

export default CheckBoxInput;
