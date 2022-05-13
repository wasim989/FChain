// const { ApolloServer, gql } = require("apollo-server");
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Movie {
    movieId: String
    movieTitle: String
  }

  type Stakeholder {
    id: String
    firstName: String
    lastName: String
    address: String
    iban: String
    movieId: String
  }

  type Payment {
    id: String
    movieId: String
    amount: Int
    description: String
  }

  input NewMovieInput {
    movieId: String!
    movieTitle: String!
  }

  input NewStakeholderInput {
    id: String!
    firstName: String!
    lastName: String!
    address: String!
    iban: String!
    movieId: String!
  }

  input NewPaymentInput {
    id: String!
    movieId: String!
    amount: Int!
    description: String!
  }

  type Query {
    movies: [Movie]
    stakeholders: [Stakeholder]
    payments: [Payment]
  }

  type Mutation {
    addMovie(input: NewMovieInput!): Movie!
    addStakeholder(input: NewStakeholderInput!): Stakeholder!
    addPayment(input: NewPaymentInput!): Payment!
  }
`;

const movies = [
  {
    movieId: "2",
    movieTitle: "movie 1",
  },
  {
    movieId: "3",
    movieTitle: "movie 1",
  },
];

const stakeholders = [
  {
    id: "33",
    firstName: "john",
    lastName: "baker",
    address: "22 red",
    iban: "223",
    movieId: 32,
  },
];

const payments = [
  {
    id: "33",
    movieId: "2",
    amount: 300,
    description: "first payment",
  },
];

const resolvers = {
  Query: {
    stakeholders() {
      return stakeholders;
    },
    movies() {
      return movies;
    },
    payments() {
      return payments;
    },
  },
  Mutation: {
    addMovie(_, { input }) {
      movies.push(input);
      return movies[movies.length - 1];
    },
    addStakeholder(_, { input }) {
      //add movie object to store
      stakeholders.push(input);
      return stakeholders[stakeholders.length - 1];
    },
    addPayment(_, { input }) {
      payments.push(input);
      return payments[payments.length - 1];
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
