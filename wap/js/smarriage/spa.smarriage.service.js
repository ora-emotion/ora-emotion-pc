/*
 * spa.smarriage.service.js
 * Service module for Save Marriage
 * 能够提供的挽回婚姻服务
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.smarriage.service = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">能够提供的挽回婚姻服务</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'

        + '<div class="smarriage-service-main">'
          + '<div class="swiper-container">'
      			+ '<div class="swiper-wrapper">'
      				+ '<div class="swiper-slide">'
      					+ '<div class="item">'
      						+ '<span class="icon"></span>'
      						+ '<p>婚姻矛盾调解 婚姻感情维护</p>'
      					+ '</div>'
      					+ '<div class="item">'
      						+ '<span class="icon"></span>'
      						+ '<p>挽回婚姻服务 改变离婚命运</p>'
      					+ '</div>'
      					+ '<div class="item">'
      						+ '<span class="icon"></span>'
      						+ '<p>小三动机分析 代分离第三者</p>'
      					+ '</div>'
      				+ '</div>'
      				+ '<div class="swiper-slide">'
      					+ '<div class="item">'
      						+ '<span class="icon"></span>'
      						+ '<p>婆媳矛盾调解 婆媳关系修复</p>'
      					+ '</div>'
      					+ '<div class="item">'
      						+ '<span class="icon"></span>'
      						+ '<p>其他具体业务 欢迎点击咨询</p>'
      					+ '</div>'
      				+ '</div>'
      			+ '</div>'
      		+ '</div>'
      		+ '<div class="swiper-pagination"></div>'
        + '</div>'
    },
    swiper, initModule;

  swiper = function () {
    var mySwiper = new Swiper('.smarriage-service-main .swiper-container', {
      autoplay: 10000,                     // 禁止自动播放
      pagination : '.swiper-pagination',   // 显示分页器
      paginationClickable :true,           // 分页器可点击
    });
  };

  initModule = function ($service) {
    $service.html(configMap.main_html);
    swiper();
  };

  return { initModule : initModule };
}());
