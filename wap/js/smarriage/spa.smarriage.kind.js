/*
 * spa.smarriage.kind.js
 * Kind module for Save Marriage
 * 擅长挽回的婚姻类型
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.smarriage.kind = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">擅长挽回的婚姻类型</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'

        + '<div class="smarriage-kind-main">'
          + '<div class="smarriage-kind-main-top">'
            + '<div class="smarriage-kind-main-top-item">'
              + '<p>第三者插足</p>'
            + '</div>'
            + '<div class="smarriage-kind-main-top-item">'
              + '<p>两地分居信任缺失</p>'
            + '</div>'
            + '<div class="smarriage-kind-main-top-item">'
              + '<p>婆媳关系子女教育隔代矛盾</p>'
            + '</div>'
          + '</div>'
          + '<div class="smarriage-kind-main-bottom">'
            + '<div class="smarriage-kind-main-bottom-item">'
              + '<p>性格不合无法沟通</p>'
            + '</div>'
            + '<div class="smarriage-kind-main-bottom-item">'
              + '<p>家暴<br>冷暴力</p>'
            + '</div>'
          + '</div>'
        + '</div>'
    },
    initModule;

  initModule = function ($kind) {
    $kind.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
