window.onload = function () {
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

    /* 右侧导航 */
    $(function() {
        // 悬浮窗口
        $(".yb_conct").hover(function() {
            $(".yb_conct").css("right", "0");
            $(".yb_bar .yb_ercode").css('height', '200px');
        }, function() {
            $(".yb_conct").css("right", "-127px");
            $(".yb_bar .yb_ercode").css('height', '53px');
        });
        // 返回顶部
        $(".yb_top").click(function() {
            $("html,body").animate({
                'scrollTop': '0px'
            }, 300)
        });
    });
};
