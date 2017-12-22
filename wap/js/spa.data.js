/*
 * spa.data.js
 * Data module for SPA
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */


spa.data = (function () {
  var initModule = function (msg) {
    spa.data.new.initModule(msg);
  };

  return { initModule : initModule };
}());
