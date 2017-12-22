/*
 * spa.forum.js
 * emotion forum module for SPA
 * 情感论坛
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.forum = (function () {
  var
    configMap = {
      main_html : String()
        // 模块标题 - 橘子论坛
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">橘子论坛</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'

        // 页面主体
        + '<div class="forum-main">'
          // 页面上部分
          + '<div class="forum-main-top">'
            // 页面上部分左侧轮播图
            + '<div class="forum-main-top-left">'
              + '<div class="swiper-container">'
                + '<div class="swiper-wrapper">'
                  + '<div class="swiper-slide">'
                    + '<div class="item">'
                      + '<a href="#!page=book"><img src="images/forum/swiper-pic01.png" alt="橘子情感" />'
                      + '</a>'
                    + '</div>'
                  + '</div>'
                  + '<div class="swiper-slide">'
                    + '<div class="item">'
                      + '<a href="#!case=case_31"><img src="images/forum/swiper-pic02.png" alt="橘子情感" />'
                      + '</a>'
                    + '</div>'
                  + '</div>'
                  + '<div class="swiper-slide">'
                    + '<div class="item">'
                      + '<a href="#!case=case_32"><img src="images/forum/swiper-pic03.png" alt="橘子情感" />'
                      + '</a>'
                    + '</div>'
                  + '</div>'
                + '</div>'
              + '</div>'
              + '<div class="swiper-pagination"></div>'
            + '</div>'
            // 页面上部分右侧内容
            + '<div class="forum-main-top-right">'
              + '<div class="forum-main-top-right-top">'
                + '<a href="#!page=service_intro">'
                  + '<img src="images/forum/save-plan.png" alt="橘子情感--挽爱计划" />'
                + '</a>'
              + '</div>'
              + '<div class="forum-main-top-right-bottom">'
                + '<div class="biaoti">'
                  + '<img src="images/forum/shuxian.png" />'
                  + '<span>推荐干货</span>'
                + '</div>'
                + '<p>'
                  + '<a href="#!case=case_30">如何跟女友复联</a>'
                + '</p>'
                + '<p>'
                  + '<a href="#!case=case_26">如何赢取白富美</a>'
                + '</p>'
              + '</div>'
            + '</div>'
          + '</div>'
          // 页面下部分
          + '<div class="forum-main-bottom">'
            + '<div class="biaoti">'
              + '<img src="images/forum/shuxian.png" />'
              + '<span>情感问答</span>'
            + '</div>'
            + '<div class="anli-group">'
              + '<a class="anli" href="#!case=case_01">'
                + '<div class="left">'
                  + '<img src="images/forum/1.jpg" alt="橘子情感--干货案例" />'
                + '</div>'
                + '<div class="right">'
                  + '<h3>'
                    + '「挽回女人」断联拉黑之后，好的心态才是拯救爱情的致胜之道'
                  + '</h3>'
                  + '<p>'
                    + '如果有人问我，挽回成功的秘诀是什么？那我会毫不犹豫的说：心态。'
                    + '心态决定行为，行为……'
                  + '</p>'
                + '</div>'
              + '</a>'
              + '<a class="anli" href="#!case=case_02">'
                + '<div class="left">'
                  + '<img src="images/forum/2.jpg" alt="橘子情感--干货案例" />'
                + '</div>'
                + '<div class="right">'
                  + '<h3>'
                    + '爱情分手被断联，不会这一招，怎么挽回女人？'
                  + '</h3>'
                  + '<p>'
                    + '“我挽回不了她，是不是就是因为我没钱、没势、而且不帅？”<br />'
                    + '难道所有的女人……'
                  + '</p>'
                + '</div>'
              + '</a>'
              + '<a class="anli" href="#!case=case_03">'
                + '<div class="left">'
                  + '<img src="images/forum/3.jpg" alt="橘子情感--干货案例" />'
                + '</div>'
                + '<div class="right">'
                  + '<h3>'
                    + '爱情没了被拉黑怎么办？教你急速挽回的攻略'
                  + '</h3>'
                  + '<p>'
                    + '我知道现在在看这篇帖子的你，可能遇到了一些情感上的挫折，不知道'
                    + '怎么解决，在和心爱的人……'
                  + '</p>'
                + '</div>'
              + '</a>'
              + '<!-- <div class="anli">'
                + '<div class="left">'
                  + '<img src="images/forum/4.jpg" alt="橘子情感 - 干货案例" />'
                + '</div>'
                + '<div class="right">'
                  + '<h3>'
                    + '爱情破碎女人绝情离开，坏男人帮你复联挽回爱情！'
                  + '</h3>'
                  + '<p>'
                    + '很多男人在自己的感情出现问题的时候，由于男性的惯性思维，只想着'
                    + '去改变结果，而从来都没有去考虑到底用什么样的方法才能够有效的去'
                    + '挽回。'
                  + '</p>'
                + '</div>'
              + '</div> -->'
              + '<a class="anli" href="#!case=case_05">'
                + '<div class="left">'
                  + '<img src="images/forum/5.jpg" alt="橘子情感--干货案例" />'
                + '</div>'
                + '<div class="right">'
                  + '<h3>'
                    + '被拉黑不知如何复联？学会这两点，完美逆袭挽回爱情！'
                  + '</h3>'
                  + '<p>'
                    + '不以结婚为目的的谈恋爱都是耍流氓。<br />'
                    + '自然而然，不谈复联的挽回计划都是纸上谈兵。'
                  + '</p>'
                + '</div>'
              + '</a>'
              + '<a class="anli" href="#!case=case_06">'
                + '<div class="left">'
                  + '<img src="images/forum/6.jpg" alt="橘子情感--干货案例" />'
                + '</div>'
                + '<div class="right">'
                  + '<h3>'
                    + '被拉黑该如何恢复联系？教你这几步，挽回爱情指日可待！'
                  + '</h3>'
                  + '<p>'
                    + '看到这篇文章的你，一定经历过，甚至正在经历失恋。在面对爱情失'
                    + '利的你，会怎么安慰自己？'
                  + '</p>'
                + '</div>'
              + '</a>'
              + '<a class="anli" href="#!case=case_07">'
                + '<div class="left">'
                  + '<img src="images/forum/7.jpg" alt="橘子情感--干货案例" />'
                + '</div>'
                + '<div class="right">'
                  + '<h3>'
                    + '女生的“废物测试”其实是对你有意思，你中招了吗'
                  + '</h3>'
                  + '<p>'
                    + '很多人在和女生正常聊天基本上不会有太多严重的错误，但是一旦遇到'
                    + '废物测试，十有八九就掉进去了，要命的是……'
                  + '</p>'
                + '</div>'
              + '</a>'
              + '<a class="anli" href="#!case=case_08">'
                + '<div class="left">'
                  + '<img src="images/forum/8.jpg" alt="橘子情感--干货案例" />'
                + '</div>'
                + '<div class="right">'
                  + '<h3>'
                    + '不会应对女生的“废物测试”，活该你追不到她'
                  + '</h3>'
                  + '<p>'
                    + '上篇文章里我们简单介绍了为什么会有废物测试，那么，面对废物测试'
                    + '，都有哪些，我们应该如何做呢？'
                  + '</p>'
                + '</div>'
              + '</a>'
              + '<a class="anli" href="#!case=case_09">'
                + '<div class="left">'
                  + '<img src="images/forum/9.jpg" alt="橘子情感--干货案例" />'
                + '</div>'
                + '<div class="right">'
                  + '<h3>'
                    + '读懂女生这四种行为，教你分分钟挽回他！'
                  + '</h3>'
                  + '<p>'
                    + '橘子寄语：挽回和追妹子同样都讲究对症下药。那么，分手之后面对妹'
                    + '子的种种状况，我们究竟该如何应对呢？'
                  + '</p>'
                + '</div>'
              + '</a>'
              + '<a class="anli" href="#!case=case_10">'
                + '<div class="left">'
                  + '<img src="images/forum/10.jpg" alt="橘子情感--干货案例" />'
                + '</div>'
                + '<div class="right">'
                  + '<h3>'
                    + '断联拉黑也不怕，教你学会怎么挽回让女人绝望的感情'
                  + '</h3>'
                  + '<p>'
                    + '有时明明知道这场恋爱已经完蛋定了，却还是不顾一切、用尽全力的、'
                    + '把它一路谈到尽头去，撞壁撞山到灰飞……'
                  + '</p>'
                + '</div>'
              + '</a>'
              + '<a class="anli" href="#!case=case_11">'
                + '<div class="left">'
                  + '<img src="images/forum/11.jpg" alt="橘子情感--干货案例" />'
                + '</div>'
                + '<div class="right">'
                  + '<h3>'
                    + '分手后苦苦纠缠被拉黑？快速复联挽回男女生必备！'
                  + '</h3>'
                  + '<p>'
                    + '很多人在分手之后会很痛苦也很迷茫，痛苦的是分手后那种失落感和'
                    + '无助感以及想起两个人之间的美好时的那种不甘……'
                  + '</p>'
                + '</div>'
              + '</a>'
              + '<a class="anli" href="#!case=case12_">'
                + '<div class="left">'
                  + '<img src="images/forum/12.jpg" alt="橘子情感--干货案例" />'
                + '</div>'
                + '<div class="right">'
                  + '<h3>'
                    + '夫妻冷战离婚，怎样挽回即将破碎的婚姻？'
                  + '</h3>'
                  + '<p>'
                    + '每天会有很多人来问怎么去挽回，或者自己的感情出现了问题，到底是'
                    + '因为什么，在不涉及具体纠纷的前提下……'
                  + '</p>'
                + '</div>'
              + '</a>'
              + '<a class="anli" href="#!case=case_13">'
                + '<div class="left">'
                  + '<img src="images/forum/13.jpg" alt="橘子情感--干货案例" />'
                + '</div>'
                + '<div class="right">'
                  + '<h3>'
                    + '感情疲惫、拉黑失联算什么？我照样挽回了她'
                  + '</h3>'
                  + '<p>'
                    + '我叫赵柯，她平时叫我考拉。我们两个一起报的大学，本来是想在一个'
                    + '大学，但是没能如愿，所以就都……'
                  + '</p>'
                + '</div>'
              + '</a>'
              + '<a class="anli" href="#!case=case_14">'
                + '<div class="left">'
                  + '<img src="images/forum/14.jpg" alt="橘子情感--干货案例" />'
                + '</div>'
                + '<div class="right">'
                  + '<h3>'
                    + '合理套路，帮你把握住心仪的她'
                  + '</h3>'
                  + '<p>'
                    + '喜欢的人，放在心里像沉淀在玻璃杯底的蜂蜜团香香的、亮亮的,委屈'
                    + '的时候舔一口回忆心理就不会那么苦了……'
                  + '</p>'
                + '</div>'
              + '</a>'
              + '<a class="anli" href="#!case=case_15">'
                + '<div class="left">'
                  + '<img src="images/forum/15.jpg" alt="橘子情感--干货案例" />'
                + '</div>'
                + '<div class="right">'
                  + '<h3>'
                    + '坏男人简单一招教你读懂女人，成功挽回爱情'
                  + '</h3>'
                  + '<p>'
                    + '美好的人，并不难遇到。难遇到的，是美好，而且深爱我们的人。因'
                    + '为深爱，我们才得以享有机会进而理解他们的美好……'
                  + '</p>'
                + '</div>'
              + '</a>'
              + '<a class="anli" href="#!case=case_16">'
                + '<div class="left">'
                  + '<img src="images/forum/4.jpg" alt="橘子情感--干货案例" />'
                + '</div>'
                + '<div class="right">'
                  + '<h3>'
                    + '简直不敢相信，被拉黑的你这样做竟然让她重新爱上你'
                  + '</h3>'
                  + '<p>'
                    + '真正的爱情呢，是让你透过一个人看到了全世界，而不是你的全世界'
                    + '只有她一个人。'
                  + '</p>'
                + '</div>'
              + '</a>'
            + '</div>'
            + '<p class="more">查看更多>>></p>'
          + '</div>'
        + '</div>'
    },
    stateMap = {
      $container : null,
      $forum : null
    },
    jqueryMap = {},

    setJqueryMap, swiper, onClick, loadModule, initModule;

  setJqueryMap = function () {
    var
      $container = stateMap.$container,
      $forum     = stateMap.$forum;

    jqueryMap = {
      $container  : $container,
      $forum      : $forum,
      $slove      : $forum.find('.forum-main-top-right-top img'),
      $swiper_two : $forum.find('.swiper-slide:nth-child(2) img'),
      $anli_group : $forum.find('.anli-group'),
      $view_more  : $forum.find('.more'),
      $case       : $forum.find('.anli-group .anli')
    };
  };

  swiper = function () {
    var moduleTwoSwiper = new Swiper('.forum-main .swiper-container', {
      autoplay: 5000,                       // 禁止自动播放
      pagination : '.swiper-pagination',    // 显示分页器
      paginationClickable :true,            // 分页器可点击
      loop : true
    });
  };

  loadModule = function () {
    var preface_img = jqueryMap.$container.find('.spa-preface img');

    $('title').text('橘子情感 - 情感论坛');
    preface_img.attr('src', 'images/forum/preface.png');

    // 加载模块
    swiper();
  };

  onClick = function () {
    $(document).click(function (e) {
      var e, target;

      e = e || window.e;
      target = e.target;

      if ( $(target)[0] === $(jqueryMap.$view_more)[0] ) {
        jqueryMap.$anli_group.css({ height : '100%' });
        jqueryMap.$view_more.css({ display : 'none' });
        return false;
      }
    });
  };

  initModule = function ($container, $forum) {
    stateMap.$container = $container;
    stateMap.$forum     = $forum;
    $forum.html(configMap.main_html);

    setJqueryMap();
    loadModule();
    onClick();
  };

  return { initModule : initModule };
}());
