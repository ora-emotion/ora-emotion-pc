/*
 * spa.smarriage.mentor.js
 * Mentor module for Save Marriage
 * 挽救婚姻 - 导师团队
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.smarriage.mentor = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">导师团队</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'

        + '<div class="smarriage-mentor-main">'

          + '<div class="smarriage-mentor-main-horizontal">'
            + '<div class="smarriage-mentor-main-horizontal-item">'
              + '<img src="images/smarriage/mentor-jiawei.png">'
              + '<p>嘉伟导师</p>'
            + '</div>'
            + '<div class="smarriage-mentor-main-horizontal-item">'
              + '<img src="images/smarriage/mentor-qianwu.png">'
              + '<p>千芜导师</p>'
            + '</div>'
          + '</div>'

          + '<div class="smarriage-mentor-main-horizontal">'
            + '<div class="smarriage-mentor-main-horizontal-item">'
              + '<img src="images/smarriage/mentor-lujia.png">'
              + '<p>路加导师</p>'
            + '</div>'
            + '<div class="smarriage-mentor-main-horizontal-item">'
              + '<img src="images/smarriage/mentor-qingen.png">'
              + '<p>青恩导师</p>'
            + '</div>'
          + '</div>'

        + '</div>'
    },
    initModule;

  initModule = function ($mentor) {
    $mentor.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
