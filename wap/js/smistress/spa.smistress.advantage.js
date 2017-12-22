/*
 * spa.smistress.advantage.js
 * Advantage module for Separate Mistress
 * 分离小三 - 橘子情感优势
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.smistress.advantage = (function () {
  var
    configMap = {
      main_html : String()
      + '<div class="spa-module-title">'
        + '<span class="spa-module-title-line"></span>'
        + '<p class="spa-module-title-txt">橘子情感优势</p>'
        + '<span class="spa-module-title-line"></span>'
      +  '</div>'

      + '<div class="smistress-advantage-main">'
        + '<div class="top">'
    			+ '<h3>'
    				+ '五大系统专家竭诚服务'
    			+ '</h3>'
    			+ '<p>'
    				+ '由国内顶尖约会专家、进化心理学专家、婚姻家庭咨询师、情感挽回师、情感维'
            + '稳师联合组成专注于两性情感解决方案提供面对面实战服务，挽回婚姻。'
    			+ '</p>'
    		+ '</div>'
    		+ '<div class="bottom">'
    			+ '<h3>'
    				+ '中国情感挽回行业服务首批从业者'
    			+ '</h3>'
    			+ '<p>'
    				+ '橘子情感是国内首家情感行业开创者，开启国内情感婚姻挽回问题，专业解决的'
            + '先河。其创始人嘉伟独创了情感危机专家和情感分析师两个新兴行业，受到业界'
            + '同行的纷纷效仿支持，被誉为中国情感挽回行业开创者和首批从业者。'
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
