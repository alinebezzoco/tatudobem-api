'use strict';

const List = require("../models/List");

exports.listAll = (req, res) => {
  List.find({}, (err, list) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(list);
  });
};

exports.createNewItem = (req, res) => {
  let newItem = new List(req.body);
  newItem.save((err, list) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(list);
  });
};


exports.readItem = (req, res) => {
  List.findById(req.params.itemId, (err, list) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(list);
  });
};

exports.updateItem = (req, res) => {
  List.findOneAndUpdate(
    { _id: req.params.itemId },
    req.body,
    { new: true },
    (err, task) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(task);
    }
  );
};

exports.deleteItem = (req, res) => {
  List.remove({ _id: req.params.itemId }, (err, list) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Item deletado com sucesso" });
  });
};
