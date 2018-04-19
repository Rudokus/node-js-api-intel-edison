'use strict';

var mraa = require('mraa');
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the Intel XDK console
var helper = require('../helpers/helper');
var pin = new mraa.Gpio(0);

exports.dynamicIO = function(req, res) {
  var id = parseInt(req.params.id);
  var pin = new mraa.Gpio(id);
  pin.dir(mraa.DIR_OUT);
  pin.write(helper.switchIO(req.params.switch));
  res.json({ message: helper.switchIOMessage(req.params.switch) + ' IO ' + id });
};

exports.ReadDynamicIO = function(req, res) {
  var id = parseInt(req.params.id);
  var pin = new mraa.Gpio(id);
  pin.dir(mraa.DIR_IN);
  res.json({ message: ' IO ' + id + " Reads " + pin.read() });
};
