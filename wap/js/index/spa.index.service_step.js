/*
 * spa.index.service_step.js
 * Service Step module for Index
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.index.service_step = (function () {
  var
    configMap = {
      service_step_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">服务步骤</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="index-service-step-main">'
          + '<div class="index-service-step-main-column">'
            + '<div class="index-service-step-main-column-row">'
              + '<div class="index-service-step-main-column-row-icon"></div>'
              + '<div class="index-service-step-main-column-row-txt">'
                + '<p class="ch">1.情感咨询师在线解答</p>'
                + '<p class="en">Emotional consultant online answer</p>'
              + '</div>'
            + '</div>'
            + '<div class="index-service-step-main-column-row">'
              + '<div class="index-service-step-main-column-row-icon"></div>'
              + '<div class="index-service-step-main-column-row-txt">'
                + '<p class="ch">2.资深专家一对一分析</p>'
                + '<p class="en">One on one expert analysis</p>'
              + '</div>'
            + '</div>'
            + '<div class="index-service-step-main-column-row">'
              + '<div class="index-service-step-main-column-row-icon"></div>'
              + '<div class="index-service-step-main-column-row-txt">'
                + '<p class="ch">3.签约定制课程</p>'
                + '<p class="en">Sign up customized courses</p>'
              + '</div>'
            + '</div>'
          + '</div>'
          + '<div class="index-service-step-main-column">'
            + '<div class="index-service-step-main-column-row">'
              + '<div class="index-service-step-main-column-row-icon"></div>'
              + '<div class="index-service-step-main-column-row-txt">'
                + '<p class="ch">4.制定解决方案</p>'
                + '<p class="en">Making solutions</p>'
              + '</div>'
            + '</div>'
            + '<div class="index-service-step-main-column-row">'
              + '<div class="index-service-step-main-column-row-icon"></div>'
              + '<div class="index-service-step-main-column-row-txt">'
                + '<p class="ch">5.全程专家指导</p>'
                + '<p class="en">Whole course expert guidance</p>'
              + '</div>'
            + '</div>'
            + '<div class="index-service-step-main-column-row">'
              + '<div class="index-service-step-main-column-row-icon"></div>'
              + '<div class="index-service-step-main-column-row-txt">'
                + '<p class="ch">6.售后服务保障</p>'
                + '<p class="en">After-sales service guarantee</p>'
              + '</div>'
            + '</div>'
          + '</div>'
        + '</div>'
    },
    stateMap = { $service_step : null },
    jqueryMap = {},
    setJqueryMap, initModule;

  setJqueryMap = function () {
    var $service_step = stateMap.$service_step;
    jqueryMap = {
      $service_step : $service_step
    };
  };

  initModule = function ($service_step) {
    stateMap.$service_step = $service_step;
    $service_step.html(configMap.service_step_html);
    setJqueryMap();
  };

  return { initModule : initModule };
}());
