/*
 * spa.smistress.progress.js
 * Progress module for Separate Mistress
 * 分离小三 - 分离小三服务流程
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.smistress.progress = (function () {
  var
    configMap = {
      main_html : String()
      + '<div class="spa-module-title">'
        + '<span class="spa-module-title-line"></span>'
        + '<p class="spa-module-title-txt">分离小三服务流程</p>'
        + '<span class="spa-module-title-line"></span>'
      +  '</div>'
      + '<div class="smistress-progress-main"></div>'
    },
    initModule;

  initModule = function ($progress) {
    $progress.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
