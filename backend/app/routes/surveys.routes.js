module.exports = app => {
    const surveys = require("../controllers/surveys.controller");
    
    // Create a new answers
    app.post("/surveys", surveys.create);

    // Retrieve all answers
    app.get("/surveys", surveys.findAll);
  
  };
  