import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "../Form/FormControl";
import React, { useState } from "react";

import PaymentContainer from "../checkout/PaymentContainer";
export const FormikStepper = ({ children, paymentMethod, ...props }) => {
  const [step, setStep] = useState(0);
  const childArray = React.Children.toArray(children);
  const stepChild = childArray[step];
  const isLastStep = () => step === childArray.length - 1;
  return (
    <Formik
      {...props}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
        } else {
          paymentMethod(values.payment);
          setStep(step + 1);
        }
      }}
    >
      <Form>
        {stepChild}
        <div className="flex justify-between p-2">
          {step > 0 && (
            <button
              className=" bg-orange-400  text-black p-1 rounded"
              onClick={() => setStep(step - 1)}
            >
              prev
            </button>
          )}
          <button
            className=" bg-orange-400  text-black p-1 rounded"
            type="submit"
          >
            {isLastStep() ? "Place Order" : "Enter Payment details"}
          </button>
        </div>
      </Form>
    </Formik>
  );
};
const CheckoutStepper = () => {
  const [method, setMethod] = useState("");
  const initialValues = {
    name: "",
    email: "",
    add: "",
    phone: "",
    payment: "",
    paymentDetails: {
      card: {
        cardNumber: "",
        nameOnCard: "",
        expiry: "",
        cvv: "",
      },
      upi: "",
    },
  };
  const paymentMethods = [
    { key: "Bank", value: "bank" },
    { key: "Upi", value: "upi" },
    { key: "Cash on Delivery", value: "cod" },
  ];
  const onSubmit = (val, props) => {
    console.log(val);
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
  const paymentMethod = (paymentMethod) => {
    setMethod(paymentMethod);
  };
  return (
    <FormikStepper
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      paymentMethod={paymentMethod}
    >
      <div className="flex flex-col gap-3  ">
        <div className=" text-lg font-semibold flex justify-between items-center">
          Enter shipping Details
        </div>
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
      </div>
      <div>
        <PaymentContainer method={method} />
      </div>
    </FormikStepper>
  );
};

export default CheckoutStepper;
