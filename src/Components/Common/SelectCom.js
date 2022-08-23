import Select from "react-select";

const SelectComponent = ({ selectOptions, name, value, onChange, formik }) => {
  const customStyles = {
    control: (base) => ({
      ...base,
      background: "#fff0f2",
      outline: 0,
      border: 0,
    }),
    menu: (base) => ({
      ...base,
      borderRadius: 0,
      marginTop: 0,
    }),
    menuList: (base) => ({
      ...base,
      padding: 0,
    }),
    option: (provided) => ({
      ...provided,
      color: "#881337",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#881337",
    }),
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: "#fb7185",
      };
    },
  };
  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : "";
  };
  return (
    <div className="flex flex-col items-start w-full mb-6">
      <label>{name}</label>
      <Select
        className="w-full"
        value={defaultValue(selectOptions, value)}
        onChange={(value) => {
          onChange(value);
        }}
        name={name}
        options={selectOptions}
        styles={customStyles}
        placeholder="Select your Nationality ..."
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: "#ffe4e6",
            primary: "#fecdd3",
          },
        })}
      />
      <p className="text-red-600 m-0 text-sm h-5">
        {formik.errors[name] && formik.touched[name] && formik.errors[name]}
      </p>
    </div>
  );
};

export default SelectComponent;
