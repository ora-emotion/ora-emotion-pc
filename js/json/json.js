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
                for (var titleName in data.navTitle) {
                    $(navList[i]).children("a").text(data.navTitle[titleName]);  // 通过方括号语法来访问对象的属性值
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
    };

}



/* 页面底部微信公众平台 */
var wechatPlatformTxt = new Ora();
wechatPlatformTxt.wechatPlatformTxt();


/* 创建隐藏的二级导航菜单 */
function createSecNav() {

    // 创建并插入元素
    var secNavOut = document.createElement("div");
    $(secNavOut).addClass("sec-nav-hide");
    $("body>div:first-child").append(secNavOut);
    // 创建并插入元素
    var secNavInner = document.createElement("div");
    $(secNavInner).addClass("sec-nav-inner");
    $(secNavOut).append(secNavInner);
    // 创建并插入元素
    for (var i = 0; i < 9; i++) {
        $(secNavInner).append(document.createElement("a"));
    }

    // 获取 a 元素
    var secNavItem = $(".sec-nav-hide .sec-nav-inner a");

    // 获取 json 数据插入到 a 元素中
    $.ajax({
        type: "GET",
        url: "data/nav.json",
        success: function (data) {

            // 获取隐藏二级导航菜单的 a 元素
            var secNavItem = $(".sec-nav-hide .sec-nav-inner a");
            // 获取二级导航菜单当前 li 元素
            var navLi = $(".nav .nav-block .active");
            // 获取二级导航菜单当前 li 元素的索引值
            var _index = $(navLi).index();

            var i = 0;
            var j = 0;

            for (var titleName in data.navTitle) {
                $(secNavItem[i]).text(data.navTitle[titleName]);
                i++;
            }
            for (var navSrc in data.src) {
                $(secNavItem[j]).attr("href", data.src[navSrc]);
                j++;
            }

            $($(secNavItem)[_index]).addClass("active");

        },
        error: function () {
            alert("请求失败");
        }
    });

}
createSecNav();

/* 页面滚动到指定位置显示隐藏的二级导航菜单 */
function fixedNav() {
    $(window).scroll(function () {

        var scrollTop = $(window).scrollTop();

        if (scrollTop > 1500) {
            $(".sec-nav-hide").css({
                opacity: 1
            });
        } else {
            $(".sec-nav-hide").css({
                opacity: 0
            });
        }

    });
}
fixedNav();



/* 页面右侧菜单 */
function rightNav() {

    // 移除页面现有菜单
    $(".yb_conct").remove();

    var rightNavWrap = document.createElement("div");
    $(rightNavWrap).addClass("floating_ck");
    $("body>div:first-child").append(rightNavWrap);

    $.ajax({
        type: "GET",
        url: "component/right-nav/right-nav.html",
        success: function (data) {
            $(".floating_ck").append(data);
        },
        error: function () {
            console.log("数据请求失败！");
        }
    })

}
rightNav();
// 右侧菜单返回顶部按钮
function gotoTop(acceleration,stime) {
    acceleration = acceleration || 0.1;
    stime = stime || 10;
    var x1 = 0;
    var y1 = 0;
    var x2 = 0;
    var y2 = 0;
    var x3 = 0;
    var y3 = 0;
    if (document.documentElement) {
        x1 = document.documentElement.scrollLeft || 0;
        y1 = document.documentElement.scrollTop || 0;
    }
    if (document.body) {
        x2 = document.body.scrollLeft || 0;
        y2 = document.body.scrollTop || 0;
    }
    var x3 = window.scrollX || 0;
    var y3 = window.scrollY || 0;

    var x = Math.max(x1, Math.max(x2, x3));
    var y = Math.max(y1, Math.max(y2, y3));

    var speeding = 1 + acceleration;
    window.scrollTo(Math.floor(x / speeding), Math.floor(y / speeding));

    if(x > 0 || y > 0) {
        var run = "gotoTop(" + acceleration + ", " + stime + ")";
        window.setTimeout(run, stime);
    }
}