/*
 * spa.clove.consequence.js
 * Consequence module for Customize Love
 * 定制爱情 - 错误做法导致后果
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.clove.consequence = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">错误做法导致后果</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'

        + '<div class="clove-consequence-main">'
          + '<div class="swiper-container tabs-container">'
            + '<div class="swiper-wrapper">'
              + '<div class="swiper-slide">'
                + '<div class="item">'
                  + '<div class="img">'
                    + '<img src="images/clove/consequence-pic01.png">'
                  + '</div>'
                  + '<div class="txt">'
                    + '<p class="title">盲目付出</p>'
                    + '<p class="para">'
                      + '一味的投入时间、金钱、感情，却给对方徒增压力，导致自身价值'
                      + '感低下。'
                    + '</p>'
                  + '</div>'
                + '</div>'
                + '<div class="item">'
                  + '<div class="img">'
                    + '<img src="images/clove/consequence-pic02.png">'
                  + '</div>'
                  + '<div class="txt">'
                    + '<p class="title">贸然表白</p>'
                    + '<p class="para">'
                      + '在关系热度不到位的情况下，盲目表白，结果让自己的出境陷入被'
                      + '动和尴尬。'
                    + '</p>'
                  + '</div>'
                + '</div>'
              + '</div>'
              + '<div class="swiper-slide">'
                + '<div class="item">'
                  + '<div class="img">'
                    + '<img src="images/clove/consequence-pic03.png">'
                  + '</div>'
                  + '<div class="txt">'
                    + '<p class="title">盲目付出</p>'
                    + '<p class="para">'
                      + '目的性强烈，不顾及对方感受，频繁邀约导致对方反感。'
                    + '</p>'
                  + '</div>'
                + '</div>'
                + '<div class="item">'
                  + '<div class="img">'
                    + '<img src="images/clove/consequence-pic04.png">'
                  + '</div>'
                  + '<div class="txt">'
                    + '<p class="title">贸然表白</p>'
                    + '<p class="para">'
                      + '需求感爆棚，将对方作为生活全部，一有时间就缠着对方聊天。'
                    + '</p>'
                  + '</div>'
                + '</div>'
              + '</div>'
            + '</div>'
          + '</div>'
          + '<div class="split-line"></div>'
          + '<div class="tabs">'
            + '<span class="active"></span>'
            + '<span></span>'
          + '</div>'
        + '</div>'
    },
    stateMap = { $consequence : null },
    jqueryMap = {},
    setJqueryMap, swiper, initModule;

  setJqueryMap = function () {
    var $consequence = stateMap.$consequence;

    jqueryMap = {
      $consequence      : $consequence,
      $main             : $consequence.find('.clove-consequence-main'),
      $swiper_container : $consequence.find('.swiper-container')
    };
  };

  swiper = function () {
    var mySwiper = new Swiper(jqueryMap.$swiper_container, {
      onSlideChangeStart: function(){
        $(".clove-consequence-main .tabs .active")
          .removeClass('active');
        $(".clove-consequence-main .tabs span")
          .eq(mySwiper.activeIndex)
          .addClass('active');
      }
    });

    $(".clove-consequence-main .tabs span").on('touchstart mousedown', function(e){
      e.preventDefault();
      $(".clove-consequence-main .tabs .active").removeClass('active');
      $(this).addClass('active');
      mySwiper.slideTo( $(this).index() );
    });

    $(".clove-consequence-main .tabs span").click(function(e){
      e.preventDefault();
    });
  };

  initModule = function ($consequence) {
    stateMap.$consequence = $consequence;
    $consequence.html(configMap.main_html);

    setJqueryMap();
    swiper();
  };

  return { initModule : initModule };
}());
