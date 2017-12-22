/*
 * spa.smarriage.state.js
 * State module for Save Marriage
 * 当下婚姻状态
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.smarriage.state = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">当下婚姻状态</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="smarriage-state-main">'
          + '<div class="icon-txt-group">'
      			+ '<img src="images/smarriage/state-btn01.png" />'
      			+ '<p>分居状态</p>'
      		+ '</div>'
      		+ '<div class="icon-txt-group">'
      			+ '<img src="images/smarriage/state-btn02.png" />'
      			+ '<p>准备离婚</p>'
      		+ '</div>'
      		+ '<div class="icon-txt-group">'
      			+ '<img src="images/smarriage/state-btn03.png" />'
      			+ '<p>离婚求复婚</p>'
      		+ '</div>'
      		+ '<div class="icon-txt-group">'
      			+ '<img src="images/smarriage/state-btn04.png" />'
      			+ '<p>复婚后不和谐</p>'
      		+ '</div>'
        + '<div>'
    },
    initModule;

  initModule = function ($state) {
    $state.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
