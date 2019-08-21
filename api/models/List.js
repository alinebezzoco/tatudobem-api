"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  address: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  city: {
    type: String
  },
  uf: {
    type: String
  }
});

module.exports = mongoose.model("Lists", ListSchema);
