/*
 * spa.smarriage.advantage.js
 * Advantage module for Save Marriage
 * 橘子情感优势
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.smarriage.advantage = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">橘子情感优势</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'

        + '<div class="smarriage-advantage-main">'
          + '<div class="smarriage-advantage-main-item">'
            + '<img src="images/smarriage/advantage-pic01.png">'
            + '<p>'
              + '中国情感挽回行业权威领导者，八年从业经验，已经累计为数万人解决情感'
              + '问题，针对挽回婚姻、挽回爱情、分离小三、长期关系维护等领域具有权威'
              + '地位。'
            + '</p>'
          + '</div>'
          + '<div class="smarriage-advantage-main-item">'
            + '<p>'
              + '由国内顶尖情感挽回师、情感维稳师、心理咨询师、心理侧写师、进化心理学'
              + '专家、两性心理学专家联合组成强大的理论供给团队，为两性情感解决方案提'
              + '供理论基础。'
            + '</p>'
            + '<img src="images/smarriage/advantage-pic02.png">'
          + '</div>'
        + '</div>'
    },
    initModule;

  initModule = function ($advantage) {
    $advantage.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
