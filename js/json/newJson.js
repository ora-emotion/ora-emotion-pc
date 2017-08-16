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
            console.log(picLink);

            $(picLink).attr("href", "../course.html");  // 设置 a 标签链接为 "../course.html"


            title.text(recommendList);      // 插入标题

        }
    });
}
cisRight();