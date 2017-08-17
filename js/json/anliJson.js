/* 二级导航 */
function navJson() {
    // 获取二级菜单列表
    var navList = $(".nav .nav-block li");

    $.ajax({
        type: "GET",
        url: "../data/nav.json",
        success: function (data) {
            $(navList[0]).children("a").text(data.index);
            $(navList[1]).children("a").text(data.saveLove);
            $(navList[2]).children("a").text(data.saveMarriage);
            $(navList[3]).children("a").text(data.separateMistress);
            $(navList[4]).children("a").text(data.customLove);
            $(navList[5]).children("a").text(data.emotionForum);
            $(navList[6]).children("a").text(data.focusTeam);
            $(navList[7]).children("a").text(data.course);
            $(navList[8]).children("a").text(data.aboutUs);
        }
    });
}
navJson();

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