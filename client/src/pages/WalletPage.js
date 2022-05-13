import React from "react";
import { useParams } from "react-router-dom";

import { useQuery, gql } from "@apollo/client";
import { Fragment } from "react/cjs/react.production.min";

const FETCH_DATA = gql`
  query ExampleQuery {
    movies {
      movieId
      movieTitle
    }
    stakeholders {
      id
      firstName
      lastName
      address
      iban
      movieId
    }
    payments {
      id
      movieId
      amount
      description
    }
  }
`;

export default WalletPage = () => {
  const { loading, error, data } = useQuery(FETCH_DATA);
  const { id } = useParams();
  if (loading) return <p>Loading</p>;
  if (error) return <p>Error(</p>;

  return (
    <Fragment>
      <div name="balance">Balance</div>
      <div name="shareholderID">ShareholderID</div>
      <div name="fullName">Full Name</div>
      <div name="address">Address</div>
      <div name="iban">IBAN</div>
      <div name="MovieID">Movie ID</div>
      <div name="transfersList">Transfers</div>

      {data.movies.map((movie) => (
        <div className="" key={movie.movieTitle}>
          {movie.movieTitle}
        </div>
      ))}

      {data.stakeholders.map((stakeholder) => (
        <div className="" key={stakeholder.id}>
          {stakeholder.movieId.movieTitle}
        </div>
      ))}

      {data.payments.map((payment) => (
        <div className="" key={payment.id}>
          {console.log(payment)}
          {payment.description}
        </div>
      ))}
    </Fragment>
  );
};
