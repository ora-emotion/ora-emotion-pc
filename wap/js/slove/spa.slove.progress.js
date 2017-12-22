/*
 * spa.slove.step.js
 * step module for Save Love
 * 挽回爱情 - 挽回爱情服务流程
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.slove.progress = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">挽回爱情服务流程</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="slove-progress-main"></div>'
    },
    initModule;

  initModule = function ($step) {
    $step.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
