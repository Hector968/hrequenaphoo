exports.rooters = (routers) => {
    require('./users.routes')(routers);
    require('./questions.routes')(routers);
    require('./options.routes')(routers);
    require('./answers.routes')(routers);
    require('./surveys.routes')(routers);

  };
  