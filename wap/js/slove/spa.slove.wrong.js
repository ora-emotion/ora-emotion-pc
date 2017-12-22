/*
 * spa.slove.wrong.js
 * wrong module for Save Love
 * 挽回爱情 - 错误做法
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.slove.wrong = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">错误做法</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'

        + '<div class="slove-wrong-main">'
          + '<div class="swiper-container">'
            + '<div class="swiper-wrapper">'
              + '<div class="swiper-slide">'
                  + '<div class="item">'
                    + '<span class="icon"></span>'
                    + '<p>反复道歉，不停的乞求原谅</p>'
                  + '</div>'
                  + '<div class="item">'
                    + '<span class="icon"></span>'
                    + '<p>不停的讲道理纠结于到底谁对谁错</p>'
                  + '</div>'
                  + '<div class="item">'
                    + '<span class="icon"></span>'
                    + '<p>不断的承诺、各种保证</p>'
                  + '</div>'
                + '</div>'
              + '<div class="swiper-slide">'
                  + '<div class="item">'
                    + '<span class="icon"></span>'
                    + '<p>跟身边的不专业朋友四处散播分手的消息，乞求帮助</p>'
                  + '</div>'
                  + '<div class="item">'
                    + '<span class="icon"></span>'
                    + '<p>不断打电话、发信息，就是想找机会说清楚</p>'
                  + '</div>'
                  + '<div class="item">'
                    + '<span class="icon"></span>'
                    + '<p>不断的去对方的家、公司或者其他可能出现的地点</p>'
                  + '</div>'
                + '</div>'
            + '</div>'
          + '</div>'
          + '<div class="swiper-pagination"></div>'
        + '</div>'
    },
    mySwiper, initModule;

  // 错误做法模块轮播图
  mySwiper = function () {
    var swiper = new Swiper('.slove-wrong-main .swiper-container', {
      autoplay: 10000,                     // 禁止自动播放
      pagination : '.swiper-pagination',   // 显示分页器
      paginationClickable :true,           // 分页器可点击
    });
  };

  initModule = function ($wrong) {
    $wrong.html(configMap.main_html);

    mySwiper();
  };

  return { initModule : initModule };
}());
