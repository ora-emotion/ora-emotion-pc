/*
 * spa.smistress.reason.js
 * Reason module for Separate Mistress
 * 分离小三 - 出现第三者的原因
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.smistress.reason = (function () {
  var
    configMap = {
      main_html : String()
      + '<div class="spa-module-title">'
        + '<span class="spa-module-title-line"></span>'
        + '<p class="spa-module-title-txt">出现第三者的原因</p>'
        + '<span class="spa-module-title-line"></span>'
      +  '</div>'

      + '<div class="smistress-reason-main">'
        + '<div class="smistress-reason-main-item">'
          + '<img src="images/smistress/reason-pic01.png">'
          + '<p>夫妻感情<br>进入疲惫期</p>'
        + '</div>'
        + '<div class="smistress-reason-main-item">'
          + '<img src="images/smistress/reason-pic02.png">'
          + '<p>小三<br>蓄意勾引</p>'
        + '</div>'
        + '<div class="smistress-reason-main-item">'
          + '<img src="images/smistress/reason-pic03.png">'
          + '<p>性生活<br>不和谐</p>'
        + '</div>'
        + '<div class="smistress-reason-main-item">'
          + '<img src="images/smistress/reason-pic04.png">'
          + '<p>矛盾冲突不断<br>经常吵架</p>'
        + '</div>'
      + '</div>'
    },
    initModule;

  initModule = function ($reason) {
    $reason.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
