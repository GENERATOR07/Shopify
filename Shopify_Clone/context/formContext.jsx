import { createContext, useReducer } from "react";
import formReducer from "../reducers/FormReducer";
const FormContext = createContext();
const Data = {
  userDetails: {},
  paymentDetails: {},
};
export const FormContextProvider = (props) => {
  const [formData, dispatch] = useReducer(formReducer, Data);

  return (
    <FormContext.Provider value={{ formData, dispatch }}>
      {props.children}
    </FormContext.Provider>
  );
};
export default FormContext;
