/*
 * spa.clove.advantage.js
 * Advantage module for Customize Love
 * 定制爱情 - 橘子优势
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.clove.advantage = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">橘子优势</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'

        + '<div class="clove-advantage-main">'
          + '<div class="swiper-container tabs-container">'
            + '<div class="swiper-wrapper">'
              + '<div class="swiper-slide">'
                + '<div class="img">'
                  + '<img src="images/clove/advantage-pic01.png" alt="">'
                + '</div>'
                + '<div class="txt">'
                  + '<p>'
                    + '橘子情感是国内首家情感行业开创者，开启国内实现情感自由，专业'
                    + '解决的先河。公司员工为国内情感行业首批一线工作者，经验丰富。'
                  + '</p>'
                + '</div>'
              + '</div>'
              + '<div class="swiper-slide">'
                + '<div class="img">'
                  + '<img src="images/clove/advantage-pic02.png" alt="">'
                + '</div>'
                + '<div class="txt">'
                  + '<p>'
                    + '由国内顶尖情感专家、进化心理学专家、、情感维稳师、女性心理侧'
                    + '写师、国家二级心理咨询师联合组成专注于两性情感解决方案的导师'
                    + '团队，提供面对面实战服务以及后期关系维稳服务。'
                  + '</p>'
                + '</div>'
              + '</div>'
              + '<div class="swiper-slide">'
                + '<div class="img">'
                  + '<img src="images/clove/advantage-pic03.png" alt="">'
                + '</div>'
                + '<div class="txt">'
                  + '<p>'
                    + '橘子情感团队自成立以来，解决国内情感教育缺失问题，不仅是帮助'
                    + '每个人寻得真爱，更是让更多的人得到应有的情感教育，弥补国内教'
                    + '育缺失。'
                  + '</p>'
                + '</div>'
              + '</div>'
              + '<div class="swiper-slide">'
                + '<div class="img">'
                  + '<img src="images/clove/advantage-pic04.png" alt="">'
                + '</div>'
                + '<div class="txt">'
                  + '<p>'
                    + '专业导师团队根据每位学员制定私人方案，配备多名导师组成导师团'
                    + '队，全程跟进整个过程，把控全局，确保方案执行效果以及最终目标'
                    + '实现。'
                  + '</p>'
                + '</div>'
              + '</div>'
              + '<div class="swiper-slide">'
                + '<div class="img">'
                  + '<img src="images/clove/advantage-pic05.png" alt="">'
                + '</div>'
                + '<div class="txt">'
                  + '<p>'
                    + '橘子情感为解决您的情感问题，全天在线，周末无休不间断电话在线，'
                    + '随时为您提供服务。'
                  + '</p>'
                + '</div>'
              + '</div>'
              + '<div class="swiper-slide">'
                + '<div class="img">'
                  + '<img src="images/clove/advantage-pic06.png" alt="">'
                + '</div>'
                + '<div class="txt">'
                  + '<p>'
                    + '橘子情感在业内广受好评，截止目前已经帮助近10000对对用户寻得真'
                    + '爱，收获幸福。深受广大客户的认同和好评。'
                  + '</p>'
                + '</div>'
              + '</div>'
            + '</div>'
          + '</div>'
          + '<div class="split-line"></div>'
          + '<div class="tabs">'
            + '<span class="active"></span>'
            + '<span></span>'
            + '<span></span>'
            + '<span></span>'
            + '<span></span>'
            + '<span></span>'
          + '</div>'
        + '</div>'
    },
    stateMap = { $advantage : null },
    jqueryMap = {},
    setJqueryMap, swiper, initModule;

  setJqueryMap = function () {
    var $advantage = stateMap.$advantage;

    jqueryMap = {
      $advantage : $advantage,
      $swiper    : $advantage.find('.swiper-container'),
      $slide     : $advantage.find('.swiper-slide')
    };
  };

  swiper = function () {
    var mySwiper = new Swiper(jqueryMap.$swiper ,{
      autoHeight: true,
      onSlideChangeStart: function(){
        $(".clove-advantage-main .tabs .active").removeClass('active');
        $(".clove-advantage-main .tabs span").eq(mySwiper.activeIndex)
          .addClass('active');
      }
    });

    $(".clove-advantage-main .tabs span").on('touchstart mousedown',function(e){
      e.preventDefault();
      $(".clove-advantage-main .tabs .active").removeClass('active');
      $(this).addClass('active');
      mySwiper.slideTo( $(this).index() );
    });

    $(".clove-advantage-main .tabs span").click(function(e){
      e.preventDefault();
    });
  };

  initModule = function ($advantage) {
    stateMap.$advantage = $advantage;
    $advantage.html(configMap.main_html);

    setJqueryMap();
    swiper();
  };

  return { initModule : initModule };
}());
