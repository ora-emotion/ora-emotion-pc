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
        var imgSrc = data.img[0].src;               // 获取图片路径
        var imgClass = data.img[1].class;           // 获取图片类名
        imgWrap.append().before("<img />");         // 将图片插入到子元素第一个位置

        $(".right1 .jieshao img").attr("src", imgSrc).attr("class", imgClass);      // 给图片添加 src 和 class 属性

        title.text(recommendList);      // 插入标题

    }
});