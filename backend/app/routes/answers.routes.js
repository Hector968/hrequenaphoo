module.exports = app => {
    const answers = require("../controllers/answers.controller");
    
    // Create a new answers
    app.post("/answers", answers.create);

    // Retrieve all answers
    app.get("/answers", answers.findAll);
  
  };
  