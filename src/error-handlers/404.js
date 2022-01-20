'use strict';

module.exports = function (req, res, next) {

    const errorObject = {
      status: 404,
      message: 'Sorry, invalid'
    };
  
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(errorObject));
    res.end();
  };
