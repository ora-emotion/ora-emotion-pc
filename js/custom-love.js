window.onload = function () {

    // 获取模块一部分元素
    //--> 获取 li 元素
    var moduleOneLi = $(".module-01 .content li");
    //--> 列表标题 moduleOneListTitle
    var moduleOneListTitle = $(".module-01 .content .txt .title");
    //--> 图片右边的箭头 moduleOneArrow
    var moduleOneArrow = $(".module-01 .content li svg.arrow");
    //--> 列表前面的数字符号 moduleOnelistNum
    var moduleOnelistNum = $(".module-01.content .li svg.triangle");
    //--> 获取图片列表的父级元素
    var picsGroup = $(".module-01 .content .pics-group");
    //--> 获取 img 元素
    var pic = $(".module-01 .content .pics-group img");

    /* 模块一动效 */
    function moduleOne() {
        moduleOneListTitle.mouseover(function () {
            //--> 获取当前 li 元素的下标 listIndex
            var listIndex = $(this).parent().parent().index();

            //--> 当前元素的兄弟元素恢复为原来的颜色
            // $(moduleOneLi[listIndex]).siblings().find(".txt .title").animate({
            //     "color": "#2d2d2d"
            // }, 300);

            //--> 当前元素的文字变为红色
            // $(this).animate({
            //     "color": "#fd3232"
            // }, 300);

            //--> 当前 li 的兄弟元素下的小箭头隐藏 - 不透明度 0
            $(moduleOneLi[listIndex]).siblings().find("svg.arrow").animate({
                "opacity": "0"
            }, 300);

            //--> 当前 li 下的小箭头显示 - 不透明度 1
            $(moduleOneLi[listIndex]).find("svg.arrow").animate({
                "opacity": "1"
            }, 300);


            console.log($(pic[listIndex]).siblings());

            $(pic[listIndex]).siblings().css({
                "display": "none"
            }).animate({
                "opacity": "0"
            }, 500);
            $(pic[listIndex]).css({
                "display": "block",
                "opacity": "0"
            }).animate({
                "opacity": "1"
            }, 500);

        });

    }
    moduleOne();
};