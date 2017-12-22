/*
 * spa.smarriage.reason.js
 * Reason module for Save Marriage
 * 婚姻危机出现的原因
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.smarriage.reason = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">婚姻危机出现的原因</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="smarriage-reason-main">'
          + '<div class="smarriage-reason-main-bg"></div>'
        + '<div>'
    },
    initModule;

  initModule = function ($reason) {
    $reason.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
