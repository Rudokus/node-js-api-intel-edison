'use strict';
var mraa = require('mraa');

exports.switchIO = function(io){
  var bool = 0;
  switch(param){
    case "enabled":
    case "true":
      bool = 1;
      break;
    
    case "disabled":
    case "false":
    default:
      bool = 0;
      break;
  }
  return bool;
}

exports.switchIOMessage = function(io){
  var message = "Disabled";
  switch(param){
    case "enabled":
    case "true":
      message = "Enabled";
      break;
    
    case "disabled":
    case "false":
    default:
      message = "Disabled";
      break;
  }
  return message;
}
