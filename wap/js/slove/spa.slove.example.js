/*
 * spa.slove.example.js
 * example module for Save Love
 * 挽回爱情 - 成功案例
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.slove.example = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">成功案例</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="slove-example-main">'
          + '<div class="slove-example-main-item">'
            + '<img src="images/slove/example-pic01.png">'
            + '<div class="slove-example-main-item-txt">'
              + '<p>给他合适的爱才是正确的恋爱方法</p>'
              + '<p>'
                + '“我男朋友觉得我爱他爱的太多了，在这段感情中我付出的太多了，他觉得'
                + '自己的压力太大了，和我提出了分手。”'
              + '</p>'
              + '<p>点击查看>>></p>'
            + '</div>'
          + '</div>'
          + '<div class="slove-example-main-item">'
            + '<img src="images/slove/example-pic02.png">'
            + '<div class="slove-example-main-item-txt">'
              + '<p>被拉黑之后才懂的怎么给她想要的</p>'
              + '<p>'
                + '你真的清楚分手的原因吗？ 想知道女人为什么会坚决分手吗？挽回的重中'
                + '之重，就是你要成为一个懂女人的男人。'
              + '</p>'
              + '<p>点击查看>>></p>'
            + '</div>'
          + '</div>'
        + '</div>'
    },
    stateMap = { $container : null, $example : null },
    jqueryMap = {},
    setJqueryMap, loadPage, initModule;

  setJqueryMap = function () {
    var
      $container = stateMap.$container,
      $example = stateMap.$example;

    jqueryMap = {
      $container : $container,
      $example   : $example,
      $case      : $example.find('.slove-example-main-item')
    };
  };

  loadPage = function () {
    var index;

    jqueryMap.$case.click(function () {
      index = $(this).index() + 1;

      switch (index) {
        case 1 :
          $.uriAnchor.setAnchor({ case : 'case_43' });
          break;
        case 2 :
          $.uriAnchor.setAnchor({ case : 'case_42' });
          break;
        default:
          break;
      }
    });
  };

  initModule = function ($container, $example) {
    stateMap.$container = $container;
    stateMap.$example   = $example;
    $example.html(configMap.main_html);

    setJqueryMap();
    loadPage();
  };

  return { initModule : initModule };
}());
