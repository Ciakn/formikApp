import React from "react";

const RadioInput = ({ formik, RadioOptions , name }) => {
  return (
    <div >
      {RadioOptions.map((item) => (
        <div key={item.value}>
          <label htmlFor="0">{item.label}</label>
          <input
            id={item.value}
            type="radio"
            value={item.value}
            name={name}
            onChange={formik.handleChange}
            checked={formik.values.gender === item.value}
          />
          {formik.errors[name] && formik.touched[name] && (<>{formik.error[name]}</>)}
        </div>
      ))}
    </div>
  );
};

export default RadioInput;
