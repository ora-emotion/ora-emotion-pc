$(document).ready(function() {


    // 元素到可视区域时再显示
	(function () {
        function lazyLoad() {
            /**
             * Created by smpower on 2017/8/3.
             * email: bzsjxhywrf@outlook.com
             * GitHub: https://github.com/smpower/
             */

            // 显示微信二维码
            function qrcodeWechat() {
                // 淡入
                function wechatFadeIn() {
                    $(".wechat").fadeIn(300);
                }
                // 淡出
                function wechatFadeOut() {
                    $(".wechat").fadeOut(300);
                }
                // 划过图标显示
                $(".qrcode-wechat img").mouseover(function () {
                    wechatFadeIn();
                });
                $(".qrcode-wechat img").mouseout(function () {
                    wechatFadeOut();
                });
                // 划过文字显示
                $(".pull-right .txt p:first-child").mouseover(function () {
                    wechatFadeIn();
                });
                $(".pull-right .txt p:first-child").mouseout(function () {
                    wechatFadeOut();
                });
            }
            qrcodeWechat();


            // 获取当前文档高度
            var documentHeight = $(document).height();
            // 获取当前屏幕高度
            var windowHeight = $(window).height();
            // 获取第七个模块距离屏幕顶端的高度
            var moduleSevenOffsetTop = $(".module-07 .main").offset().top;
            console.log(moduleSevenOffsetTop);

            $(window).scroll(function () {
                // 获取滚动条滚动的距离
                var scrollTop = $(window).scrollTop();
                // console.log(scrollTop);

                if (scrollTop > (moduleSevenOffsetTop - windowHeight/3)) {
                    // alert("ok");
                    $(".module-07 .main .top").animate({
                        left: "13.5%",
                        opacity: "1"
                    }, 1000);
                    $(".module-07 .main .bot").animate({
                        left: "0",
                        opacity: "1"
                    }, 1000);
                }
            });
        }
        lazyLoad();
    })();








    $(".li21").mouseover(function() {
		$(".li11").css({
			"border": "2px slide #FFFFFF",
			"box-shadow": "0 5px 10px #FFFFFF",
		});
	});
	$(".li22").mouseover(function() {
		$(".li12").css({
			"border": "2px slide #ffffff",
			"box-shadow": "0 5px 10px #ffffff"
		});
	});
	$(".li23").mouseover(function() {
		$(".li13").css({
			"border": "2px slide #ffffff",
			"box-shadow": "0 5px 10px #ffffff"
		});
	});
	$(".li24").mouseover(function() {
		$(".li14").css({
			"border": "2px slide #ffffff",
			"box-shadow": "0 5px 10px #ffffff"
		});
	});
	$(".back").mouseout(function() {
		$(".li11").css({
			"border": "2px slide #cccccc",
			"box-shadow": "none"
		});
		$(".li12").css({
			"border": "2px slide #cccccc",
			"box-shadow": "none"
		});
		$(".li13").css({
			"border": "2px slide #cccccc",
			"box-shadow": "none"
		});
		$(".li14").css({
			"border": "2px slide #cccccc",
			"box-shadow": "none"
		});
	});
	$(".li11").mouseover(function() {
		$(".li11").css({
			"border": "2px slide #ffffff",
			"box-shadow": "0 5px 10px #ffffff"
		});
	});
	$(".li12").mouseover(function() {
		$(".li12").css({
			"border": "2px slide #ffffff",
			"box-shadow": "0 5px 10px #ffffff"
		});
	});
	$(".li13").mouseover(function() {
		$(".li13").css({
			"border": "2px slide #ffffff",
			"box-shadow": "0 5px 10px #ffffff"
		});
	});
	$(".li14").mouseover(function() {
		$(".li14").css({
			"border": "2px slide #ffffff",
			"box-shadow": "0 5px 10px #ffffff"
		});
	});
	$(".li11").mouseout(function() {
		$(".li11").css({
			"border": "2px slide #cccccc",
			"box-shadow": "none"
		});
	});
	$(".li12").mouseout(function() {
		$(".li12").css({
			"border": "2px slide #cccccc",
			"box-shadow": "none"
		});
	});
	$(".li13").mouseout(function() {
		$(".li13").css({
			"border": "2px slide #cccccc",
			"box-shadow": "none"
		});
	});
	$(".li14").mouseout(function() {
		$(".li14").css({
			"border": "2px slide #cccccc",
			"box-shadow": "none"
		});
	});

	/* 导师部分 - 轮播图 */
    // (function () {
    //     var n = 0;                                          // 记录索引
    //     var mentorItem = $(".mentor-item .inner .item");
    //     var prevBtn = $("#prevTeam");
    //     var nextBtn = $("#nextTeam");
    //     var timer = setInterval(run, 3000);
    //
    //     // run();
    //
    //     function run(num) {
    //         n++;
    //         if (n == mentorItem.length) {
    //             n = 0;
    //         }
    //
    //         $(mentorItem[n]).siblings().removeClass("active");
    //         $(mentorItem[n]).addClass("active");
    //         $(mentorItem[n]).find("img").animate({
    //             top: "-45px"
    //         }, "fast");
    //     }
    //     // 点击按钮向前翻页
    //     prevBtn.click(function () {
    //         n--;
    //         if (n < 0) {
    //             n = mentorItem.length - 1;
    //             $(mentorItem[n]).addClass("active").siblings().removeClass("active");
    //         } else {
    //             $(mentorItem[n]).addClass("active").siblings().removeClass("active");
    //         }
    //         // console.log(n);
    //     });
    //
    //     // 点击按钮，向后翻页
    //     nextBtn.click(function () {
    //         n++;
    //         console.log(n);
    //         if (n === mentorItem.length) {
    //             n = 0;
    //             $(mentorItem[n]).addClass("active").siblings().removeClass("active");
    //         }
    //         $(mentorItem[n]).addClass("active").siblings().removeClass("active");
    //         // console.log(n);
    //     })
    //
    // })();
});