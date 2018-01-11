/*
 * app.router.js
 *
*/

// Start method /app.router()/
// 功能 ：
//   * 加载 HTML、CSS 和 JavaScript 文件。
// 语句 ：
//   * $(document).scrollTop(0) 负责在加载新页面后，使滚动条滚动到页面顶部。
// 方法 ：
//   * app.router.loadHtml() - 加载 HTML 文件。
//   * app.router.loadCss()  - 加载 CSS 文件。
//   * app.router.loadJs()   - 加载 JavaScript 文件。
// 示例 ：
//   * app.router.loadHtml( 'views/team' );
//     加载 team.html 文件，该 HTML 文件位于根目录下 views 文件夹内，不接受文件名
//     后缀。
//   * app.router.loadCss( 'css/team' );
//     加载 team.css 文件，该 CSS 文件位于根目录下 css 文件夹内，不接受文件名后缀。
//   * app.router.loadJs( 'js/team' );
//     加载 team.js 文件，该 js 文件位于根目录下 js 文件夹内，不接受文件名后缀。
//
app.router = (function () {
  var
    loadHtml, loadJs, loadCss,
    css_link   = $( 'head link.dynamic' )
    ;

  loadHtml = function ( moduleHtml, $container ) {
    $container = $container || $( '#container' );
    $.ajax({
      type    : 'GET',
      url     : moduleHtml + '.html',
      success : function ( data ) {
        $( document ).scrollTop( 0 );
        $container.html( data );
      },
      error   : function ( error ) {
        console.log( 'to load html failed!' );
      }
    });
  };

  loadCss = function ( moduleCss ) {
    $.ajax({
      type    : 'GET',
      url     : moduleCss + '.css',
      success : function ( data ) {
        css_link.attr( 'href', moduleCss + '.css' );
      },
      error   : function ( error ) {
        console.log( 'to load css file failed!' );
      }
    });
  };

  loadJs = function ( moduleJs ) {
    $.ajax({
      type    : 'GET',
      url     : moduleJs + '.js',
      success : function ( data ) {
        console.log( 'to load js file successful!' );
      },
      error   : function ( error ) {
        console.log( 'to load js file failed!' );
      }
    });
  };

  return {
    loadHtml : loadHtml,
    loadJs   : loadJs,
    loadCss  : loadCss
  };
}());
// End method /app.router()/
