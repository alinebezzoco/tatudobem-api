const mongoose = require("mongoose");

const dbURI =
"mongodb+srv://ttbapiadmin:fd1jmBDcOUgWHjDA@cluster0-ibqc7.mongodb.net/test?retryWrites=true&w=majority";

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

// require any models
require("../api/models/List");
