const db = require("../models/index");
const Survey = db.Survey;



// Retrieve all Answers from the database
exports.create = async(req, res) => {
  console.log(req)
    let payload = {
        code: req.body.code,   
    }
    console.log("payload",payload)
    const result = await Survey.create(payload)
    if (result) {
      res.status(200);
      res.json({ message: result });
  
    } else {
      res.status(400);
      res.json({ message: "error" });
  
    }
};

exports.findAll = async(req, res) => {
const result = await Survey.findAll();
  res.json(result);
};
