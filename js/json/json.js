/* 二级导航 */
function navJson() {
    // 获取二级菜单列表
    var navList = $(".nav .nav-block li");

    $.ajax({
        type: "GET",
        url: "data/nav.json",
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
