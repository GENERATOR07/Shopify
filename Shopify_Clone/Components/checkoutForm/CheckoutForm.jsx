import { useFormik } from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "",
  email: "",
  add: "",
};
const onSubmit = (val) => {
  console.log("andar waal hai", val);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required !"),
  email: Yup.string().email("Invalid email format").required("Required !"),
  add: Yup.string().required("Required !"),
});

export default function CheckoutForm() {
  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className=" bg-gray-100 w-1/4   mt-7 font-serif">
      <h1 className="mb-4 text-2xl">Basic Information</h1>
      <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Full Name</label>
          <input
            className="rounded p-1"
            type="text"
            id="name"
            name="name"
            {...getFieldProps("name")}
          />
          {touched.name && errors.name ? (
            <div className="font-thin text-sm text-red-600">{errors.name}</div>
          ) : null}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="rounded p-1"
            type="email"
            id="email"
            name="email"
            {...getFieldProps("email")}
          />
          {touched.email && errors.email ? (
            <div className="font-thin text-sm text-red-600">{errors.email}</div>
          ) : null}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="add">Address</label>
          <input
            className="rounded p-2"
            type="add"
            id="add"
            name="add"
            {...getFieldProps("add")}
          />
          {touched.add && errors.add ? (
            <div className="font-thin text-sm text-red-600">{errors.add}</div>
          ) : null}
        </div>
        <button className="bg-green-500 text-white p-1 rounded" type="submit">
          Place Order
        </button>
      </form>
    </div>
  );
}
