import FormControl from "../FormControl";

export default function Bank() {
  return (
    <>
      <FormControl
        name="paymentDetails.cardNumber"
        label="Card Number"
        control="input"
        className="rounded p-1"
        type="tel"
        inputMode="numeric"
        pattern="[0-9\s]{13,19}"
        autoComplete="cc-number"
        maxLength="19"
        placeholder="xxxx xxxx xxxx xxxx"
      />
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
          label="CVV"
          control="input"
          className="rounded p-1"
          maxLength={3}
        />
      </div>
    </>
  );
}
