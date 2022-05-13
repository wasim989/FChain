import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

export default function NewStakeholder({ onSubmit, onCancel }) {
  const [stakeholderData, setStakeholderData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    address: "",
    iban: "",
    movieId: "",
  });

  const cancel = (e) => {
    e.preventDefault();
    onCancel();
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit(stakeholderData);
  };

  return (
    <Fragment>
      <form onSubmit={submit}>
        <label htmlFor="stakeholder-id">ID</label>
        <input
          onChange={(e) =>
            setStakeholderData({ ...stakeholderData, id: e.target.value })
          }
          value={stakeholderData.Id}
          type="text"
          name="stakeholder-id"
          id="stakeholder-id"
        />

        <label htmlFor="stakeholder-first-name">First Name</label>
        <input
          onChange={(e) =>
            setStakeholderData({
              ...stakeholderData,
              firstName: e.target.value,
            })
          }
          value={stakeholderData.firstName}
          type="text"
          name="stakeholder-first-name"
          id="stakeholder-first-name"
        ></input>

        <label htmlFor="stakeholder-last-name">Last Name</label>
        <input
          onChange={(e) =>
            setStakeholderData({
              ...stakeholderData,
              lastName: e.target.value,
            })
          }
          value={stakeholderData.lastName}
          type="text"
          name="stakeholder-last-name"
          id="stakeholder-last-name"
        ></input>

        <label htmlFor="stakeholder-address">Address</label>
        <input
          onChange={(e) =>
            setStakeholderData({
              ...stakeholderData,
              address: e.target.value,
            })
          }
          value={stakeholderData.address}
          type="text"
          name="stakeholder-address"
          id="stakeholder-address"
        ></input>

        <label htmlFor="stakeholder-iban">IBAN</label>
        <input
          onChange={(e) =>
            setStakeholderData({
              ...stakeholderData,
              iban: e.target.value,
            })
          }
          value={stakeholderData.iban}
          type="text"
          name="stakeholder-iban"
          id="stakeholder-iban"
        ></input>

        <label htmlFor="stakeholder-movie-id">Movie ID</label>
        <input
          onChange={(e) =>
            setStakeholderData({
              ...stakeholderData,
              movieId: e.target.value,
            })
          }
          value={stakeholderData.movieId}
          type="text"
          name="stakeholder-movie-id"
          id="stakeholder-movie-id"
        ></input>

        <input type="submit" value="Submit" />
      </form>
      <div className="">
        <button onClick={cancel}>cancel</button>
      </div>
    </Fragment>
  );
}
