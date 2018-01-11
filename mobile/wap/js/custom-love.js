/*
 *
 * 定制爱情 - js
 *
 **/


// // 初始化模块标题
// var insertModuleTitle = $(function (){
//
//     // 请求模块标题模板
//     $(function () {
//
//         $.ajax({
//             type: "get",
//             url: "components/module-title/module-title.html",
//             success: function (dataHTML) {
//                 // 插入模板到页面
//                 $(".module").prepend(dataHTML);
//             },
//             error: function (error) {
//                 alert("request error");
//             }
//         });
//
//     }());
//
//     // 请求模块模块标题数据
//     $(function () {
//
//         $.ajax({
//             type: "get",
//             url: "data/module-title.json",
//             success: function (data) {
//                 insertModuleTitle(data);
//             },
//             error: function (error) {
//                 alert("requests error");
//             }
//         });
//
//     }());
//
//     // 插入模块标题
//     function insertModuleTitle(data) {
//
//         // 动态渲染模板标题
//         var moduleTitle = $(".module .title .module-title");
//         var i = 0;
//         for (var title in data.page["custom-love"]) {
//             $($(".module")[i]).find(".title .module-title").html(data.page["custom-love"][title]);
//             i++;
//         }
//     }
//
// }());

// // 动态更换头图图片
// var changePrefaceImg = $(function (){
//
//     var prefaceImg = $(".preface .banner-img img");
//     prefaceImg.attr("src", "images/custom-love/preface.png");
//
// }());
//
// // 轮播图：模块一 - 单身原因
// $(function (){
//     var mySwiper = new Swiper('.module-01 .swiper-container', {
//         // slidesPerView : 1,
//         // centeredSlides : false,
//         slidesPerView: 'auto',
//         freeMode: true,
//     });
// }());
//
// // 轮播图：模块二 - 错误做法导致后果
// $(function () {
//     var tabContentItem = $(".module-02 .main .swiper-container .swiper-wrapper .swiper-slide");
//
//     var moduleTwoSwiper = new Swiper('.module-02 .main .tabs-container',{
//         onSlideChangeStart: function(){
//             $(".module-02 .tabs .active").removeClass('active');
//             $(".module-02 .tabs span").eq(moduleTwoSwiper.activeIndex).addClass('active');
//         }
//     });
//
//     $(".module-02 .tabs span").on('touchstart mousedown',function(e){
//         e.preventDefault();
//         $(".module-02 .tabs .active").removeClass('active');
//         $(this).addClass('active');
//         moduleTwoSwiper.slideTo( $(this).index() );
//     });
//
//     $(".module-05 .tabs span").click(function(e){
//         e.preventDefault();
//     });
// }());
//
// // 查看更多：模块三
// $(function () {
//
//     var configMap = {
//             content_extend_height : 1120,
//             content_retract_height : 410,
//             content_extend_time : 300
//         },
//         btn = $('.module-03 .more');
//
//     btn.click(function () {
//         $('.module-03 .main').animate({ height : configMap.content_extend_height });
//     });
//
// }());
//
// // 轮播图：模块五 - 橘子优势
// $(function () {
//     var tabContentItem = $(".module-05 .main .swiper-container .swiper-wrapper .swiper-slide");
//
//     var moduleFiveSwiper = new Swiper('.module-05 .main .tabs-container',{
//         autoHeight: true,
//         onSlideChangeStart: function(){
//             $(".module-05 .tabs .active").removeClass('active');
//             $(".module-05 .tabs span").eq(moduleFiveSwiper.activeIndex).addClass('active');
//         }
//     });
//
//     $(".module-05 .tabs span").on('touchstart mousedown',function(e){
//         e.preventDefault();
//         $(".module-05 .tabs .active").removeClass('active');
//         $(this).addClass('active');
//         moduleFiveSwiper.slideTo( $(this).index() );
//     });
//
//     $(".module-05 .tabs span").click(function(e){
//         e.preventDefault();
//     });
// });

