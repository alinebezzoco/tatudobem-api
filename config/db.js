const mongoose = require("mongoose");

const dbURI =
"mongodb://ttbadminuser_666:GXidSLb@Dr4uyJQ@ds135207.mlab.com:35207/heroku_4vh0j4nd";

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

require("../api/models/List");
