/*
 * spa.index.mentor_intro.js
 * Mentor Intro module for Index
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.index.mentor_intro = (function () {
  var
    configMap = {
      mentor_intro_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">导师介绍</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="index-mentor-intro-main">'
          + '<div class="main">'
              + '<div class="container">'
                  + '<div id="slide" class="slide" class="index-slide" alt="star">'
                      + '<div class="img">'
                        + '<img src="images/index/mentor-haoyu.png">'
                      + '</div>'
                      + '<div class="img">'
                        + '<img src="images/index/mentor-asu.png">'
                      + '</div>'
                      + '<div class="img">'
                        + '<img src="images/index/mentor-jiawei.png">'
                      + '</div>'
                      + '<div class="img">'
                        + '<img src="images/index/mentor-moyan.png">'
                      + '</div>'
                      + '<div class="img">'
                        + '<img src="images/index/mentor-qianwu.png">'
                      + '</div>'
                      + '<div class="img">'
                        + '<img src="images/index/mentor-jieni.png">'
                      + '</div>'
                      + '<div class="slide-bt"></div>'
                  + '</div>'
              + '</div>'
          + '</div>'
        + '</div>'
    },
    stateMap = { $mentor_intro : null },
    carousel, initModule;

  carousel = function () {
    // 变量说明 :
    //   * autoLb     - 为 true 时开启自动轮播
    //   * autoLbtime - 轮播间隔时间（单位秒）
    //   * touch      - 开启触摸滑动
    //   * slideBt    - 开启滚动按钮
    //   * slideNub   - 轮播图片数量
    //
    var
      autoLb     = false,
      autoLbtime = 1,
      touch      = true,
      slideBt    = true,
      slideNub   = $('.slide .img').length,      //获取轮播图片数量,

      left, right, k_touch,
      imgClickFy,  slideLi, /*tz,*/
      i;

    //窗口大小改变时改变轮播图宽高
    $(window).resize(function() {
      $('.slide').height( $('.slide').width() * 0.56 );
    });

    $('.slide').height( $('.slide').width() * 0.56 );

    for(i = 0; i < slideNub; i++) {
      $('.slide .img:eq(' + i + ')').attr('data-slide-imgId', i);
    }

    //根据轮播图片数量设定图片位置对应的class
    if(slideNub === 1) {
      for(i = 0; i < slideNub; i++) {
        $('.slide .img:eq(' + i + ')').addClass('img3');
      }
    }
    if(slideNub === 2) {
      for(i = 0; i < slideNub; i++) {
        $('.slide .img:eq(' + i + ')').addClass('img' + (i + 3));
      }
    }
    if(slideNub === 3) {
      for(i = 0; i < slideNub; i++) {
        $('.slide .img:eq(' + i + ')').addClass('img' + (i + 2));
      }
    }
    if(slideNub > 3 && slideNub < 6) {
      for(i = 0; i < slideNub; i++) {
        $('.slide .img:eq(' + i + ')').addClass('img' + (i + 1));
      }
    }
    if(slideNub >= 6) {
      for(i = 0; i < slideNub; i++) {
        if(i < 5) {
          $('.slide .img:eq(' + i + ')').addClass('img' + (i + 1));
        } else {
          $('.slide .img:eq(' + i + ')').addClass('img5');
        }
      }
    }

    //根据轮播图片数量设定轮播图按钮数量
    if(slideBt) {
      for(i = 1; i <= slideNub; i++) {
        $('.slide-bt').append("<span data-slide-bt='" + i + "' onclick='tz(" + i + ")'></span>");
      }
      $('.slide-bt').width(slideNub * 34);
      $('.slide-bt').css('margin-left', '-' + slideNub * 0.17 + 'rem');
    }

    //轮播图片左右图片点击翻页
    imgClickFy = function () {
      $('.slide .img').removeAttr('onclick');
      $('.slide .img2').attr('onclick', 'left()');
      $('.slide .img4').attr('onclick', 'right()');
    };

    //修改当前最中间图片对应按钮选中状态
    slideLi = function () {
      var slideList = parseInt($('.slide .img3').attr('data-slide-imgId'), 10) + 1;
      $('.slide-bt span').removeClass('on');
      $('.slide-bt span[data-slide-bt=' + slideList + ']').addClass('on');
    };

    //右滑动
    right = function () {
      var fy = [];
      for(i = 0; i < slideNub; i++) {
        fy[i] = $('.slide .img[data-slide-imgId=' + i + ']').attr('class');
      }
      for(i = 0; i < slideNub; i++) {
        if(i === 0) {
          $('.slide .img[data-slide-imgId=' + i + ']').attr('class', fy[slideNub - 1]);
        } else {
          $('.slide .img[data-slide-imgId=' + i + ']').attr('class', fy[i - 1]);
        }
      }
      imgClickFy();
      slideLi();
    };

    //左滑动
    left = function () {
      var fy = [];
      for(i = 0; i < slideNub; i++) {
        fy[i] = $('.slide .img[data-slide-imgId=' + i + ']').attr('class');
      }
      for(i = 0; i < slideNub; i++) {
        if(i === (slideNub - 1)) {
          $('.slide .img[data-slide-imgId=' + i + ']').attr('class', fy[0]);
        } else {
          $('.slide .img[data-slide-imgId=' + i + ']').attr('class', fy[i + 1]);
        }
      }
      imgClickFy();
      slideLi();
    };

    //轮播按钮点击翻页
    // tz = function (id) {
    //   var tzcs = id - (parseInt($('.slide .img3').attr('data-slide-imgId'), 10) + 1);
    //   if(tzcs > 0) {
    //     for(i = 0; i < tzcs; i++) {
    //       setTimeout(function() {
    //           right();
    //       }, 1);
    //     }
    //   }
    //   if(tzcs < 0) {
    //     tzcs = (-tzcs);
    //     for(i = 0; i < tzcs; i++) {
    //       setTimeout(function() {
    //         left();
    //       }, 1);
    //     }
    //   }
    //   slideLi();
    // };

    //触摸滑动模块
    k_touch = function () {
      var
        onTouchStart, onTouchMove, onTouchEnd,
        _start   = 0,
        _end     = 0,
        _content = document.getElementById('slide');



      onTouchStart = function () {
        touch = event.targetTouches[0];
        _start = touch.pageX;
      };

      onTouchMove = function () {
        touch = event.targetTouches[0];
        _end = (_start - touch.pageX);
      };

      onTouchEnd = function () {
        if(_end < -100) {
          left();
          _end = 0;
        } else if(_end > 100) {
          right();
          _end = 0;
        }
      };

      _content.addEventListener('touchstart', onTouchStart, false);
      _content.addEventListener('touchmove', onTouchMove, false);
      _content.addEventListener('touchend', onTouchEnd, false);

    };

    //自动轮播
    if(autoLb) {
      setInterval(function() {
        right();
      }, autoLbtime * 1000);
    }

    if(touch) {
      k_touch();
    }
    slideLi();
    imgClickFy();

  };

  initModule = function ($mentor_intro) {
    stateMap.$mentor_intro = $mentor_intro;
    $mentor_intro.html(configMap.mentor_intro_html);

    carousel();
  };

  return { initModule : initModule };
}());
