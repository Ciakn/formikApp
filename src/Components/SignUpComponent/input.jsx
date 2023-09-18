const Input = ({ name, label, formik, type = "text" }) => {
  return (
    <div className="formControl">
      <label htmlFor="">{label}</label>
      <input type={type} {...formik.getFieldProps(name)} name={name} />
      {formik.errors[name] && formik.touched[name] && (
        <span className="error">{formik.errors[name]}</span>
      )}
    </div>
  );
};

export default Input;
