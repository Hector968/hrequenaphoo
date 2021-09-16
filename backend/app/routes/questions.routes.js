module.exports = app => {
    const question = require("../controllers/questions.controller");
    
    // Retrieve all question
    app.get("/questions", question.findAll);
  
  };
  