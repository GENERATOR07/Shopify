import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "./FormControl";
const initialValues = {
  name: "",
  email: "",
  add: "",
  phone: "",
  payment: "",
};
const onSubmit = (val, props) => {
  console.log(val);
  props.resetForm();
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
  { key: "Select Payment Method", value: "" },
  { key: "Bank", value: "bank" },
  { key: "Upi", value: "upi" },
  { key: "Cash on Delivery", value: "cod" },
];
export default function FormContainer() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form className="flex flex-col gap-4 ">
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
              type="select"
              name="payment"
              label="Payment"
              control="select"
              className="rounded p-1"
              options={paymentMethods}
            />

            <button
              className=" bg-orange-400  text-black p-1 rounded"
              type="submit"
            >
              Place Order
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
