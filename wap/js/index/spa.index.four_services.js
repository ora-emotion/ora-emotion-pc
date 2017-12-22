/*
 * spa.index.four_services.js
 * Four Services module for Index
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.index.four_services = (function () {
  var
    configMap = {
      four_services_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">四项服务</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="index-four-services-main">'
          + '<div class="index-four-services-main-item">'
            + '<div class="index-four-services-main-item-right">'
              + '<h2>无微不至</h2>'
              + '<h3>meticulously</h3>'
              + '<p>'
                + '所有付费用户的情况，都会有专属的专业导师组，多对一进行指导，任'
                + '何问题及时得到解答，用户情感状况的每一个转点，都在导师掌握中。'
              + '</p>'
            + '</div>'
          + '</div>'
          + '<div class="index-four-services-main-item">'
            + '<div class="index-four-services-main-item-left">'
              + '<h2>专业团队</h2>'
              + '<h3>major team</h3>'
              + '<p>'
                + '橘子情感所有导师，均为业内资深导师，有着平均多年以上的实战指导经'
                + '验，在两性情感学都这多年的研究经验。'
              + '</p>'
            + '</div>'
          + '</div>'
          + '<div class="index-four-services-main-item">'
            + '<div class="index-four-services-main-item-right">'
              + '<h2>私人定制</h2>'
              + '<h3>PERSONAL TAILOR</h3>'
              + '<p>'
                + '每一位用户的情况，都会得到重视，无论是总体战略，还是每一步细节操'
                + '作，均为结合具体情况的私人定制方案，确保成功率。'
              + '</p>'
            + '</div>'
          + '</div>'
          + '<div class="index-four-services-main-item">'
            + '<div class="index-four-services-main-item-left">'
              + '<h2>用户保障</h2>'
              + '<h3>User protection</h3>'
              + '<p>'
                + '橘子情感作为行业的标杆，对行业的发展有着一份沉甸甸的责任。以身作'
                + '则，将用户的权益放在首位，保障用户隐私以及情况解决。'
              + '</p>'
            + '</div>'
          + '</div>'
        + '</div>'
    },
    initModule;

  initModule = function ($four_services) {
    $four_services.html(configMap.four_services_html);
  };

  return { initModule : initModule };
}());
