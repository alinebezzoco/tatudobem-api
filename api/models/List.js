"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: null
  },
  address: {
    type: String,
    default: null
  },
  phone: {
    type: String,
    default: null
  },
  email: {
    type: String,
    default: null
  },
  city: {
    type: String,
    default: null
  },
  uf: {
    type: String,
    default: null
  }
});

module.exports = mongoose.model("Lists", ListSchema);
