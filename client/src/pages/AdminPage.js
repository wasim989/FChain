import React, { useState } from "react";

import { useQuery, useMutation, gql } from "@apollo/client";
import { Fragment } from "react/cjs/react.production.min";

import NewMovie from "../components/NewMovie";
import NewStakeholder from "../components/NewStakeholder";
import InitiatePayment from "../components/InitiatePayment";

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

const ADD_MOVIE = gql`
  mutation AddMovie($newMovie: NewMovieInput!) {
    addMovie(input: $newMovie) {
      movieId
      movieTitle
    }
  }
`;

const ADD_STAKEHOLDER = gql`
  mutation AddStakeholder($newStakeholder: NewStakeholderInput!) {
    addStakeholder(input: $newStakeholder) {
      id
      firstName
      lastName
      address
      iban
      movieId
    }
  }
`;

const ADD_PAYMENT = gql`
  mutation AddPayment($newPayment: NewPaymentInput!) {
    addPayment(input: $newPayment) {
      id
      movieId
      amount
      description
    }
  }
`;

export default AdminPage = () => {
  const handleNewMovieSubmit = (fieldInput) => {
    createMovie({
      variables: {
        newMovie: fieldInput,
      },
    });
  };

  const handleNewStakeholderSubmit = (fieldInput) => {
    createStakeholder({
      variables: {
        newStakeholder: fieldInput,
      },
    });
  };

  const handleInitiatePaymentSubmit = (fieldInput) => {
    fieldInput.amount = parseInt(fieldInput.amount);
    createPayment({
      variables: {
        newPayment: fieldInput,
      },
    });
  };

  const [movieModal, setMovieModal] = useState(false);
  const [stakeholderModal, setStakeholderModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [createMovie, newMovie] = useMutation(ADD_MOVIE);
  const [createStakeholder, newStakeholder] = useMutation(ADD_STAKEHOLDER);
  const [createPayment, newPayment] = useMutation(ADD_PAYMENT);

  const { loading, error, data } = useQuery(FETCH_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (movieModal) {
    return (
      <NewMovie
        onSubmit={handleNewMovieSubmit}
        onCancel={() => setMovieModal(false)}
      />
    );
  }
  if (stakeholderModal) {
    return (
      <NewStakeholder
        onSubmit={handleNewStakeholderSubmit}
        onCancel={() => setStakeholderModal(false)}
      />
    );
  }
  if (paymentModal) {
    return (
      <InitiatePayment
        onSubmit={handleInitiatePaymentSubmit}
        onCancel={() => setPaymentModal(false)}
      />
    );
  }
  return (
    <Fragment>
      {data.movies.map((movie) => (
        <div className="" key={movie.movieTitle}>
          {movie.movieTitle}
        </div>
      ))}

      {data.stakeholders.map((stakeholder) => (
        <div className="" key={stakeholder.id}>
          {stakeholder.firstName}
        </div>
      ))}

      {data.payments.map((payment) => (
        <div className="" key={payment.id}>
          {console.log(payment)}
          {payment.description}
        </div>
      ))}

      <div className="">
        <button onClick={() => setMovieModal(true)}>new movie</button>
      </div>
      <div className="">
        <button onClick={() => setStakeholderModal(true)}>
          new stakeholder
        </button>
      </div>
      <div className="">
        <button onClick={() => setPaymentModal(true)}>new payment</button>
      </div>
    </Fragment>
  );
};
