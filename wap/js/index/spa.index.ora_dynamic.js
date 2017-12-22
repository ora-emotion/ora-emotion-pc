/*
 * spa.index.ora_dynamic.js
 * Ora Dynamic module for Index
 * 首页 - 橘子动态模块
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.index.ora_dynamic = (function () {
  var
    configMap = {
      news_arr : [
        { news : 'new_01' },
        { news : 'new_02' },
        { news : 'new_03' },
        { news : 'new_04' },
        { news : 'new_05' },
        { news : 'new_06' },
        { news : 'new_07' },
        { news : 'new_08' },
        { news : 'new_09' },
        { news : 'new_10' },
        { news : 'new_11' },
        { news : 'new_12' }
      ],
      ora_dynamic_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">橘子动态</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="index-ora-dynamic-main">'
          + '<div class="swiper-container">'
            + '<div class="swiper-wrapper">'
              + '<div class="swiper-slide">'
                + '<div class="title">'
                  + '<p>客户远道而来，送来锦旗向导师团队致谢</p>'
                + '</div>'
                + '<div class="txt-content">'
                  + '<div class="column">'
                    + '<p class="para">'
                      + '客户张女士手持精致的感谢锦旗，来到橘子情感。这已经不是第一'
                      + '次有客户亲自登门感谢了，总有远道而来的客户热情上门，表达感'
                      + '谢。'
                    + '</p>'
                    + '<p class="more">查看更多>>></p>'
                  + '</div>'
                  + '<div class="column">'
                    + '<img src="images/index/ora-dynamic-pic01.png">'
                  + '</div>'
                + '</div>'
              + '</div>'
              // + '<div class="swiper-slide">'
              //   + '<div class="title">'
              //     + '<p>主导师团队分析学院情况以及制定方案</p>'
              //   + '</div>'
              //   + '<div class="txt-content">'
              //     + '<div class="column">'
              //       + '<p class="para">'
              //         + '通过总结近一周的学员情况，针对用户的普遍问题和棘手问题，'
              //         + '主导师团队在做详细全面的情况分析，以及结合实际研发更高效'
              //         + '的理论，帮助用户解决问题。'
              //       + '</p>'
              //       + '<p class="more">查看更多>>></p>'
              //     + '</div>'
              //     + '<div class="column">'
              //       + '<img src="images/index/ora-dynamic-pic02.png">'
              //     + '</div>'
              //   + '</div>'
              // + '</div>'
              + '<div class="swiper-slide">'
                + '<div class="title">'
                  + '<p>第六届情感导师行业交流指导会</p>'
                + '</div>'
                + '<div class="txt-content">'
                  + '<div class="column">'
                    + '<p class="para">'
                      + '山东省社会各行业跨界交流会在山东省青岛市市南区召开， 23大'
                      + '行业参加了交流会。'
                    + '</p>'
                    + '<p class="more">查看更多>>></p>'
                  + '</div>'
                  + '<div class="column">'
                    + '<img src="images/index/ora-dynamic-pic03.png">'
                  + '</div>'
                + '</div>'
              + '</div>'
              + '<div class="swiper-slide">'
                + '<div class="title">'
                  + '<p>“暖爱计划”婚恋知识公益讲座报道</p>'
                + '</div>'
                + '<div class="txt-content">'
                  + '<div class="column">'
                    + '<p class="para">'
                      + '由橘子情感举办的“暖爱计划”婚恋知识巡回公益讲座,在山东站如'
                      + '火如荼地进行着。'
                    + '</p>'
                    + '<p class="more">查看更多>>></p>'
                  + '</div>'
                  + '<div class="column">'
                    + '<img src="images/index/ora-dynamic-pic04.png">'
                  + '</div>'
                + '</div>'
              + '</div>'
              + '<div class="swiper-slide">'
                + '<div class="title">'
                  + '<p>联合青岛大学商学院举办创业就业经验分享讲座</p>'
                + '</div>'
                + '<div class="txt-content">'
                  + '<div class="column">'
                    + '<p class="para">'
                      + '本次讲座是由橘子情感与青岛大学商学院联合合作举办，意在为即'
                      + '将步入社会的新兴力量给出正确、实用的创业就业建议。'
                    + '</p>'
                    + '<p class="more">查看更多>>></p>'
                  + '</div>'
                  + '<div class="column">'
                    + '<img src="images/index/ora-dynamic-pic05.png">'
                  + '</div>'
                + '</div>'
              + '</div>'
              + '<div class="swiper-slide">'
                + '<div class="title">'
                  + '<p>联合山东省创业中心举办中俄新兴行业交流会</p>'
                + '</div>'
                + '<div class="txt-content">'
                  + '<div class="column">'
                    + '<p class="para">'
                      + '此次会议涉猎各个新兴行业，尤其是情感咨询培训行业，得到多方'
                      + '面的重视，俄罗斯代表提出...'
                    + '</p>'
                    + '<p class="more">查看更多>>></p>'
                  + '</div>'
                  + '<div class="column">'
                    + '<img src="images/index/ora-dynamic-pic06.png">'
                  + '</div>'
                + '</div>'
              + '</div>'
            + '</div>'
          + '</div>'
          + '<div class="swiper-pagination"></div>'
        + '</div>',

        // 轮播图配置项
        //   * swiper_autoplay     : 自动轮播间隔时间 - 1000 ms
        //   * swiper_initialSlide : 设定初始化时 slide 的索引
        swiper_autoplay     : 10000,
        swiper_initialSlide : 0
    },
    stateMap = { $ora_dynamic : null },
    jqueryMap = {},
   setJqueryMap, onClickSlide, dynamicBanner, initModule;

  // setJqueryMap() - 缓存 jQUery 集合
  setJqueryMap = function () {
    var $ora_dynamic = stateMap.$ora_dynamic;
    jqueryMap = {
      $ora_dynamic : $ora_dynamic,
      $swiper      : $ora_dynamic.find('.swiper-container'),
      $slide       : $ora_dynamic.find('.swiper-slide'),
      $pagination  : $ora_dynamic.find('.swiper-pagination')
    };
  };

  // Start : onClickSlide()
  // 功能  : 跳转到对应新闻页面
  //
  onClickSlide = function () {
    var
      slide    = jqueryMap.$slide,
      news_arr = configMap.news_arr,
      index;

    slide.click(function () {
      index = $(this).index();
      console.log(index);

      switch (index) {
        case 0 :
          $.uriAnchor.setAnchor({ news : 'new_08' });
          break;
        case 1 :
          $.uriAnchor.setAnchor({ news : 'new_01' });
          break;
        case 2 :
          $.uriAnchor.setAnchor({ news : 'new_06' });
          break;
        case 3 :
          $.uriAnchor.setAnchor({ news : 'new_14' });
          break;
        case 4 :
          $.uriAnchor.setAnchor({ news : 'new_15' });
          break;
        default:
          break;
      }
      // $.uriAnchor.setAnchor(news_arr[index]);
    });

  };
  // End : onClickSlide()

  // Start : dynamicBanner() - 轮播图
  //
  dynamicBanner = function () {
    var mySwiper = new Swiper(jqueryMap.$swiper, {
      autoplay     : configMap.swiper_autoplay,
      initialSlide : configMap.swiper_initialSlide,
      pagination   : jqueryMap.$pagination
    });

    onClickSlide();
  };
  // End : dynamicBanner() - 轮播图

  // initModule() - 初始化模块
  initModule = function ($ora_dynamic) {
    stateMap.$ora_dynamic = $ora_dynamic;
    $ora_dynamic.html(configMap.ora_dynamic_html);
    setJqueryMap();

    dynamicBanner();
  };

  // 导出公开方法 initModule()
  return { initModule : initModule };
}());
