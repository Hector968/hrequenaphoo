const db = require("../models/index");
const Questions = db.Questions;



// Retrieve all Questions from the database.
exports.findAll = async(req, res) => {
const result = await Questions.findAll();
  res.json(result);

};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Questions from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Questions
exports.findAllPublished = (req, res) => {
  
};