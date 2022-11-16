import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "",
  email: "",
  add: "",
  phone: "",
};
const onSubmit = (val) => {
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
});

export default function CheckoutForm() {
  return (
    <div className=" bg-gray-100 w-1/4   mt-7 font-serif">
      <h1 className="mb-4 text-2xl">Basic Information 6969</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="flex flex-col gap-4 ">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Full Name</label>
            <Field className="rounded p-1" type="text" id="name" name="name" />
            <ErrorMessage name="name">
              {(msg) => (
                <div className="font-thin text-sm text-red-600">{msg}</div>
              )}
            </ErrorMessage>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <Field
              className="rounded p-1"
              type="email"
              id="email"
              name="email"
            />
            <ErrorMessage name="email">
              {(msg) => (
                <div className="font-thin text-sm text-red-600">{msg}</div>
              )}
            </ErrorMessage>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Phone</label>
            <Field
              className="rounded p-2"
              type="text"
              id="phone"
              name="phone"
            />
            <ErrorMessage name="phone">
              {(msg) => (
                <div className="font-thin text-sm text-red-600">{msg}</div>
              )}
            </ErrorMessage>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="add">Address</label>
            <Field className="rounded p-2" type="text" id="add" name="add" />
            <ErrorMessage name="add">
              {(msg) => (
                <div className="font-thin text-sm text-red-600">{msg}</div>
              )}
            </ErrorMessage>
          </div>
          <button
            className=" bg-orange-400  text-black p-1 rounded"
            type="submit"
          >
            Place Order
          </button>
        </Form>
      </Formik>
    </div>
  );
}
