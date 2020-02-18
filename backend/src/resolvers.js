import Record from "./models/Record"

export const resolvers = {
  Query: {
    records: () => Record.find()
  }
};
