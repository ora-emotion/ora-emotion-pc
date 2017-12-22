/*
 * spa.slove.service.js
 * kind module for Save Love
 * 挽回爱情 - 能够提供的挽回爱情服务
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.slove.service = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">能够提供的挽回爱情服务</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="slove-service-main"></div>'
    },
    initModule;

  initModule = function ($service) {
    $service.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
