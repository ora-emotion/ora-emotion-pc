/*
 * spa.index.service_guarantee.js
 * Service Guarantee module for Index
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.index.service_guarantee = (function () {
  var
    configMap = {
      service_guarantee_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">服务保障</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="index-service-guarantee-main">'
          + '<div class="index-service-guarantee-main-item">'
            + '<img src="images/index/service-guarantee-pic01.png">'
            + '<div class="txt">'
              + '<p>'
            	  + '一、服务结束后，用户档案将被系统自动销毁。决不向第三方泄露用户资'
                + '料，保障隐私权益。整个服务过程，也不会对用户的生活造成任何困扰。'
              + '</p>'
            + '</div>'
          + '</div>'
          + '<div class="index-service-guarantee-main-item">'
            + '<img src="images/index/service-guarantee-pic02.png">'
            + '<div class="txt">'
              + '<p>'
            	  + '二、签订正式合同（包含保密协议），具有绝对的法律效力，保障用户权'
                + '益，用户的经济权益，以及情感状况，都会由导师团队全权负责。'
              + '</p>'
            + '</div>'
          + '</div>'
        + '</div>'
    },
    stateMap = { $service_guarantee : null },
    initModule;

  initModule = function ($service_guarantee) {
    stateMap.$service_guarantee = $service_guarantee;
    $service_guarantee.html(configMap.service_guarantee_html);
  };

  return { initModule : initModule };
}());
