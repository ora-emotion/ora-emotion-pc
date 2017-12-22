/*
 * spa.mentor.tutor.js
 * Tutor module for Mentor
 * 权威专家 - 橘子情感首席导师
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.mentor.tutor = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">橘子情感首席导师</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'

        + '<div class="mentor-tutor-main">'
          + '<div class="swiper-container">'
          	+ '<div class="swiper-wrapper">'
              + '<div class="swiper-slide">'
      					+ '<img src="images/mentor/mentor-jiawei.png">'
      				+ '</div>'
      				+ '<div class="swiper-slide">'
      					+ '<img src="images/mentor/mentor-jieni.png">'
      				+ '</div>'
      				+ '<div class="swiper-slide">'
      					+ '<img src="images/mentor/mentor-lujia.png">'
      				+ '</div>'
      				+ '<div class="swiper-slide">'
      					+ '<img src="images/mentor/mentor-moyan.png">'
      				+ '</div>'
      				+ '<div class="swiper-slide">'
      					+ '<img src="images/mentor/mentor-qianwu.png">'
      				+ '</div>'
      				+ '<div class="swiper-slide">'
      					+ '<img src="images/mentor/mentor-qiyue.png">'
      				+ '</div>'
      				+ '<div class="swiper-slide">'
      					+ '<img src="images/mentor/mentor-asu.png">'
      				+ '</div>'
      				+ '<div class="swiper-slide">'
      					+ '<img src="images/mentor/mentor-haoyu.png">'
      				+ '</div>'
          	+ '</div>'
      			+ '<div class="swiper-button-prev"></div>'
      			+ '<div class="swiper-button-next"></div>'
      			+ '<div class="swiper-pagination"></div>'
          + '</div>'
      	+ '</div>'
    },
    stateMap = { $tutor : null },
    jqueryMap = {},
    setJqueryMap, swiper, initModule;

  setJqueryMap = function () {
    var $tutor = stateMap.$tutor;

    jqueryMap = {
      $tutor : $tutor,
      $swiper_container : $tutor.find('.swiper-container')
    };
  };

  swiper = function () {
    var mySwiper = new Swiper(jqueryMap.$swiper_container, {
      autoplay            : 5000,
			loop                : true,
			pagination          : '.swiper-pagination',
			paginationClickable : true,
			prevButton          : '.swiper-button-prev',
      nextButton          : '.swiper-button-next'
    });
  };

  initModule = function ($tutor) {
    stateMap.$tutor = $tutor;
    $tutor.html(configMap.main_html);

    setJqueryMap();
    swiper();
  };

  return { initModule : initModule };
}());
