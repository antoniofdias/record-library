import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    records: [Record!]!
  }

  type Record {
    id: ID!
    artist: String
    title: String
    price: Float
    cover: String
    description: String
    quantity: Int
  }
`;