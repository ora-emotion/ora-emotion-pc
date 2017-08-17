/**
 * Created by smpower on 2017/8/17.
 */

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
                "z-index": 2
            });
        } else {
            $(".nav").css({
                "position": ""
            });
        }

    });
}
fixedNav();