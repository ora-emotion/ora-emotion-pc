/*
 * spa.clove.progress.js
 * Progress module for Customize Love
 * 定制爱情 - 服务流程
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.clove.progress = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">服务流程</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="clove-progress-main"></div>'
    },
    initModule;

  initModule = function ($progress) {
    $progress.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
