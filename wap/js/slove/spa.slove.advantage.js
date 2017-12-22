/*
 * spa.slove.advantage.js
 * advantage module for Save Love
 * 挽回爱情 - 橘子情感优势
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.slove.advantage = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">橘子情感优势</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="spa-advantage-main">'
          + '<div class="spa-advantage-main-item">'
            + '<p>'
              + '<span>中国情感挽回行业服务首批从业者</span>'
              + '<br>'
              + '<img src="images/slove/advantage-pic01.png">'
              + '<span>'
                + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                + '橘子情感是国内首家情感行业开创者，开启国内情感婚姻挽回问题，专业解'
                + '决的先河。其创始人嘉伟独创了情感危机专家和情感分析师两个新兴行业，'
                + '受到业界同行的纷纷效仿支持，被誉为中国情感挽回行业开创者和首批从业'
                + '者。'
              + '</span>'
            + '</p>'
          + '</div>'
          + '<div class="spa-advantage-main-item">'
            + '<p>'
              + '<span>七大系统专家竭诚服务</span>'
              + '<br>'
              + '<img src="images/slove/advantage-pic02.png">'
              + '<span>'
                + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                + '由国内顶尖情感挽回专家、进化心理学专家、婚姻家庭咨询师、情感挽回'
                + '师、情感维稳师、女性心理侧写师、国家二级心理咨询师联合组成专注于'
                + '两性情感解决方案提供面对面实战服务，挽回婚姻。'
              + '</span>'
            + '</p>'
          + '</div>'
        + '</div>'
    },
    initModule;

  initModule = function ($advantage) {
    $advantage.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
