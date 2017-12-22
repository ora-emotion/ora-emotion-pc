/*
 * spa.about.associated.js
 * Associated module for ABOUT
 * 关于我们 - 合作媒体
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.about.associated = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">合作保障</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="about-associated-main">'
          + '<div class="about-associated-main-bg"></div>'
        + '</div>'
    },
    initModule;

  initModule = function ($associated) {
    $associated.html(configMap.main_html);
  };
  return { initModule : initModule };
}());
