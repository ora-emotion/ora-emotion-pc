/*
 * save-marriage.js
 *
*/

// 初始化模块标题
var insertModuleTitle = $(function (){

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
    for (var title in data.page["save-marriage"]) {
      $($(".module")[i]).find(".title .module-title").html(data.page["save-marriage"][title]);
      i++;
    }
  }
}());

// 动态更换头图图片
var changePrefaceImg = (function (){
  var prefaceImg = $(".preface .banner-img img");
  prefaceImg.attr("src", "images/save-marriage/banner.png");
}());

//列表切换
var moduleTwoBanner = (function (){
  var moduleTwoSwiper = new Swiper('.module-06 .main .swiper-container', {
    autoplay: 10000,                     // 禁止自动播放
    pagination : '.swiper-pagination',   // 显示分页器
    paginationClickable :true,           // 分页器可点击
  });
}());

//下拉列表
var xiala = $(function(){
  $( '.module-04 label' ).click(function () {
    $( '.module-04 section' ).removeClass( 'active' );
  });
	$('.label1').click(function(){
		$('.content1').css({
			"height":"1.8rem",
			"width":"5.26rem",
			"background":"url(images/save-marriage/erro-bgimg.png) center center no-repeat",
			"background-size":"100% 100%"
		});
		$('.content2').css("height","0");
		$('.content3').css("height","0");
		$('.content4').css("height","0");
		$('.content5').css("height","0");
		$('.content6').css("height","0");
	});
	$('.label2').click(function(){
		$('.content2').css({
			"height":"1.8rem",
			"width":"5.26rem",
			"background":"url(images/save-marriage/erro-bgimg.png) center center no-repeat",
			"background-size":"100% 100%"
		});
		$('.content1').css("height","0");
		$('.content3').css("height","0");
		$('.content4').css("height","0");
		$('.content5').css("height","0");
		$('.content6').css("height","0");
	});
	$('.label3').click(function(){
		$('.content3').css({
			"height":"1.8rem",
			"width":"5.26rem",
			"background":"url(images/save-marriage/erro-bgimg.png) center center no-repeat",
			"background-size":"100% 100%"
		});
		$('.content1').css("height","0");
		$('.content2').css("height","0");
		$('.content4').css("height","0");
		$('.content5').css("height","0");
		$('.content6').css("height","0");
	});
	$('.label4').click(function(){
		$('.content4').css({
			"height":"1.8rem",
			"width":"5.26rem",
			"background":"url(images/save-marriage/erro-bgimg.png) center center no-repeat",
			"background-size":"100% 100%"
		});
		$('.content1').css("height","0");
		$('.content2').css("height","0");
		$('.content3').css("height","0");
		$('.content5').css("height","0");
		$('.content6').css("height","0");
	});
	$('.label5').click(function(){
		$('.content5').css({
			"height":"1.8rem",
			"width":"5.26rem",
			"background":"url(images/save-marriage/erro-bgimg.png) center center no-repeat",
			"background-size":"100% 100%"
		});
		$('.content1').css("height","0");
		$('.content2').css("height","0");
		$('.content3').css("height","0");
		$('.content4').css("height","0");
		$('.content6').css("height","0");
	});
	$('.label6').click(function(){
		$('.content6').css({
			"height":"1.8rem",
			"width":"5.26rem",
			"background":"url(images/save-marriage/erro-bgimg.png) center center no-repeat",
			"background-size":"100% 100%"
		});
		$('.content1').css("height","0");
		$('.content2').css("height","0");
		$('.content3').css("height","0");
		$('.content4').css("height","0");
		$('.content5').css("height","0");
	});
});

$(document).ready(function () {
  var cis = $( '.module-07 .main' );

  cis.find( '.top' ).click(function () {
    app.router.loadHtml( 'views/dry-case/cis45' );
    app.router.loadCss( 'css/dry-case' );
  });
  cis.find( '.bottom' ).click(function () {
    app.router.loadHtml( 'views/dry-case/cis44' );
    app.router.loadCss( 'css/dry-case' );
  });
});
