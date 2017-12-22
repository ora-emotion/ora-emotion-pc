/*
 * spa.service.state.js
 * State module for Service
 * 服务介绍 - 当今社会情感现状
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.service.state = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">当今社会情感现状</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="service-state-main">'
        	+ '<div class="service-state-main-text">'
        		+ '<p class="p1">'
        			+ '橘子情感多年来的情感行业经验，总结了上万案例，结果表示92.6%的情感破'
              + '裂问题，实际上都能够得到解决，通过科学合理的方法，最终挽回爱情。但遗'
              + '憾的是，只有不到7%的人自己挽回成功。绝大部分人因为不了解这个行业，用'
              + '了错误的方式，错失了原有的幸福。'
        		+ '</p>'
        		+ '<p class="p2">'
        			+ '橘子情感作为行业的领军企业，一直致力于解决中国情感市场的空缺，为更多'
              + '人的爱情保驾护航。而执行了多年的“挽爱计划”，已经累计帮助了数万位用户'
              + '，解决情感问题，橘子情感用户满意度在96.7%以上。为用户挽回爱情、拯救'
              + '婚姻、提高恋爱能力以及维护长期关系不再出问题。'
        		+ '</p>'
        	+ '</div>'
        	+ '<div class="service-state-main-pic">'
        		+ '<img src="images/service/state-icon01.png" />'
        		+ '<img src="images/service/state-icon02.png" />'
        		+ '<img src="images/service/state-icon03.png" />'
        	+ '</div>'
        + '</div>'
    },
    initModule;

  initModule = function ($state) {
    $state.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
