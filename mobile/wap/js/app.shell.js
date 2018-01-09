/*
 * app.shell.js
 *
*/

app.shell = (function () {
  var
    css_link, js_src
    ;

  // 加载模块函数
  function router( module, container ){
    container = container || $( '#container' );
    // 请求模块结构
    $.ajax({
      type    : 'GET',
      url     : 'views/' + module + '.html',
      success : function ( data ) {
        $( document ).scrollTop( 0 );
        container.html( data );
      },
      error   : function ( error ) {
        console.log( '请求 HTML 文件失败!' );
      }
    });
    // 请求外部 css 文件
    loadCss( module );
    // 请求外部 js 文件
    loadJs( module );
  }

  // 加载外部 js 文件
  function loadJs( module ){
    $.ajax({
      type   : 'GET',
      url    :'js/' + module + '.js'
      // success: function (data) {
      //     var dynamicJs = $("script.dynamic");
      //     dynamicJs.attr("src", "js/" + module + ".js");
      // },
      // error: function (error) {
      //     console.log("request failed");
      // }
    });
  }

  // 动态加载外部 css 文件
  function loadCss( module ) {
    $.ajax({
    type    : 'GET',
    url     : 'css/' + module + '.css',
    success : function ( data ) {
      css_link = $( 'link.dynamic' );
      css_link.attr( 'href', 'css/' + module + '.css' );
    },
    error   : function ( error ) {
      console.log( '请求外部 css 样式表失败!' );
    }
    });
  }



  // // 左侧导航滑块 - slider bar
  // (function () {
  //   var sliderItem = $( '#bar' ).find( '.list-item' );
  //
  //   // 返回首页
  //   $( sliderItem[0] ).click(function () {
  //     window.location.href = './';
  //     $( 'head title' ).text( '橘子情感 - 首页' );
  //   });
  //
  //   // 挽回爱情
  //   $( sliderItem[1] ).click(function () {
  //     $( 'head script.dynamic' ).remove();
  //     router( 'save-love', $( '#container' ) );
  //     $( 'head title').text( '橘子情感 - 挽回爱情' );
  //   });
  //
  //   // 挽救婚姻
  //   $( sliderItem[2] ).click(function () {
  //     $( 'head script.dynamic' ).remove();
  //     router( 'save-marriage', $( '#container' ) );
  //     $( 'head title' ).text( '橘子情感 - 挽救婚姻' );
  //   });
  //
  //   // 分离小三
  //   $( sliderItem[3] ).click(function () {
  //     $( 'head script.dynamic' ).remove();
  //     router( 'separate-mistress', $( '#container' ) );
  //     $( 'head title' ).text( '橘子情感 - 分离小三' );
  //   });
  //
  //   // 定制爱情
  //   $( sliderItem[4] ).click(function () {
  //     $( 'head script.dynamic' ).remove();
  //     router( 'custom-love', $( '#container' ) );
  //     $( 'head title' ).text( '橘子情感 - 定制爱情' );
  //   });
  //
  //   // 情感论坛
  //   $(sliderItem[5]).click(function () {
  //     router( 'emotion-forum', $( '#container' ) );
  //     $( 'head title' ).text( '橘子情感 - 情感论坛' );
  //   });
  //
  //   // 权威专家
  //   $(sliderItem[6]).click(function () {
  //     router( 'team', $('#container') );
  //     $( 'head title').text('橘子情感 - 权威专家' );
  //   });
  //
  //   // 服务介绍
  //   $(sliderItem[7]).click(function () {
  //     router( 'service', $( '#container' ) );
  //     $( 'head title' ).text( '橘子情感 - 服务介绍' );
  //   });
  //
  //   // 关于我们
  //   $(sliderItem[8]).click(function () {
  //     $( 'head script.dynamic' ).remove();
  //     router( 'about', $( '#container' ) );
  //     $( 'head title' ).text( '橘子情感 - 关于我们' );
  //   });
  //
  // });
  //
  // // 加载二级页面
  // (function(){
  //
  //   // 挽回爱情
  //   $( '.icon-txt-group:first-child .item:nth-child(1)' ).click(function(){
  //     router( 'save-love', $( '#container' ) );
  //     $('head title').text('橘子情感 - 挽回爱情');
  //   });
  //
  //   // 挽救婚姻
  //   $( '.icon-txt-group:first-child .item:nth-child(2)' ).click(function(){
  //     router( 'save-marriage', $( '#container' ) );
  //     $( 'head title' ).text( '橘子情感 - 挽救婚姻' );
  //   });
  //
  //   // 分离小三
  //   $( '.icon-txt-group:first-child .item:nth-child(3)' ).click(function(){
  //     router( 'separate-mistress', $('#container')  );
  //     $( 'head title' ).text( '橘子情感 - 分离小三' );
  //   });
  //
  //   // 定制爱情
  //   $( '.icon-txt-group:first-child .item:nth-child(4)' ).click(function(){
  //     router( 'custom-love', $( '#container' ) );
  //     $( 'head title' ).text( '橘子情感 - 定制爱情' );
  //   });
  //
  //   // 情感课堂
  //   $( '.icon-txt-group:last-child .item:nth-child(1)' ).click(function(){
  //     router( 'emotion-forum', $( '#container' ) );
  //     $( 'head title' ).text( '橘子情感 - 情感课堂' );
  //   });
  //
  //   // 权威专家
  //   $(".icon-txt-group:last-child .item:nth-child(2)").click(function(){
  //     router("team",$("#container"));
  //     $('head title').text('橘子情感 - 权威专家');
  //   });
  //
  //   // 服务介绍
  //   $(".icon-txt-group:last-child .item:nth-child(3)").click(function(){
  //     router("service",$("#container"));
  //     $('head title').text('橘子情感 - 服务介绍');
  //   });
  //
  //   // 关于我们
  //   $(".icon-txt-group:last-child .item:nth-child(4)").click(function(){
  //     router("about",$("#container"));
  //     $('head title').text('橘子情感 - 关于我们');
  //   });
  //
  //
  //   // index - 首页中的链接
  //   //--> 挽回爱情页面
  //   $(".module-02 .main .row:first-child img:first-child").click(function () {
  //     router("save-love", $("#container"));
  //     $('head title').text('橘子情感 - 挽回爱情');
  //   });
  //   //--> 挽救婚姻页面
  //   $(".module-02 .main .row:first-child img:last-child").click(function () {
  //     router("save-marriage", $("#container"));
  //     $('head title').text('橘子情感 - 挽救婚姻');
  //   });
  //   //--> 分离小三页面
  //   $(".module-02 .main .row:last-child img:first-child").click(function () {
  //     router("separate-mistress", $("#container"));
  //     $('head title').text('橘子情感 - 分离小三')
  //   });
  //   //--> 定制爱情页面
  //   $(".module-02 .main .row:last-child img:last-child").click(function () {
  //     router("custom-love", $("#container"));
  //     $('head title').text('橘子情感 - 定制爱情');
  //   });
  //
  // });

  // 加载页面公共部分
  $(document).ready(function () {



    // 请求 footer 数据
    $(function () {
      $.ajax({
        type    : 'GET',
        url     : 'data/footer.json',
        success : function ( data ) {
          // 调用加载 footer 区域的函数
          loadFooter( data );
        },
        error: function ( error ) {
          alert( 'footer.json requests false!' );
        }
      });
    }());

    // 加载 footer 区域
    function loadFooter(data) {
      // 公司名称
      $("footer .ora-name .ora-name-txt").html(data["ora-name"]);
      // 公司电话
      $("footer .ora-phone .ora-phone-txt").html(data["ora-phone"][0]);
      $("footer .ora-phone .ora-phone-num").html(data["ora-phone"][1]);
      // 公司微信公众平台
      $("footer .ora-wechat .ora-wechat-txt").html(data["ora-wechat"][0]);
      $("footer .ora-wechat .ora-wechat-num").html(data["ora-wechat"][1]);
      // 公司地址
      $("footer .ora-address .ora-address-txt").html(data["ora-address"][0]);
      $("footer .ora-address .ora-address-num").html(data["ora-address"][1]);
      // 公司备案号
      $("footer .ora-record .ora-record-txt").html(data["ora-record"][0]);
      $("footer .ora-record .ora-record-num").html(data["ora-record"][1]);
    }

    

  });

}());
