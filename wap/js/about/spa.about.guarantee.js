/*
 * spa.about.guarantee.js
 * Guarantee module for ABOUT
 * 关于我们 - 四大保障
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.about.guarantee = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">四大保障</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="about-guarantee-main">'
          + '<div class="about-guarantee-main-txt-group">'
            + '<div class="item">'
              + '<p class="txt-title">无微不至</p>'
              + '<p class="para">'
                + '所有付费用户的情况，都会有专属的专业导师组，多对一进行指导，任何问'
                + '题及时得到解答，用户情感状况的每一个转折点，都在导师掌握中'
              + '</p>'
            + '</div>'
            + '<div class="item">'
              + '<p class="txt-title">专业团队</p>'
              + '<p class="para">'
                + '橘子情感所有导师，均为业内资深导师，有着平均多年以上的实战指导经验'
                + '，在两性情感学都这多年的研究经验'
              + '</p>'
            + '</div>'
            + '<div class="item">'
              + '<p class="txt-title">私人定制</p>'
              + '<p class="para">'
                + '每一位用户的情况，都会得到重视，无论是总体战略，还是每一步细节操作'
                + '，均为结合具体情况的私人定制方案，确保成功率'
              + '</p>'
            + '</div>'
            + '<div class="item">'
              + '<p class="txt-title">用户保障</p>'
              + '<p class="para">'
                + '橘子情感作为行业的标杆，对行业的发展有着一份沉甸甸的责任。以身作则'
                + '，将用户的权益放在首位，保障用户隐私以及情况解决'
              + '</p>'
            + '</div>'
          + '</div>'
        + '</div>'
    },
    initModule;

  initModule = function ($guarantee) {
    $guarantee.html(configMap.main_html);
  };
  return { initModule : initModule };
}());
