
// 显示微信二维码
// function qrcodeWechat() {
//     // 淡入
//     function wechatFadeIn() {
//         $(".wechat").fadeIn(300);
//     }
//     // 淡出
//     function wechatFadeOut() {
//         $(".wechat").fadeOut(300);
//     }
//     // 划过图标显示
//     $(".qrcode-wechat img").mouseover(function () {
//         wechatFadeIn();
//     });
//     $(".qrcode-wechat img").mouseout(function () {
//         wechatFadeOut();
//     });
//     // 划过文字显示
//     $(".pull-right .txt p:first-child").mouseover(function () {
//         wechatFadeIn();
//     });
//     $(".pull-right .txt p:first-child").mouseout(function () {
//         wechatFadeOut();
//     });
// }
// qrcodeWechat();

/* 右侧导航 */
$(function() {
    // 悬浮窗口
    $(".yb_conct").hover(function() {
        $(".yb_conct").css("right", "0");
        $(".yb_bar .yb_ercode").css('height', '200px');

        // 返回顶部
        $(this).find(".yb_top").click(function () {
            $("html,body").animate({
                'scrollTop': '0px'
            }, 300);
        });

    }, function() {
        $(".yb_conct").css("right", "-127px");
        $(".yb_bar .yb_ercode").css('height', '53px');
    });
});


function navJson() {
    // 获取二级菜单列表
    var navList = $(".nav .nav-block li");

    $.ajax({
        type: "GET",
        url: "../data/nav.json",
        success: function (data) {
            var i = 0;
            // 依次将获取到的对象的属性值插入到 li 元素中的 a 标签里
            for (var titleName in data.navTitle) {
                $(navList[i]).children("a").text(data.navTitle[titleName]);  // 通过方括号语法来访问对象的属性值
                i++;
            }
        }
    });
}
navJson();

//移动端跳转页面

//$(document).ready(function(){
//	//获取当前屏幕宽度
//	var windowWidth = $(window).width();
//
//	//判断移动端，跳转页面
//	if(windowWidth<=980){
//		self.location='../mobile/wap/index.html';
//	}
//});