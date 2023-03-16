const formReducer = (formData, action) => {
  console.log("data from formreducer", formData);
  switch (action.type) {
    case "userDetails":
      return { ...formData, userDetails: { ...action.payload } };
    case "PaymentDetails":
      return { ...formData, paymentDetails: { ...action.payload } };
    default:
      return formData;
  }
};
export default formReducer;
