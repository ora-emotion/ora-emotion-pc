/**
 * Created by smpower on 2017/8/17.
 */

function Ora() {

    /* 生成二级导航菜单 */
    Ora.prototype.navList = function () {
        // 获取二级菜单列表
        var navList = $(".nav .nav-block li");
        $.ajax({
            type: "GET",
            url: "data/nav.json",
            success: function (data) {
                var i = 0;
                // 依次将获取到的对象的属性值插入到 li 元素中的 a 标签里
                for (var titleName in data) {
                    $(navList[i]).children("a").text(data[titleName]);  // 通过方括号语法来访问对象的属性值
                    i++;
                }
            }
        });
    };

    /* 页面底部微信公众平台 */
    Ora.prototype.wechatPlatformTxt = function () {
        var wechatPlatformTxt = $("footer .main .bot .left p>.wechat-num");
        $.ajax({
            type: "GET",
            url: "data/footer.json",
            success: function (data) {
                wechatPlatformTxt.text(data.wechatPlatformTxt);
            }
        });
    }

}

/* 页面底部微信公众平台 */
var wechatPlatformTxt = new Ora();
wechatPlatformTxt.wechatPlatformTxt();



function fixedNav() {
    // alert("ok");
    $(window).scroll(function () {
        // 获取滚动条滚动的距离
        var scrollTop = $(window).scrollTop();

        console.log(scrollTop);

        if (scrollTop > 145) {
            $(".nav").css({
                "position": "fixed",
                "top": 0,
                "z-index": 3,
                "box-shadow": "2px 2px 2px rgba(0, 0, 0, .5)"
            });
        } else {
            $(".nav").css({
                "position": "",
                "box-shadow": ""
            });
        }

    });
}
fixedNav();