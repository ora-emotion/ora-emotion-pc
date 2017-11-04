/* 二级导航 */
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



/* 创建隐藏的二级导航菜单 */
function createSecNav() {

    // 创建并插入元素
    var secNavOut = document.createElement("div");
    $(secNavOut).addClass("sec-nav-hide");
    $("body").append(secNavOut);
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
        url: "../data/nav.json",
        success: function (data) {

            var i = 0;
            var j = 0;

            for (var titleName in data.navTitle) {
                $(secNavItem[i]).text(data.navTitle[titleName]);
                i++;
            }
            for (var navSrc in data.src) {
                $(secNavItem[j]).attr("href", "..\/" + data.src[navSrc]);
                j++;
            }

        },
        error: function () {
            alert("请求失败");
        }
    });

}
createSecNav();



/* 三级页面右侧新闻列表标题和下方图片 */
function cisRight() {
    $.ajax({
        type: "GET",
        url: "../data/cis-right.json",
        success: function (data) {

            var recommendList = data.recommendList;

            //--> 标题
            var title = $(".right1>h3");

            //--> 移除标题
            var removeTitle = $(".right1 .jieshao h3");
            removeTitle.remove();

            //--> 插入图片
            var imgWrap = $(".right1 .jieshao span");
            var picLink = $(".right1 .jieshao span a");

            $(picLink).attr("href", "../course.html");  // 设置 a 标签链接为 "../course.html"

            var imgSrc = data.img[0].src;               // 获取图片路径
            var imgClass = data.img[1].class;           // 获取图片类名

            imgWrap.append().before("<a href='../course.html'><img /></a>");         // 将图片插入到子元素第一个位置

            $(".right1 .jieshao img").attr("src", imgSrc).attr("class", imgClass);      // 给图片添加 src 和 class 属性

            title.text(recommendList);      // 插入标题

        }
    });
}
cisRight();

function Ora() {
    /* 页面底部微信公众平台 */
    Ora.prototype.wechatPlatformTxt = function () {
        var wechatPlatformTxt = $("footer .main .bot .left p>.wechat-num");
        $.ajax({
            type: "GET",
            url: "../data/footer.json",
            success: function (data) {
                wechatPlatformTxt.text(data.wechatPlatformTxt);
            }
        });
    }
}

var wechatPlatformTxt = new Ora();
wechatPlatformTxt.wechatPlatformTxt();


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
var rightNav = (function () {

    // 移除页面现有菜单
    $(".yb_conct").remove();



    var rightNavWrap = document.createElement("div");
    $(rightNavWrap).addClass("yb_conct");
    $("body").append(rightNavWrap);

    $.ajax({
        type: "GET",
        url: "../component/right-nav/right-nav.html",
        success: function (data) {
            // console.log(data);
            $(".yb_conct").append(data);

            $(".yb_ercode img").attr("src", "../img/weixin.gif");

        },
        error: function () {
            console.log("数据请求失败！");
        }
    });

}());
