module.exports = app => {
    const options = require("../controllers/options.controller");
    
    // Retrieve all question
    app.get("/options", options.findAll);
  
  };
  