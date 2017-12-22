/*
 * spa.slove.fail.js
 * fail module for Save Love
 * 挽回爱情 - 挽回失败原因
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.slove.fail = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">挽回失败原因</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="slove-fail-main">'
          + '<div class="slove-fail-main-item">'
            + '<img class="slove-fail-main-item-img" src="images/slove/fail-pic01.png">'
            + '<div class="slove-fail-main-item-txt">'
              + '<p class="slove-fail-main-item-txt-title">'
                + '双方地位不平衡，迷失自我'
              + '</p>'
              + '<p class="slove-fail-main-item-txt-para slove-para">'
                + '付出的越来越多，但是对方却总是无动于衷，难道爱一个人对TA好也是错'
                + '吗？为什么TA根本不能感受到我的爱意，不能理解我呢？不能认可我重新'
                + '在一起呢？'
              + '</p>'
            + '</div>'
          + '</div>'
          + '<div class="slove-fail-main-item">'
            + '<img class="slove-fail-main-item-img" src="images/slove/fail-pic02.png">'
            + '<div class="slove-fail-main-item-txt">'
              + '<p class="slove-fail-main-item-txt-title">'
                + '干扰对方生活，降低对方生活质量'
              + '</p>'
              + '<p class="slove-fail-main-item-txt-para slove-para">'
                + '分手之后想要当面说清楚分手的原因，问明白到底是谁错了，所以就去对'
                + '方家里、公司、或者是其他可能出现的地点，但是对方却并不买账，直接'
                + '与你断绝联系。'
              + '</p>'
            + '</div>'
          + '</div>'
          + '<div class="slove-fail-main-item">'
            + '<img class="slove-fail-main-item-img" src="images/slove/fail-pic03.png">'
            + '<div class="slove-fail-main-item-txt">'
              + '<p class="slove-fail-main-item-txt-title">'
                + '情商低，沟通不到位，无效沟通'
              + '</p>'
              + '<p class="slove-fail-main-item-txt-para slove-para">'
                + '两个人的语言根本不能正常沟通，废话、气话都很多，真正的心意都被掩'
                + '藏起来，根本不能互相理解和沟通，不能静下心来冷静聊天。'
              + '</p>'
            + '</div>'
          + '</div>'
          + '<div class="slove-fail-main-item">'
            + '<img class="slove-fail-main-item-img" src="images/slove/fail-pic04.png">'
            + '<div class="slove-fail-main-item-txt">'
              + '<p class="slove-fail-main-item-txt-title">'
                + '以自我为中心，一味的触及对方底线'
              + '</p>'
              + '<p class="slove-fail-main-item-txt-para slove-para">'
                + '每个人都有自己的底线，但是就是会不经意或者是故意挑战对方的底线，你'
                + '以为的不在意和可以被原谅，在对方看来你就是不在意他，是最差的伴侣。'
              + '</p>'
            + '</div>'
          + '</div>'
        + '</div>'
    },
    initModule;

  initModule = function ($fail) {
    $fail.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
