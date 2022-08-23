const Radio = ({ name, formik, radioOptions }) => {
  return (
    <>
      {radioOptions.map((item) => (
        <div className="flex items-center" key={item.value}>
          <input
            className="w-5 h-5"
            type="radio"
            id={item.value}
            {...formik.getFieldProps(name)}
            name={name}
            value={item.value}
          />
          &nbsp;
          <label htmlFor={item.value}>{item.label}</label>
        </div>
      ))}
    </>
  );
};

export default Radio;
