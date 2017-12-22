/*
 * spa.about.environment.js
 * Environment module for ABOUT
 * 关于我们 - 橘子环境
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.about.environment = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">橘子环境</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="about-environment-main">'
          + '<div class="about-environment-main-bg"></div>'
        + '</div>'
    },
    initModule;

  initModule = function ($environment) {
    $environment.html(configMap.main_html);
  };
  return { initModule : initModule };
}());
