/*
 * spa.clove.instruction.js
 * Instruction module for Customize Love
 * 定制爱情 - 用户须知
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.clove.instruction = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">用户须知</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'

        + '<div class="clove-instruction-main">'
            + '<div class="txt-para">'
                + '<i class="icon"></i>'
                + '<p>'
                  + '你必须是一名能够独立做决定、有一定经济能力的正常成年人，无任何'
                  + '精神病史。'
                + '</p>'
            + '</div>'
            + '<div class="txt-para">'
                + '<i class="icon"></i>'
                + '<p>我们的服务符合社会道德和底线，所以你必须是以婚姻或爱情为出发点。</p>'
            + '</div>'
            + '<div class="txt-para">'
                + '<i class="icon"></i>'
                + '<p>'
                  + '我们的专业服务足够你达成任何的爱情目标，所以请听从指挥，进退有'
                  + '度，举止得体。'
                + '</p>'
            + '</div>'
            + '<div class="txt-para">'
                + '<i class="icon"></i>'
                + '<p>任何动机不纯者，立即终止服务。</p>'
            + '</div>'
        + '</div>'
    },
    initModule;

  initModule = function ($instruction) {
    $instruction.html(configMap.main_html);
  };
return { initModule : initModule };
}());
