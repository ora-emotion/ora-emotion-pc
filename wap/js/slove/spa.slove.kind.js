/*
 * spa.slove.kind.js
 * kind module for Save Love
 * 挽回爱情 - 擅长挽回的爱情类型
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.slove.kind = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">擅长挽回的爱情类型</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="slove-kind-main">'
          + '<iframe '
            + 'src="iframes/3Dbanner/index.html" '
            + 'frameborder="0" '
            + 'scrolling="no" '
            + 'style="background: transparent; border: 0; width: 100%; height: 5.4rem;">'
          + '</iframe>'
        + '<div>'
    },
    initModule;

  initModule = function ($kind) {
    $kind.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
