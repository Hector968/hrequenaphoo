const db = require("../models/index");
const Options = db.Options;



// Retrieve all Options from the database.
exports.findAll = async(req, res) => {
const result = await Options.findAll();
  res.json(result);
};
