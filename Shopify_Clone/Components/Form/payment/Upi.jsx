import FormControl from "../FormControl";

export default function Upi() {
  return (
    <FormControl
      type="text"
      name="paymentDetails.upi"
      label="Upi"
      control="input"
      className="rounded p-1"
    />
  );
}
