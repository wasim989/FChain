import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

// (ID, Movie ID,
//     Amount and Description

export default function InitiatePayment({ onSubmit, onCancel }) {
  const [paymentData, setPaymentData] = useState({
    id: "",
    movieId: "",
    amount: "",
    description: "",
  });

  const cancel = (e) => {
    e.preventDefault();
    onCancel();
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit(paymentData);
  };

  return (
    <Fragment>
      <form onSubmit={submit}>
        <label htmlFor="payment-id">Payment ID</label>
        <input
          onChange={(e) =>
            setPaymentData({ ...paymentData, id: e.target.value })
          }
          value={paymentData.id}
          type="text"
          name="payment-id"
          id="payment-id"
        />
        <label htmlFor="movieId">Movie ID</label>
        <input
          onChange={(e) =>
            setPaymentData({ ...paymentData, movieId: e.target.value })
          }
          value={paymentData.movieId}
          type="text"
          name="movieId"
          id="movieId"
        ></input>

        <label htmlFor="amount">Amount</label>
        <input
          onChange={(e) =>
            setPaymentData({ ...paymentData, amount: e.target.value })
          }
          value={paymentData.amount}
          type="text"
          name="amount"
          id="amount"
        ></input>

        <label htmlFor="description">Description</label>
        <input
          onChange={(e) =>
            setPaymentData({ ...paymentData, description: e.target.value })
          }
          value={paymentData.description}
          type="text"
          name="description"
          id="description"
        ></input>
        <input type="submit" value="Submit" />
      </form>
      <div className="">
        <button onClick={cancel}>cancel</button>
      </div>
    </Fragment>
  );
}
