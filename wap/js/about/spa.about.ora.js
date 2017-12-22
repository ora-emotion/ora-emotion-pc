/*
 * spa.about.ora.js
 * Ora module for ABOUT
 * 关于我们 - 橘子情感
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.about.ora = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">橘子情感</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'

        + '<div class="about-ora-main">'
          + '<p class="para">'
            + '橘子情感，自创办以来，一直引领着整个行业的进步和发展。为了让广大用'
            + '户，学会更好的爱与被爱的能力，让用户再爱情中更加有尊严，更加从容，'
            + '更加自由。橘子情感汇聚了国内知名两性情感咨询师、婚恋家庭咨询师、资'
            + '深情感挽回师、心理学专家等，用最专业的师资团队，打造全国最专业的情'
            + '感咨询培训机构。'
          + '</p>'
          + '<p class="para">'
            + '橘子情感的创办初衷，是针对解决广大民众的情感挽回、婚姻修复等社会问'
            + '题，但逐渐发现，中国在情感教育方面是完全缺失的。现在，我们要解决的'
            + '，不仅仅是简单的情感问题，更是整个时代的情感教育缺失。'
          + '</p>'
        + '</div>'
    },
    initModule;

  initModule = function ($ora) {
    $ora.html(configMap.main_html);
  };
  return { initModule : initModule };
}());
