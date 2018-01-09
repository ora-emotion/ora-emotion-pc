/*
 * app.util.js
*/

// 加载导航滑块
$(document).ready(function () {
  var
    index,
    save_love,    save_marriage, separate_mistress, custom_love,
    emotion_forum, team,         service,           about,
    page_title = $( 'head title' ),
    page_list  = $( '#bar .content .list .list-item' ),
    loadPage
    ;

  // 加载左侧导航滑块
  app.navslide.initModule( $( '#bar' ) );

  // 加载二级页面
  loadPage = (function () {
    // 返回首页
    $( page_list[0] ).click(function () {
      app.router.loadHtml( 'views/index' );
      app.router.loadCss( 'css/index' );
      app.router.loadJs( 'js/index' );
      page_title.text( '橘子情感 - 首页' );
    });
    // 挽回爱情
    $( page_list[1] ).click(function () {
      app.router.loadHtml( 'views/save-love' );
      app.router.loadCss( 'css/save-love' );
      app.router.loadJs( 'js/save-love' );
      page_title.text( '橘子情感 - 挽回爱情' );
    });
    // 挽救婚姻
    $( page_list[2] ).click(function () {
      app.router.loadHtml( 'views/save-marriage' );
      app.router.loadCss( 'css/save-marriage' );
      app.router.loadJs( 'js/save-marriage' );
      page_title.text( '橘子情感 - 挽救婚姻' );
    });
    // 分离小三
    $( page_list[3] ).click(function () {
      app.router.loadHtml( 'views/separate-mistress' );
      app.router.loadCss( 'css/separate-mistress' );
      app.router.loadJs( 'js/separate-mistress' );
      page_title.text( '橘子情感 - 分离小三' );
    });
    // 定制爱情
    $( page_list[4] ).click(function () {
      app.router.loadHtml( 'views/custom-love' );
      app.router.loadCss( 'css/custom-love' );
      app.router.loadJs( 'js/custom-love' );
      page_title.text( '橘子情感 - 定制爱情' );
    });
    // 情感论坛
    $( page_list[5] ).click(function () {
      app.router.loadHtml( 'views/emotion-forum' );
      app.router.loadCss( 'css/emotion-forum' );
      app.router.loadJs( 'js/emotion-forum' );
      page_title.text( '橘子情感 - 情感论坛' );
    });
    // 权威专家
    $( page_list[6] ).click(function () {
      app.router.loadHtml( 'views/team' );
      app.router.loadCss( 'css/team' );
      app.router.loadJs( 'js/team' );
      page_title.text( '橘子情感 - 权威专家' );
    });
    // 服务介绍
    $( page_list[7] ).click(function () {
      app.router.loadHtml( 'views/service', $('#container') );
      app.router.loadCss( 'css/service' );
      app.router.loadJs( 'js/service' );
      page_title.text( '橘子情感 - 服务介绍' );
    });
    // 关于我们
    $( page_list[8] ).click(function () {
      app.router.loadHtml( 'views/about' );
      app.router.loadCss( 'css/about' );
      app.router.loadJs( 'js/about' );
      page_title.text( '橘子情感 - 关于我们' );
    });
  }());
});
