var
  routerHtml,        loadJs,           loadCss,
  insertModuleTitle, changePrefaceImg, moduleTwoBanner,
  moduleSevenLink,
  cisLink     = $( '.module-07 .main' ),
  cssLink     = $( 'head link.dynamic' ),
  jsLink      = $( 'head script.dynamic' ),
  $container  = $( '#container' ),
  $prefaceImg = $( '.preface' )
  ;

// 加载 HTML 文件
routerHtml = function ( module ) {
  $.ajax({
    type    : 'GET',
    url     : 'views/' + module + '.html',
    success : function ( data ) {
      $(document).scrollTop(0);
      $container.html( data );
    },
    error   : function ( data ) {
      console.log( '加载 HTML 文件失败!' );
    }
  });
};

// 加载 JavaScript 文件
loadJs = function ( module ) {
  $.ajax({
    type    : 'GET',
    url     : 'js/' + module + '.js',
    success : function ( data ) {
      jsLink.attr( 'src', 'js/' + module + '.js' );
    },
    error   : function ( error ) {
      console.log( '加载 JavaScript 文件失败!' );
    }
  });
};

// 加载 CSS 文件
loadCss = function ( module ) {
  $.ajax({
    type    : 'GET',
    url     : 'css/' + module + '.css',
    success : function ( data ) {
      cssLink.attr( 'href', 'css/' + module + '.css' );
    },
    error   : function ( error ) {
      console.log( '加载 CSS 文件失败!' );
    }
  });
};

// 初始化模块标题
var insertModuleTitle = $(function (){
  // 请求模块标题模板
  $(function () {
    $.ajax({
      type: "get",
      url: "components/module-title/module-title.html",
      success: function (dataHTML) {
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
    for (var title in data.page["separate-mistress"]) {
      $($(".module")[i]).find(".title .module-title").html(data.page["separate-mistress"][title]);
      i++;
    }
  }
}());

// 动态更换头图图片
var changePrefaceImg = $(function (){
  var prefaceImg = $(".preface .banner-img img");
  prefaceImg.attr("src", "images/separate-mistress/banner.png");
}());

//列表切换
var moduleTwoBanner = $(function (){
  var moduleTwoSwiper = new Swiper('.module-03 .main .swiper-container', {
    autoplay: 10000,                     // 禁止自动播放
    pagination : '.swiper-pagination',   // 显示分页器
    paginationClickable :true,           // 分页器可点击
  });
});

//隐藏显示
$(function(){
	$(".chakan a").click(function(){
		$(".module-06 .main").css({"height":"10.88rem","overflow":""});
		$(".chakan").hide();
	});
});

moduleSevenLink = $(function () {
  $( cisLink ).find( '.top' ).click(function () {
    routerHtml( 'dry-case/cis40' );
    loadCss( 'dry-case' );
  });

  $( cisLink ).find( '.bottom' ).click(function () {
    routerHtml( 'dry-case/cis41' );
    loadCss( 'dry-case' );
  });
}());
