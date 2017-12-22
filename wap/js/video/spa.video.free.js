/*
 * spa.video.free.js
 * Free Video module for SPA
 * 视频预览
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.video.free = (function () {
  var
    configMap = {
      main_html : String()
      + '<div class="video-free-main">'
        + '<div class="play">'
          + '<div class="play-group">'
            + '<video class="active" poster="images/video/video-poster.jpg" controls width="100%" height="550">'
              + '<source src="../media/third-party-intervention.mp4" type="video/mp4">'
            + '</video>'
            + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
              + '<source src="../media/about-blind.mp4" type="video/mp4">'
            + '</video>'
            + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
              + '<source src="../media/normal-question.mp4" type="video/mp4">'
            + '</video>'
            + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
              + '<source src="../media/skills.mp4" type="video/mp4">'
            + '</video>'
            + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
              + '<source src="../media/methods.mp4" type="video/mp4">'
            + '</video>'
            + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
              + '<source src="../media/face.mp4" type="video/mp4">'
            + '</video>'
            + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
              + '<source src="../media/long-distance-love.mp4" type="video/mp4">'
            + '</video>'
            + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
              + '<source src="../media/example.mp4" type="video/mp4">'
            + '</video>'
            + '<video poster="images/video/video-poster.jpg" controls width="100%" height="550">'
              + '<source src="../media/fresh.mp4" type="video/mp4">'
            + '</video>'
          + '</div>'
          + '<div class="txt-group">'
            + '<div class="item active">'
              + '<p class="play-title">预防和分离第三者</p>'
              + '<div class="play-des-group">'
                + '<span class="icon"></span>'
                + '<p class="play-des">如何去预防第三者的插足</p>'
              + '</div>'
            + '</div>'
            + '<div class="item">'
              + '<p class="play-title">相亲的注意事项</p>'
              + '<div class="play-des-group">'
                + '<span class="icon"></span>'
                + '<p class="play-des">如何相亲比较容易成功</p>'
              + '</div>'
            + '</div>'
            + '<div class="item">'
              + '<p class="play-title">和女生相处时的常见问题</p>'
              + '<div class="play-des-group">'
                + '<span class="icon"></span>'
                + '<p class="play-des">如何去和女生相处</p>'
              + '</div>'
            + '</div>'
            + '<div class="item">'
              + '<p class="play-title">挽回的具体操作和技巧</p>'
              + '<div class="play-des-group">'
                + '<span class="icon"></span>'
                + '<p class="play-des">如何挽回你爱的ta</p>'
              + '</div>'
            + '</div>'
            + '<div class="item">'
              + '<p class="play-title">挽回心态和心法</p>'
              + '<div class="play-des-group">'
                + '<span class="icon"></span>'
                + '<p class="play-des">如何构建自己的心态</p>'
              + '</div>'
            + '</div>'
            + '<div class="item">'
              + '<p class="play-title">关于形象建设</p>'
              + '<div class="play-des-group">'
                + '<span class="icon"></span>'
                + '<p class="play-des">如何构建自己的形象</p>'
              + '</div>'
            + '</div>'
            + '<div class="item">'
              + '<p class="play-title">异地恋处理事项</p>'
              + '<div class="play-des-group">'
                + '<span class="icon"></span>'
                + '<p class="play-des">如何把控双方关系</p>'
              + '</div>'
            + '</div>'
            + '<div class="item">'
              + '<p class="play-title">展示面实例讲解</p>'
              + '<div class="play-des-group">'
                + '<span class="icon"></span>'
                + '<p class="play-des">如何建设朋友圈</p>'
              + '</div>'
            + '</div>'
            + '<div class="item">'
              + '<p class="play-title">长期关系保险</p>'
              + '<div class="play-des-group">'
                + '<span class="icon"></span>'
                + '<p class="play-des">如何在生活中保持新鲜感</p>'
              + '</div>'
            + '</div>'
          + '</div>'
        + '</div>'
        + '<div class="split-line"></div>'
        + '<div class="video-list">'
          + '<p class="video-title">选集</p>'
          + '<div class="swiper-container">'
            + '<div class="swiper-wrapper">'
              + '<div class="swiper-slide">'
                + '<div class="item">'
                  + '<img src="images/video/free-video01.png" alt="">'
                  + '<p>预防和分离第三者</p>'
                + '</div>'
              + '</div>'
              + '<div class="swiper-slide">'
                + '<div class="item">'
                  + '<img src="images/video/free-video02.png" alt="">'
                  + '<p>相亲的注意事项</p>'
                + '</div>'
              + '</div>'
              + '<div class="swiper-slide">'
                + '<div class="item">'
                  + '<img src="images/video/free-video03.png" alt="">'
                  + '<p>'
                    + '和女生相处时<br>'
                    + '的常见问题'
                  + '</p>'
                + '</div>'
              + '</div>'
              + '<div class="swiper-slide">'
                + '<div class="item">'
                  + '<img src="images/video/free-video04.png" alt="">'
                  + '<p>挽回的具体操作和技巧</p>'
                + '</div>'
              + '</div>'
              + '<div class="swiper-slide">'
                + '<div class="item">'
                  + '<img src="images/video/free-video05.png" alt="">'
                  + '<p>挽回心态和心法</p>'
                + '</div>'
              + '</div>'
              + '<div class="swiper-slide">'
                + '<div class="item">'
                  + '<img src="images/video/free-video06.png" alt="">'
                  + '<p>关于形象建设</p>'
                + '</div>'
              + '</div>'
              + '<div class="swiper-slide">'
                + '<div class="item">'
                  + '<img src="images/video/free-video07.png" alt="">'
                  + '<p>异地恋处理事项</p>'
                + '</div>'
              + '</div>'
              + '<div class="swiper-slide">'
                + '<div class="item">'
                  + '<img src="images/video/free-video08.png" alt="">'
                  + '<p>展示面实例讲解</p>'
                + '</div>'
              + '</div>'
              + '<div class="swiper-slide">'
                + '<div class="item">'
                  + '<img src="images/video/free-video09.png" alt="">'
                  + '<p>长期关系保险</p>'
                + '</div>'
              + '</div>'
            + '</div>'
          + '</div>'
        + '</div>'
      + '</div>'
    },
    stateMap = { $free_video : null },
    jqueryMap = {},

    setJqueryMap, swiper, onCLick, initModule;

  setJqueryMap = function () {
    var $free_video = stateMap.$free_video;

    jqueryMap = {
      $free_video      : $free_video,
      $video_list_item : $free_video.find('.video-list .swiper-slide .item'),
      $video_group     : $free_video.find('.play .play-group'),
      $txt_group       : $free_video.find('.play .txt-group'),
      $swiper          : $free_video.find('.swiper-container'),
      $preface         : $free_video.siblings('.spa-preface')
    };
  };

  swiper = function () {
    var mySwiper;
    mySwiper = new Swiper(jqueryMap.$swiper, {
      slidesPerView : 2.5
    });
  };

  onClick = function () {
    jqueryMap.$video_list_item.click(function () {
      var _index = $(this).parent().index();

      // 切换当前播放的视频
      jqueryMap.$video_group.find( 'video' ).removeClass( 'active' );
      $( jqueryMap.$video_group.find( 'video' )[_index] ).addClass( 'active' );

      jqueryMap.$txt_group.find( '.item' ).removeClass( 'active' );
      $( jqueryMap.$txt_group.find( '.item' )[_index] ).addClass( 'active' );
    });
  };

  initModule = function ($free_video) {
    stateMap.$free_video = $free_video;
    // $free_video.html(configMap.main_html);
    $free_video.html('free video; free video; free video; free video; ');

    setJqueryMap();
    swiper();
    onClick();

    // 移除页面顶部图片
    jqueryMap.$preface.hide();
  };

  return { initModule : initModule };
}());
