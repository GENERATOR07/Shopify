import { Plus } from "phosphor-react";
import FormContainer from "../form/FormContainer";
import CheckoutStepper from "../stepper/CheckoutStepper";

export default function CheckoutForm() {
  return (
    <div className=" bg-gray-100 w-1/3   p-2 font-mono">
      <div>
        {/* <FormContainer /> */}
        <CheckoutStepper />
      </div>
    </div>
  );
}
