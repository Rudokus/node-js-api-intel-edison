'use strict';
module.exports = function(app) {
  var serviceController = require('../controllers/service_controller');
  
  // Routes
  // Examples
  // /out/8/true
  // /out/8/false
  // /out/8/enable
  // /out/8/disable
  app.get('/out/:id/:switch', serviceController.dynamicIO);
  
  // /in/8/true
  // /in/8/false
  // /in/8/enable
  // /in/8/disable
  app.get('/in/:id/:switch', serviceController.ReadDynamicIO);
  
};
