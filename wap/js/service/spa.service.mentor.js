/*
 * spa.service.mentor.js
 * Mentor module for Service
 * 服务介绍 - 橘子情感导师团队
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.service.mentor = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">橘子情感导师团队</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="service-mentor-main">'
          + '<div class="left">'
            + '<img src="images/service/mentor-bg.png" />'
          + '</div>'
          + '<div class="right">'
            + '<div class="top">'
              + '<p>'
                + '橘子情感的导师团队，均为资深全职导师，其中包括平均从业多年以上的国'
                + '家心理咨询师、专业心理侧写师、国家级婚恋咨询师、情感挽回专家、情感'
                + '维稳师等专业导师，为您的爱情保驾护航。'
              + '</p>'
            + '</div>'
            + '<div class="bottom">'
              + '<p>'
                + '橘子情感始终坚持“以人为本”的原则，荟萃国内约会专家、国内权威情感挽'
                + '回专家、进化心理学专家、婚姻家庭咨询师等业界精英.融合国内国外两性情'
                + '感理论，依据亚洲思维模式和近两万实际案例，针对现今中国社会普遍存在'
                + '的情感教育缺失问题，总结和创立出行业内最适合国人情感的一整套理论体'
                + '系'
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
