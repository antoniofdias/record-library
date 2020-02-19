import mongoose from "mongoose";

import { database } from "./credentials";

const { user, password } = database;
const uri = `mongodb+srv://${user}:${password}@cluster0-3wrnb.mongodb.net/record-library?retryWrites=true&w=majority`;

module.exports = {
    connect() {
        mongoose.connect(
            uri,
            { useNewUrlParser: true,
              useUnifiedTopology: true },
            err => {
                if (err) {
                    console.error(
                        `⛔  Error connecting to database! ${err}`
                    );
                } else {
                    console.log("💾  Successfully connected to database.");
                }
            }
        );
    }
}