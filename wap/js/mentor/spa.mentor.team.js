/*
 * spa.mentor.team.js
 * Team module for Mentor
 * 权威专家 - 橘子情感导师团队
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.mentor.team = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">橘子情感导师团队</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'

        + '<div class="mentor-team-main">'
          + '<div class="mentor-team-main-txt">'
            + '<p class="team-para">'
              + '橘子情感的导师团队，均为资深全职导师，其中包括平均从业 4 年以上的国'
              + '家心理咨询师、专业心理侧写师、国家级婚恋咨询师、情感挽回专家、情感维'
              + '稳师等专业导师，为您的爱情保驾护航。'
            + '</p>'
            + '<p class="team-para">'
              + '每一段感情，都值得被珍惜；而每一位用户，都会在这里得到最专业、最全面'
              + '的指导服务。橘子情感的所有情感导师，均秉承着“专业、责任、奉献”的核心'
              + '价值观，将挽回爱情、捍卫幸福是为己任。因为专业，所以卓越，橘子情感的'
              + '成功率和口碑，也一直引领业界。而主导师团队开设的“全国情感导师培植计'
              + '划”，多年来也为整个行业输送了大批优秀的从业人才。'
            + '</p>'
          + '</div>'
        + '</div>'
    },
    initModule;

  initModule = function ($mentor) {
    $mentor.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
