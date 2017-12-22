/*
 * spa.service.step.js
 * Step module for Service
 * 服务介绍 - 服务步骤内容
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.service.step = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">服务步骤内容</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="service-step-main"></div>'
    },
    initModule;

  initModule = function ($step) {
    $step.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
