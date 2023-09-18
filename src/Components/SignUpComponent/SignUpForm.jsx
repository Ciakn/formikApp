import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import axios from "axios";
import Input from "./input";
import RadioInput from "../RadioInput";
import SelectComponent from "./SelectComponent";
import CheckBoxComp from "./CheckBoxComp";
const RadioOptions = [
  { value: "0", label: "Men" },
  { value: "1", label: "Women" },
];
const CheckBoxOption = [
  { value: "React.js", label: "React.js" },
  { value: "Vue.jsx", label: "Vue.js" },
];
const SelectOption = [
  { value: "", label: "Select Nationality" },
  { value: "IR", label: "Iran" },
  { value: "USA", label: "USA" },
  { value: "Ger", label: "Germany" },
];
const initialValues = {
  name: "",
  email: "",
  password: "",
  PasswordComformation: "",
  phoneNumber: "",
  gender: "",
  nationality: "",
  intrests: [],
  terms: false,
};
const SignUpForm = () => {
  const [formValue, setFormValue] = useState(null);
  const onSubmit = (values) => {
    console.log(values);
  };
  const validationSchema = Yup.object({
    name: Yup.string("").required("Name is Required"),
    email: Yup.string("")
      .email("Enter a Valid Email")
      .required("Email is Required"),
    password: Yup.string("")
      .required("Password is Required")
      .min(6, `Your Password is Too Short`),
    phoneNumber: Yup.string("")
      .required("PhoneNumber is Required")
      .matches(/^[0-9]{11}/, "Phone Number is too short"),
    PasswordComformation: Yup.string("")
      .required("Password is Required")
      .oneOf([Yup.ref("password"), null], "passwords must be matched"),
    gender: Yup.string("").required("Choose your gender"),
    nationality: Yup.string("").required("choose a  nationality"),
    intrests: Yup.array().min(1).required("choose your programming language"),
    terms: Yup.boolean()
      .required("The terms and conditions must be accepted.")
      .oneOf([true], "The terms and conditions must be accepted."),
  });

  const formik = useFormik({
    initialValues: formValue || initialValues,
    onSubmit,
    validationSchema,
    enableReinitialize: true,
    validateOnMount: true,
  });
  console.log(formik.isValid);
  useEffect(() => {
    axios
      .get("http://localhost:3001/users/1")
      .then((response) => setFormValue(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {/* <div className="formControl">
          <label htmlFor="">Name</label>
          <input type="text" {...formik.getFieldProps("name")} name="name" />
          {formik.errors.name && formik.touched.name && (
            <span className="error">{formik.errors.name}</span>
          )}
        </div> */}
        <Input formik={formik} name="name" label="Name" />
        <Input formik={formik} name="email" label="Email" type="email" />
        <Input
          formik={formik}
          name="password"
          label="Password"
          type="password"
        />
        <Input
          formik={formik}
          name="PasswordComformation"
          label="Enter your password again"
          type="password"
        />
        <Input formik={formik} name="phoneNumber" label="Phone Number" />

        <div className="RadioControl">
          <RadioInput
            formik={formik}
            name="gender"
            RadioOptions={RadioOptions}
          />
        </div>
        <SelectComponent
          formik={formik}
          name="nationality"
          SelectOption={SelectOption}
        />
        <CheckBoxComp
          formik={formik}
          name="intrests"
          CheckBoxOption={CheckBoxOption}
        />
        <div>
          <input
            type="checkbox"
            id="terms"
            name="terms"
            value={true}
            onChange={formik.handleChange}
            checked={formik.values.terms}
          />
          <label htmlFor="terms">Do you Acssept the coockie</label>
          {formik.errors.terms && formik.touched.terms && (
            <span className="error">{formik.errors.terms}</span>
          )}
        </div>

        <button
          className={formik.isValid ? "btn" : null}
          type="submit"
          disabled={!formik.isValid}
        >
          Subimt
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;

{
  /* <div className="formControl">
<label htmlFor="">Email</label>
<input type="text" {...formik.getFieldProps("email")} name="email" />
{formik.errors.email && formik.touched.email && (
  <span className="error">{formik.errors.email}</span>
)}
</div>
<div className="formControl">
<label htmlFor="">Password</label>
<input
  type="password"
  {...formik.getFieldProps("password")}
  name="password"
/>
{formik.errors.password && formik.touched.password && (
  <span className="error">{formik.errors.password}</span>
)}
</div>
<div className="formControl">
<label htmlFor="">Password Comfiremation</label>
<input
  type="password"
  {...formik.getFieldProps("PasswordComformation")}
  name="PasswordComformation"
/>
{formik.errors.PasswordComformation &&
  formik.touched.PasswordComformation && (
    <span className="error">
      {formik.errors.PasswordComformation}
    </span>
  )}
</div>
<div className="formControl">
<label htmlFor="">Phone Number</label>
<input
  type="text"
  {...formik.getFieldProps("phoneNumber")}
  name="phoneNumber"
/>
{formik.errors.phoneNumber && formik.touched.phoneNumber && (
  <span className="error">{formik.errors.phoneNumber}</span>
)}
</div> */
}
