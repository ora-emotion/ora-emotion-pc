/*
 * spa.service.guarantee.js
 * Guarantee module for Service
 * 服务介绍 - 给您的保障
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.service.guarantee = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">给您的保障</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="service-guarantee-main">'
          + '<div class="service-guarantee-main-top">'
            + '<p>'
              + '橘子情感作为行业标杆，所有导师全部经过官方认证以及资格认证，全力保障'
              + '用户服务'
            + '</p>'
          + '</div>'
          + '<div class="service-guarantee-main-mid">'
            + '<p>'
              + '付款签订正规合同，若对服务不满意，可根据用户保障条款，申请部分或者全'
              + '额退款'
            + '</p>'
          + '</div>'
          + '<div class="service-guarantee-main-bottom">'
            + '<p>'
              + '“挽爱计划”将全程保护用户隐私，不向任何第三方泄露，服务结束用户档案将'
              + '由系统自动销毁'
            + '</p>'
          + '</div>'
        + '</div>'
    },
    initModule;

  initModule = function ($guarantee) {
    $guarantee.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
