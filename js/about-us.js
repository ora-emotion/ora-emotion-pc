/*
* created by smpower
* email: bzsjxhywrf@outlook.com
* github: https://github.com/smpower/
* */

/* 模块三：橘子环境 */
function moduleThree() {
    /* 轮播图 */
    var moduleThreeBanner = new Swiper(".swiper-container", {
        autoplay: 3000,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        loop: true,
    });
}
moduleThree();
/* /模块三：橘子环境 */



/* 模块六：服务步骤 */
function moduleSix() {

    var moduleSixTopItem = $(".module-06 .main .top .main-inner .item");

    function changeIcons() {
        moduleSixTopItem.mouseover(function (event) {
            $(this).children("div.icon").animate({
                "backgroundPositionY": "-142px"
            }, 300);
        });
        moduleSixTopItem.mouseleave(function () {
            $(this).children("div.icon").animate({
                "backgroundPositionY": "0"
            }, 300);
        });
    }
    changeIcons();


    var item = $(".module-06 .main .bot .main-inner .item");

    // function addShadow() {
    //     item.mouseover(function () {
    //         $(this).children("div").animate({
    //
    //         });
    //     });
    // }
    addShadow();

}
moduleSix();
/* /模块六：服务步骤 */