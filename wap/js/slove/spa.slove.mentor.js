/*
 * spa.slove.mentor.js
 * mentor team module for Save Love
 * 挽回爱情 - 导师团队
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.slove.mentor = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">导师团队</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="slove-mentor-main">'
          + '<div class="slove-mentor-main-item">'
            + '<img src="images/slove/mentor-jiawei.png">'
            + '<img src="images/slove/mentor-asu.png">'
          + '</div>'
          + '<div class="slove-mentor-main-item">'
            + '<img src="images/slove/mentor-lujia.png">'
            + '<img src="images/slove/mentor-qianwu.png">'
          + '</div>'
        + '</div>'
    },
    initModule;

  initModule = function ($mentor) {
    $mentor.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
