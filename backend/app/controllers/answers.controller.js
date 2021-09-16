const db = require("../models/index");
const Answers = db.Answers;



// Retrieve all Answers from the database
exports.create = async(req, res) => {
  let error;
  console.log(req)
    
    req.body.payload.map((answer)=>{
      let payload = {
        scale: answer.scale,
        user_id: answer.user_id,
        question_id: answer.question_id,
        survey_id: answer.survey_id         
      }
      console.log(payload)
      Answers.create(payload)
      .then((result)=>{
      }).catch(e => {
        console.log(e);
        error = e
      });
    })
    if (!error) {
      res.status(201);
      res.json({ message: "created" });
  
    } else {
      res.status(400);
      res.json({ message: "error" });
  
    }
};

exports.findAll = async(req, res) => {
const result = await Answers.findAll();
  res.status(200);
  res.json(result);
};
