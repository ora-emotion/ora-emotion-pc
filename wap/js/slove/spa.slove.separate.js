/*
 * spa.slove.separate.js
 * separate module for Save Love
 * 挽回爱情 - 分手状态
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.slove.separate = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">分手状态</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'

        + '<div class="slove-separate-main">'
          + '<div class="swiper-container" id="tabs-container">'
            + '<div class="swiper-wrapper">'
                + '<div class="swiper-slide">'
                  + '<div class="img">'
                    + '<img src="images/slove/separate-pic01.png">'
                  + '</div>'
                  + '<div class="txt">'
                      + '<p>'
                        + '爱情是理想的，但是现实却有很多的枷锁阻隔着你的爱情。难道我'
                        + '们真的就要被现实打败吗？从来没有什么难以挽回的爱情，只有自'
                        + '己主动放弃之后的悔恨。'
                      + '</p>'
                    + '</div>'
                + '</div>'
                + '<div class="swiper-slide">'
                  + '<div class="img">'
                    + '<img src="images/slove/separate-pic02.png">'
                  + '</div>'
                  + '<div class="txt">'
                      + '<p>'
                        + '不是说时间就可以淡忘一切吗？为什么越想忘记反而越清晰，分'
                        + '手很久了，那么两个人还有希望吗？我怎么能够确定她是不是也'
                        + '还在爱着我？'
                      + '</p>'
                    + '</div>'
                + '</div>'
                + '<div class="swiper-slide">'
                  + '<div class="img">'
                    + '<img src="images/slove/separate-pic03.png">'
                  + '</div>'
                  + '<div class="txt">'
                      + '<p>'
                        + '爱情中的分分合合最让人难受，你舍不得，不忍心更不甘心就放弃'
                        + '这份来之不易的感情，到底怎么样才能结束这样不断分分合合的煎'
                        + '熬，正确的方法在哪里。'
                      + '</p>'
                    + '</div>'
                + '</div>'
                + '<div class="swiper-slide">'
                    + '<div class="img">'
                      + '<img src="images/slove/separate-pic04.png">'
                    + '</div>'
                    + '<div class="txt">'
                        + '<p>'
                          + '你刚刚经历分手，用尽自己所有的力气去挽留，不仅没有留住'
                          + '你的TA，反而不再说话，甚至直接被拉黑断绝联系。怎么样才'
                          + '能挽回TA，是不是真的就没有办法了。'
                        + '</p>'
                      + '</div>'
                  + '</div>'
              + '</div>'
          + '</div>'
          + '<div class="split-line"></div>'
          + '<div class="tabs">'
              + '<p class="active">刚刚分手</p>'
              + '<p>分分合合</p>'
              + '<p>分手很久</p>'
              + '<p>无法挽回</p>'
            + '</div>'
        + '</div>'
    },
    mySwiper, initModule;

  mySwiper = function () {
    var tabContentItem, swiper;

    tabContentItem = $(".slove-separate-main .swiper-slide");

    swiper = new Swiper('.slove-separate-main #tabs-container',{
      onSlideChangeStart: function(){
        $(".tabs .active").removeClass('active');
        $(".tabs p").eq(swiper.activeIndex).addClass('active');
      }
    });
    $(".tabs p").on('touchstart mousedown',function(e){
      e.preventDefault();
      $(".tabs .active").removeClass('active');
      $(this).addClass('active');
      swiper.slideTo( $(this).index() );
    });

    $(".tabs p").click(function(e){
      e.preventDefault();
    });
  };

  initModule = function ($separate) {
    $separate.html(configMap.main_html);
    mySwiper();
  };

  return { initModule : initModule };
}());
