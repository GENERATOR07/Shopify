import FormControl from "../FormControl";
import { useState } from "react";
const cardRegex = {
  // visa: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/,
  visa: /^4[0-9]{6,}$/,
  Mastercard: /^(?:5[1-5][0-9]{14})$/,
  amex: /^(?:3[47][0-9]{13})$/,
  discov: /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/,
};
const cardTypes = Object.keys(cardRegex);
export default function Bank({}) {
  const [type, setType] = useState("");
  const handel = (e) => {
    setType("");
    cardTypes.map((c) => {
      if (e.target.value.match(cardRegex[c])) {
        setType(c);
      }
    });
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <FormControl
          name="paymentDetails.card.cardNumber"
          label="Card Number"
          control="input"
          className="rounded p-1"
          type="tel"
          inputMode="numeric"
          pattern="[0-9\s]{13,19}"
          autoComplete="cc-number"
          maxLength="19"
          placeholder="xxxx xxxx xxxx xxxx"
          onKeyUp={handel}
        />
        {type.length === 0 ? null : (
          <img className="self-center mt-4" src={`./${type}.jpg`} alt="logo" />
        )}
      </div>
      <FormControl
        type="text"
        name="paymentDetails.card.nameOnCard"
        label="Name On Card"
        control="input"
        className="rounded p-1"
      />
      <div className="flex justify-between">
        <FormControl
          type="text"
          name="paymentDetails.card.expiry"
          label="Expiry"
          control="input"
          className="rounded p-1"
          placeholder="MM / YY"
          maxLength="7"
        />
        <FormControl
          type="password"
          name="paymentDetails.card.cvv"
          label="Cvc"
          control="input"
          className="rounded p-1"
          maxLength={3}
        />
      </div>
    </>
  );
}
