/*
 * spa.shell.preface.js
 * Preface module for Shell
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.shell.preface = (function () {
  var
    configMap = {
      preface_html : String()
        + '<div class="spa-preface-img">'
          + '<img src="images/index/preface.png">'
        + '</div>'
    },
    stateMap = { $preface : null },
    initModule;

  initModule = function ($preface) {
    stateMap.$preface = $preface;
    $preface.html(configMap.preface_html);
  };

  return { initModule : initModule };
}());
