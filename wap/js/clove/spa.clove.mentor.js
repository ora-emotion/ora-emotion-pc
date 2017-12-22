/*
 * spa.clove.mentor.js
 * Mentor Team module for Customize Love
 * 定制爱情 - 导师团队
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.clove.mentor = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">导师团队</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'

        + '<div class="clove-mentor-main">'
            + '<div class="item">'
                + '<img src="images/clove/mentor-pic01.png" alt="">'
                + '<div class="txt-group">'
                    + '<p class="mentor-name">嘉伟导师</p>'
                    + '<p class="mentor-des">'
                      + '橘子情感创始人，国内情感行业首批从业者，行业标准及理论化的'
                      + '制定和开创者，情感管理培训倡导者和实践者。'
                    + '</p>'
                + '</div>'
            + '</div>'
            + '<div class="item">'
                + '<img src="images/clove/mentor-pic02.png" alt="">'
                + '<div class="txt-group">'
                    + '<p class="mentor-name">杰妮导师</p>'
                    + '<p class="mentor-des">'
                      + '资深情感专家，女性心理与行为侧写师，国家心理咨询师，有清晰'
                      + '的理论知识与丰富的实战经验，过程中积累了多种男性思维与行为'
                      + '的深层理解。'
                    + '</p>'
                + '</div>'
            + '</div>'
            + '<div class="item">'
                + '<img src="images/clove/mentor-pic03.png" alt="">'
                + '<div class="txt-group">'
                    + '<p class="mentor-name">浩宇导师</p>'
                    + '<p class="mentor-des">'
                      + '国家心理咨询师，长期关系维护专家，资深情感导师，真命狙击专'
                      + '家，实战约会专家。'
                    + '</p>'
                + '</div>'
            + '</div>'
            + '<div class="item">'
                + '<img src="images/clove/mentor-pic04.png" alt="">'
                + '<div class="txt-group">'
                    + '<p class="mentor-name">千芜导师</p>'
                    + '<p class="mentor-des">'
                      + '国内第一批情感咨询导师，权威进化心理学专家。'
                    + '</p>'
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
