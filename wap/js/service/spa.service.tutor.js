/*
 * spa.service.tutor.js
 * Tutor module for Service
 * 服务介绍 - 首席主导师
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.service.tutor = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">首席主导师</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="service-tutor-main">'
          + '<div class="swiper-container">'
              + '<div class="swiper-wrapper">'
                + '<div class="swiper-slide">'
                  + '<div>'
                    + '<img src="images/service/tutor-jiawei.png" style="width: 4.72rem;height:2.81rem; padding-left: .2rem;" />'
                  + '</div>'
                + '</div>'
                + '<div class="swiper-slide">'
                  + '<div>'
                    + '<img src="images/service/tutor-qianwu.png" style="width:4.72rem;height:2.81rem; padding-left: .2rem;" />'
                  + '</div>'
                + '</div>'
                + '<div class="swiper-slide">'
                  + '<div>'
                    + '<img src="images/service/tutor-lujia.png" style="width:4.72rem;height:2.81rem; padding-left: .2rem;" />'
                  + '</div>'
                + '</div>'
                + '<div class="swiper-slide">'
                  + '<div>'
                    + '<img src="images/service/tutor-asu.png" style="width:4.72rem;height:2.81rem; padding-left: .2rem;" />'
                  + '</div>'
                + '</div>'
                + '<div class="swiper-slide">'
                  + '<div>'
                    + '<img src="images/service/tutor-haoyu.png" style="width:4.72rem;height:2.82rem; padding-left: .2rem;" />'
                  + '</div>'
                + '</div>'
              + '</div>'
            + '</div>'
        + '</div>'
    },
    stateMap = { $tutor : null },
    jqueryMap = {},

    setJqueryMap, swiper, initModule;

  setJqueryMap = function () {
    var $tutor = stateMap.$tutor;
    jqueryMap = {
      $tutor  : $tutor,
      $swiper : $tutor.find('.swiper-container')
    };
  };

  // Start : swiper()
  // des   : 轮播图，引入 swiper 插件
  //
  swiper = function () {
    var mySwiper;

    mySwiper = new Swiper(jqueryMap.$swiper, {
      slidesPerView : 1.5
    });
  };
  // End : swiper()

  initModule = function ($tutor) {
    stateMap.$tutor = $tutor;
    $tutor.html(configMap.main_html);

    setJqueryMap();
    swiper();
  };

  return { initModule : initModule };
}());
