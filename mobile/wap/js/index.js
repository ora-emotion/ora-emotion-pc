var insertModuleTitle = (function () {
  // 请求模块标题模板
  $(function () {

    $.ajax({
      type: "get",
      url: "components/module-title/module-title.html",
      success: function (dataHTML) {
         $(document).scrollTop(0);
        // 插入模板到页面
        $(".module").prepend(dataHTML);
      },
      error: function (error) {
        alert("request error");
      }
    });

  }());

  // 请求模块模块标题数据
  $(function () {
    $.ajax({
      type: "get",
      url: "data/module-title.json",
      success: function (data) {
        insertModuleTitle(data);
      },
      error: function (error) {
        alert("requests error");
      }
    });
  }());

  // 插入模块标题
  function insertModuleTitle(data) {
    // 动态渲染模板标题
    var moduleTitle = $(".module .title .module-title");
    var i = 0;
    for (var title in data.page["index"]) {
      $($(".module")[i]).find(".title .module-title").html(data.page["index"][title]);
      i++;
    }
  }

}());

// 动态更换头图图片
var changePrefaceImg = $(function (){
  var prefaceImg = $(".preface .banner-img img");
  prefaceImg.attr("src", "images/index/preface.png");
}());

$(document).ready(function () {

  var
    viewMore,
    page_title = $( 'head title' )
    ;

  var initModuleThreeBanner = $(function (){
      var autoLb = false; //autoLb=true为开启自动轮播
      var autoLbtime = 1; //autoLbtime为轮播间隔时间（单位秒）
      var touch = true; //touch=true为开启触摸滑动
      var slideBt = true; //slideBt=true为开启滚动按钮
      var slideNub; //轮播图片数量
      //窗口大小改变时改变轮播图宽高
      $(window).resize(function() {
        $(".slide").height($(".slide").width() * 0.56);
      });

      $(function() {
        $(".slide").height($(".slide").width() * 0.56);
        slideNub = $(".slide .img").size(); //获取轮播图片数量
        for(i = 0; i < slideNub; i++) {
          $(".slide .img:eq(" + i + ")").attr("data-slide-imgId", i);
      }

        //根据轮播图片数量设定图片位置对应的class
        if(slideNub == 1) {
          for(i = 0; i < slideNub; i++) {
            $(".slide .img:eq(" + i + ")").addClass("img3");
          }
        }
        if(slideNub == 2) {
          for(i = 0; i < slideNub; i++) {
            $(".slide .img:eq(" + i + ")").addClass("img" + (i + 3));
          }
        }
        if(slideNub == 3) {
          for(i = 0; i < slideNub; i++) {
            $(".slide .img:eq(" + i + ")").addClass("img" + (i + 2));
          }
        }
        if(slideNub > 3 && slideNub < 6) {
          for(i = 0; i < slideNub; i++) {
            $(".slide .img:eq(" + i + ")").addClass("img" + (i + 1));
          }
        }
        if(slideNub >= 6) {
          for(i = 0; i < slideNub; i++) {
            if(i < 5) {
              $(".slide .img:eq(" + i + ")").addClass("img" + (i + 1));
            } else {
              $(".slide .img:eq(" + i + ")").addClass("img5");
            }
          }
        }

        //根据轮播图片数量设定轮播图按钮数量
        if(slideBt) {
          for(i = 1; i <= slideNub; i++) {
            $(".slide-bt").append("<span data-slide-bt='" + i + "' onclick='tz(" + i + ")'></span>");
          }
          $(".slide-bt").width(slideNub * 34);
          $(".slide-bt").css("margin-left", "-" + slideNub * 0.17 + "rem");
        }

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
      });

      //右滑动
      function right() {
        var fy = new Array();
        for(i = 0; i < slideNub; i++) {
          fy[i] = $(".slide .img[data-slide-imgId=" + i + "]").attr("class");
        }
        for(i = 0; i < slideNub; i++) {
          if(i == 0) {
            $(".slide .img[data-slide-imgId=" + i + "]").attr("class", fy[slideNub - 1]);
          } else {
            $(".slide .img[data-slide-imgId=" + i + "]").attr("class", fy[i - 1]);
          }
        }
        imgClickFy();
        slideLi();
      }

      //左滑动
      function left() {
        var fy = new Array();
        for(i = 0; i < slideNub; i++) {
          fy[i] = $(".slide .img[data-slide-imgId=" + i + "]").attr("class");
        }
        for(i = 0; i < slideNub; i++) {
          if(i == (slideNub - 1)) {
            $(".slide .img[data-slide-imgId=" + i + "]").attr("class", fy[0]);
          } else {
            $(".slide .img[data-slide-imgId=" + i + "]").attr("class", fy[i + 1]);
          }
        }
        imgClickFy();
        slideLi();
      }

      //轮播图片左右图片点击翻页
      function imgClickFy() {
        $(".slide .img").removeAttr("onclick");
        $(".slide .img2").attr("onclick", "left()");
        $(".slide .img4").attr("onclick", "right()");
      }

      //修改当前最中间图片对应按钮选中状态
      function slideLi() {
        var slideList = parseInt($(".slide .img3").attr("data-slide-imgId")) + 1;
        $(".slide-bt span").removeClass("on");
        $(".slide-bt span[data-slide-bt=" + slideList + "]").addClass("on");
      }

      //轮播按钮点击翻页
      function tz(id) {
        var tzcs = id - (parseInt($(".slide .img3").attr("data-slide-imgId")) + 1);
        if(tzcs > 0) {
          for(i = 0; i < tzcs; i++) {
            setTimeout(function() {
                right();
            }, 1);
          }
        }
        if(tzcs < 0) {
          tzcs = (-tzcs);
          for(i = 0; i < tzcs; i++) {
            setTimeout(function() {
              left();
            }, 1);
          }
        }
        slideLi();
      }

      //触摸滑动模块
      function k_touch() {
        var
          _start   = 0,
          _end     = 0,
          _content = document.getElementById("slide")
          ;

        _content.addEventListener("touchstart", touchStart, false);
        _content.addEventListener("touchmove", touchMove, false);
        _content.addEventListener("touchend", touchEnd, false);

        function touchStart(event) {
          var touch = event.targetTouches[0];
          _start = touch.pageX;
        }

        function touchMove(event) {
          var touch = event.targetTouches[0];
          _end = (_start - touch.pageX);
        }

        function touchEnd(event) {
          if(_end < -100) {
            left();
            _end = 0;
          } else if(_end > 100) {
            right();
            _end = 0;
          }
        }
      }

    }());

  // module 04 - 橘子动态轮播图
  var initBanner = $(function () {
    // 轮播图部分
    var mySwiper = new Swiper('.swiper-container',{
      autoplay : 10000,
      initialSlide : 0,
      pagination : '.swiper-pagination',
      loop : true,
    });
  }());

  // 加载三级页面
  $(function () {
    $(".index-module04-more01").click(function() {
      app.router.loadHtml( 'views/news/news7' );
      app.router.loadCss( 'css/news' );
    });
    $(".index-module04-more02").click(function() {
      app.router.loadHtml( 'views/news/news11' );
      app.router.loadCss( 'css/news' );
    });
    $(".index-module04-more03").click(function() {
      app.router.loadHtml( 'views/news/news9' );
      app.router.loadCss( 'css/news' );
    });
    $(".index-module04-more04").click(function() {
      app.router.loadHtml( 'views/news/news6' );
      app.router.loadCss( 'css/news' );
    });
    $(".index-module04-more05").click(function() {
      // app.router.loadHtml( 'views/news/news2' );
      app.router.loadHtml( 'views/news/news13' );
      app.router.loadCss( 'css/news' );
    });
    $(".index-module04-more06").click(function() {
      // app.router.loadHtml( 'views/news/news4' );
      app.router.loadHtml( 'views/news/news14' );
      app.router.loadCss( 'css/news' );
    });
  }());

  // Start method /loadPage()/
  var loadPage = (function () {
    // 挽回爱情
    $( '.icon-txt-group:first-child .item:nth-child(1)' ).click(function () {
      app.router.loadHtml( 'views/save-love' );
      app.router.loadCss( 'css/save-love' );
      app.router.loadJs( 'js/save-love' );
      page_title.text( '橘子情感 - 挽回爱情' );
    });
    // 挽救婚姻
    $( '.icon-txt-group:first-child .item:nth-child(2)' ).click(function () {
      app.router.loadHtml( 'views/save-marriage' );
      app.router.loadCss( 'css/save-marriage' );
      app.router.loadJs( 'js/save-marriage' );
      page_title.text( '橘子情感 - 挽救婚姻' );
    });
    // 分离小三
    $( '.icon-txt-group:first-child .item:nth-child(3)' ).click(function () {
      app.router.loadHtml( 'views/separate-mistress' );
      app.router.loadCss( 'css/separate-mistress' );
      app.router.loadJs( 'js/separate-mistress' );
      page_title.text( '橘子情感 - 分离小三' );
    });
    // 定制爱情
    $( '.icon-txt-group:first-child .item:nth-child(4)' ).click(function () {
      app.router.loadHtml( 'views/custom-love' );
      app.router.loadCss( 'css/custom-love' );
      app.router.loadJs( 'js/custom-love' );
      page_title.text( '橘子情感 - 定制爱情' );
    });
    // 情感论坛
    $( '.icon-txt-group:last-child .item:nth-child(1)' ).click(function () {
      app.router.loadHtml( 'views/emotion-forum' );
      app.router.loadCss( 'css/emotion-forum' );
      app.router.loadJs( 'js/emotion-forum' );
      page_title.text( '橘子情感 - 情感论坛' );
    });
    // 权威专家
    $( '.icon-txt-group:last-child .item:nth-child(2)' ).click(function () {
      app.router.loadHtml( 'views/team' );
      app.router.loadCss( 'css/team' );
      app.router.loadJs( 'js/team' );
      page_title.text( '橘子情感 - 权威专家' );
    });
    // 服务介绍
    $( '.icon-txt-group:last-child .item:nth-child(3)' ).click(function () {
      app.router.loadHtml( 'views/service' );
      app.router.loadCss( 'css/service' );
      app.router.loadJs( 'js/service' );
      page_title.text( '橘子情感 - 服务介绍' );
    });
    // 关于我们
    $( '.icon-txt-group:last-child .item:nth-child(4)' ).click(function () {
      app.router.loadHtml( 'views/about' );
      app.router.loadCss( 'css/about' );
      app.router.loadJs( 'js/about' );
      page_title.text( '橘子情感 - 关于我们' );
    });

  }());
  // End method /loadPage()/

});
