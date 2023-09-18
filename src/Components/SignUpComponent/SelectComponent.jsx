const SelectComponent = ({ SelectOption, name, formik }) => {
 
  return (
    <div>
      <select {...formik.getFieldProps(name)} name={name}>
        {SelectOption.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <span className="error">{formik.errors[name]}</span>
      )}
      {}
    </div>
  );
};

export default SelectComponent;
