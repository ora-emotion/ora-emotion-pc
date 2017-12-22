/*
 * spa.smistress.kind.js
 * Kind module for Separate Mistress
 * 分离小三 - 擅长分离的小三类型
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.smistress.kind = (function () {
  var
    configMap = {
      main_html : String()
      + '<div class="spa-module-title">'
        + '<span class="spa-module-title-line"></span>'
        + '<p class="spa-module-title-txt">擅长分离的小三类型</p>'
        + '<span class="spa-module-title-line"></span>'
      +  '</div>'

      + '<div class="smistress-kind-main">'
        + '<div class="smistress-kind-main-item">'
          + '<img src="images/smistress/kind-icon01.png">'
          + '<div class="smistress-kind-main-item-txt">'
            + '<p>感情型</p>'
            + '<p>'
              + '在婚内发现真爱，第三者只作为灵魂伴侣，并不要求名分'
            + '</p>'
          + '</div>'
        + '</div>'
        + '<div class="smistress-kind-main-item">'
          + '<img src="images/smistress/kind-icon02.png">'
          + '<div class="smistress-kind-main-item-txt">'
            + '<p>金钱型</p>'
            + '<p>'
              + '第三者只是图钱才跟对方在一起，可能会争夺财产，也可能是包养关系，对婚'
              + '姻威胁比较小'
            + '</p>'
          + '</div>'
        + '</div>'
        + '<div class="smistress-kind-main-item">'
          + '<img src="images/smistress/kind-icon03.png">'
          + '<div class="smistress-kind-main-item-txt">'
            + '<p>特殊身份型</p>'
            + '<p>'
              + '与对方的闺蜜或妹妹等产生感情，或者与前任纠缠不清，前任成为第三者'
            + '</p>'
          + '</div>'
        + '</div>'
        + '<div class="smistress-kind-main-item">'
          + '<img src="images/smistress/kind-icon04.png">'
          + '<div class="smistress-kind-main-item-txt">'
            + '<p>办公室恋情型</p>'
            + '<p>'
              + '与上司或直系下属在工作中接触频繁，日久生情，这类第三者比较难缠'
            + '</p>'
          + '</div>'
        + '</div>'
      + '</div>'
    },
    initModule;

  initModule = function ($kind) {
    $kind.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
