/*
 * spa.mentor.excellent.js
 * Excellent module for Mentor
 * 权威专家 - 专注卓越
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.mentor.excellent = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">专注卓越</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'

        + '<div class="mentor-excellent-main">'
          + '<div class="mentor-excellent-main-item">'
            + '<img src="images/mentor/excellent-pic01.png">'
            + '<div class="mentor-excellent-main-item-txt">'
              + '<p>专注</p>'
              + '<p>'
    					  + '每一个学员的计划，都会经过责任导师组严谨全面的分析，集中讨论后，'
                + '给出风险最小、效率最高的执行方案'
              + '</p>'
              + '<p>每位用户严谨对待</p>'
            + '</div>'
          + '</div>'
          + '<div class="mentor-excellent-main-item">'
            + '<img src="images/mentor/excellent-pic02.png">'
            + '<div class="mentor-excellent-main-item-txt">'
              + '<p>专业</p>'
              + '<p>'
    					  + '每一位导师、助教，均为资深全职人员，高效指导学员用户。用户出现问'
                + '题，将在第一时间得到完善解决'
              + '</p>'
              + '<p>内部理论系统研发</p>'
            + '</div>'
          + '</div>'
          + '<div class="mentor-excellent-main-item">'
            + '<img src="images/mentor/excellent-pic03.png">'
            + '<div class="mentor-excellent-main-item-txt">'
              + '<p>专心</p>'
              + '<p>'
    					  + '在多年的执教，及实践指导中，导师团队不断根据经验，从两性心理角度'
                + '出发，总结整理更多高效理论和方法'
              + '</p>'
              + '<p>高效的办公状态</p>'
            + '</div>'
          + '</div>'
        + '</div>'
    },
    initModule;

  initModule = function ($excellent) {
    $excellent.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
