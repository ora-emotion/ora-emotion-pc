/*
 * spa.about.history.js
 * History module for ABOUT
 * 关于我们 - 橘子情感发展历程
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.about.history = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">橘子情感发展历程</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'

        + '<div class="about-history-main">'
          + '<div class="about-history-main-content">'
            + '<div class="left">'
              + '<div class="item">'
                + '<div class="txt-group">'
                  + '<p class="year text-right">2013年<span class="icon"></span></p>'
                  + '<p class="para">'
                    + '设立行业标准，开设了全国情感导师培植计划，统一规范了从业资格，'
                    + '提高整体行业水平。被众多主流媒争相报道。'
                  + '</p>'
                + '</div>'
                + '<img src="images/about/history-left-pic01.png" alt="">'
              + '</div>'
              + '<div class="item">'
                + '<div class="txt-group">'
                  + '<p class="year text-right">2015年<span class="icon"></span></p>'
                  + '<p class="para">'
                    + '荣获山东省婚恋咨询师协会先进单位。橘子情感开创的情感挽回师、婚'
                    + '恋维稳师等职业，为行业输送了大量人才，并且在开设分公司，填补市'
                    + '场需求。'
                  + '</p>'
                + '</div>'
                + '<img src="images/about/history-left-pic02.png" alt="">'
              + '</div>'
              + '<div class="item">'
                + '<div class="txt-group">'
                  + '<p class="year text-right">2017年<span class="icon"></span></p>'
                  + '<p class="para">'
                    + '荣获十大杰出诚信企业，橘子情感一直以做有良心、有社会责任感的'
                    + '阳光企业为方向，客户好评率高达98.5%，引领着整个行业的发展方'
                    + '向。'
                  + '</p>'
                + '</div>'
                + '<img src="images/about/history-left-pic03.png" alt="">'
              + '</div>'
            + '</div>'
            + '<div class="mid bg"></div>'
            + '<div class="right">'
              + '<div class="item">'
                + '<div class="txt-group">'
                  + '<p class="year"><span class="icon"></span>2012年</p>'
                  + '<p class="para">'
                    + '嘉伟导师携手业内众多顶尖导师，在香港、澳门、台湾等地，开设巡'
                    + '讲培训班，将行业推至更高的高度。深化社会使命感，收到各界认可。'
                  + '</p>'
                + '</div>'
                + '<img src="images/about/history-right-pic01.png" alt="">'
              + '</div>'
              + '<div class="item">'
                + '<div class="txt-group">'
                  + '<p class="year"><span class="icon"></span>2014年</p>'
                  + '<p class="para">'
                    + '获得山东省心理讲课教育咨询中心授权单位资格。在解决情感心理健康'
                    + '方面，橘子情感不断不遗余力，实现自己的社会价值。'
                  + '</p>'
                + '</div>'
                + '<img src="images/about/history-right-pic02.png" alt="">'
              + '</div>'
              + '<div class="item">'
                + '<div class="txt-group">'
                  + '<p class="year"><span class="icon"></span>2016年</p>'
                  + '<p class="para">'
                    + '获得家庭婚恋服务协会理事单位资格。以信仰幸福、学会感恩的态度，'
                    + '帮助数万名用户，重获幸福。并且受中美澳联合国际医学研究院邀请，'
                    + '开设《幸福讲座》。'
                  + '</p>'
                + '</div>'
                + '<img src="images/about/history-right-pic03.png" alt="">'
              + '</div>'
            + '</div>'
          + '</div>'
        + '</div>'
    },
    initModule;

  initModule = function ($history) {
    $history.html(configMap.main_html);
  };
  return { initModule : initModule };
}());
