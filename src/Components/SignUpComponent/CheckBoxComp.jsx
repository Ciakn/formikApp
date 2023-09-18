import React from "react";
const CheckBoxComp = ({ name, formik, CheckBoxOption }) => {
  return (
    <div>
      {CheckBoxOption.map(
        (item) => (
          console.log(item.value),
          (
            <div>
              <input
                type="checkbox"
                id={item.value}
                name={name}
                value={item.value}
                onChange={formik.handleChange}
                checked={formik.values[name].includes(item.value)}
              />
              <label htmlFor={item.value}>{item.label}</label>
              {formik.errors[name] && formik.touched[name] && (
        <span className="error">{formik.errors[name]}</span>
      )}
            </div>
          )
        )
      )}
    </div>
  );
};

export default CheckBoxComp;
