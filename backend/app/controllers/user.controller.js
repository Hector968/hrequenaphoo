const db = require("../models/index");
const User = db.User;


// Create and Save a new Tutorial
exports.create = async(req, res) => {
  let payload = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone_number: req.body.phone_number,
    state: req.body.state,
    municipality: req.body.municipality,
    parish: req.body.parish,
    survey_code: req.body.survey_code,
  }
  console.log("payload",payload)
  const result = await User.create(payload)
  if (result) {
    res.status(200);
    res.json({ message: result });

  } else {
    res.status(400);
    res.json({ message: "error" });

  }
};

// Retrieve all Tutorials from the database.
exports.findAll = async(req, res) => {
  const result = await User.findAll();
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

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};