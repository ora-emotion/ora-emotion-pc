/*
 * spa.smistress.example.js
 * Example module for Separate Mistress
 * 分离小三 - 成功案例
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.smistress.example = (function () {
  var
    configMap = {
      main_html : String()
      + '<div class="spa-module-title">'
        + '<span class="spa-module-title-line"></span>'
        + '<p class="spa-module-title-txt">成功案例</p>'
        + '<span class="spa-module-title-line"></span>'
      +  '</div>'

      + '<div class="smistress-example-main">'
        + '<div class="top smistress-example-main-item">'
          + '<img src="images/smistress/example-pic01.png" />'
          + '<div class="wen1">'
            + '<h3>老公在外找小三，教你见招拆招</h3>'
            + '<p>'
              + '我其实隐约感觉到老公在外面有了人，但是苦于没有证据，老公每次回家都'
              + '一副不耐烦的样子，如果不是还要在外人面前做做样子，恐怕他连这个家都'
              + '不回了……'
            + '</p>'
            + '<p>'
              + '<a href="##">查看更多>>></a>'
            + '</p>'
          + '</div>'
        + '</div>'
        + '<div class="bottom smistress-example-main-item">'
          + '<img src="images/smistress/example-pic02.png" />'
          + '<div class="wen1">'
            + '<h3>从恩爱夫妻到仇人，都是小三搞得鬼</h3>'
            + '<p>'
              + '我跟老公一直是朋友眼中的模范夫妻，但是心里苦不苦只有我自己知道。都是'
              + '因为老公在办公室跟一个狐狸精看对了眼，从此我们在家里天天吵架，但是由'
              + '于害怕外面的流言蜚语……'
            + '</p>'
            + '<p>'
              + '<a href="##">查看更多>>></a>'
            + '</p>'
          + '</div>'
        + '</div>'
      + '</div>'
    },
    stateMap = { $example : null },
    jqueryMap = {},
    setJqueryMap, onClickLink, initModule;

  setJqueryMap = function () {
    var $example = stateMap.$example;

    jqueryMap = {
      $example : $example,
      $item    : $example.find('.smistress-example-main-item')
    };
  };

  onClickLink = function () {
    var index;

    jqueryMap.$item.click(function () {
      index = $(this).index() + 1;

      switch (index) {
        case 1 :
          $.uriAnchor.setAnchor({ case : 'case_40' });
          break;
        case 2 :
          $.uriAnchor.setAnchor({ case : 'case_41' });
          break;
        default:
          break;
      }
    });
  };

  initModule = function ($example) {
    stateMap.$example = $example;
    $example.html(configMap.main_html);

    setJqueryMap();
    onClickLink();
  };

  return { initModule : initModule };
}());
