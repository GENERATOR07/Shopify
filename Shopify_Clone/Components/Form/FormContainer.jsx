import { Formik, Form, FormikConsumer } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import FormControl from "./FormControl";
import { useContext } from "react";
import FormContext from "../../context/formContext";

export default function FormContainer() {
  const nav = useNavigate();
  const { dispatch } = useContext(FormContext);

  const initialValues = {
    name: "",
    email: "",
    add: "",
    phone: "",
    payment: "",
  };
  const onSubmit = (val, props) => {
    console.log(val);
    dispatch({ type: "userDetails", payload: val });

    nav("payment");
  };
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .max(40)
      .required("Required !"),
    email: Yup.string().email("Invalid email format ").required("Required !"),
    add: Yup.string().required("Required !"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Required !"),
    payment: Yup.string().required("Required !"),
  });
  const paymentMethods = [
    { key: "Bank", value: "bank" },
    { key: "Upi", value: "upi" },
    { key: "Cash on Delivery", value: "cod" },
  ];
  const handelCard = () => {};
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <div>
            <Form className="flex flex-col gap-4  ">
              <FormControl
                type="text"
                name="name"
                label="Full Name"
                control="input"
                className="rounded p-1"
              />
              <FormControl
                type="email"
                name="email"
                label="Email"
                control="input"
                className="rounded p-1"
              />
              <FormControl
                type="tel"
                name="phone"
                label="Mobile"
                control="input"
                className="rounded p-1"
              />
              <FormControl
                type="text"
                name="add"
                label="Address"
                control="input"
                className="rounded p-1"
              />

              <FormControl
                name="payment"
                label="Select Payment Method"
                control="radio"
                options={paymentMethods}
                className="rounded p-1 flex"
              />

              <button
                className=" bg-orange-400  text-black p-1 rounded"
                type="submit"
              >
                Place Order
              </button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}
