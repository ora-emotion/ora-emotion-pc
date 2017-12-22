/*
 * spa.clove.reason.js
 * Reason module for Customize Love
 * 定制爱情 - 单身原因
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.clove.reason = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">单身原因</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'

        + '<div class="clove-reason-main">'
          + '<div class="swiper-container">'
            + '<div class="swiper-wrapper">'
              + '<div class="swiper-slide">'
                + '<img src="images/clove/reason-icon01.png">'
                + '<p class="txt-title">有了目标</p>'
                + '<p class="txt-des">'
                  + '有了心仪已久的目标，整日关注，却畏手畏脚，不知如何行动。'
                + '</p>'
              + '</div>'
              + '<div class="swiper-slide">'
                + '<img src="images/clove/reason-icon02.png">'
                + '<p class="txt-title">不会表白</p>'
                + '<p class="txt-des">'
                  + '不懂得如何表达自己的心意，担心贸然行动，会让关系闹僵。'
                + '</p>'
              + '</div>'
              + '<div class="swiper-slide">'
                + '<img src="images/clove/reason-icon03.png">'
                + '<p class="txt-title">没有机会</p>'
                + '<p class="txt-des">'
                  + '苦于没有机会，和对方接触，感觉和ta像两条平行线，永远没有交集。'
                + '</p>'
              + '</div>'
              + '<div class="swiper-slide">'
                + '<img src="images/clove/reason-icon04.png">'
                + '<p class="txt-title">目标抵触</p>'
                + '<p class="txt-des">'
                  + '或许你尝试过，失败过，或许ta对你没有兴趣，现在对方不接受你的'
                  + '任何行为。'
                + '</p>'
              + '</div>'
              + '<div class="swiper-slide">'
                + '<img src="images/clove/reason-icon05.png">'
                + '<p class="txt-title">目标喜欢别人</p>'
                + '<p class="txt-des">'
                  + '你爱的人，爱的人不是你。Ta有另一位心仪的对象，你的竞争力不足。'
                + '</p>'
              + '</div>'
              + '<div class="swiper-slide">'
                + '<img src="images/clove/reason-icon06.png">'
                + '<p class="txt-title">甘为备胎</p>'
                + '<p class="txt-des">'
                  + '你一味的付出，最终却只能沦落为备胎，你很无奈，担心不这样更没有'
                  + '机会。'
                + '</p>'
              + '</div>'
            + '</div>'
          + '</div>'
        + '</div>'
    },
    stateMap = { $reason : null },
    jqueryMap = {},
    setJqueryMap, swiper, initModule;

  setJqueryMap = function () {
    var $reason = stateMap.$reason;

    jqueryMap = {
      $reason           : $reason,
      $swiper_container : $reason.find('.swiper-container')
    };
  };

  var swiper = function () {
    var mySwiper = new Swiper(jqueryMap.$swiper_container, {
      slidesPerView : 2.4
    });
  };

  initModule = function ($reason) {
    stateMap.$reason = $reason;
    $reason.html(configMap.main_html);

    setJqueryMap();
    swiper();
  };

  return { initModule : initModule };
}());
