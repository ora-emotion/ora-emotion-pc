/*
 * spa.clove.example.js
 * Example module for Customize Love
 * 定制爱情 - 成功案例
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.clove.example = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">成功案例</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'

        + '<div class="clove-example-main">'
          + '<div class="clove-example-main-item">'
            + '<div class="pic">'
              + '<img src="images/clove/example-pic01.png">'
            + '</div>'
            + '<div class="txt-group">'
              + '<p class="topic">表白无果，只用了三十天逆袭</p>'
              + '<p class="des">'
                + '小月是我前任的闺蜜，我认识她最起初是因为我想挽回我的前任，在我俩'
                + '分手后……'
                + '<a href="#">了解详情>>></a>'
              + '</p>'
            + '</div>'
          + '</div>'
          + '<div class="clove-example-main-item">'
            + '<div class="pic">'
              + '<img src="images/clove/example-pic02.png">'
            + '</div>'
            + '<div class="txt-group">'
              + '<p class="topic">没有追不到的女生，只有不会聊天的愣头青</p>'
              + '<p class="des">'
                + '很多时候我们在和女生聊天的时候，不是每个人都是可以聊的风生……'
                + '<a href="#">了解详情>>></a>'
              + '</p>'
            + '</div>'
          + '</div>'
          + '<div class="clove-example-main-item">'
            + '<div class="pic">'
              + '<img src="images/clove/example-pic03.png">'
            + '</div>'
            + '<div class="txt-group">'
              + '<p class="topic">读懂女生这四种行为，教你分分钟挽回他！</p>'
              + '<p class="des">'
                + '分手后两人的相处与关系有无数种，有的两人形同陌路从此江湖不再见，有'
                + '的人……'
                + '<a href="#">了解详情>>></a>'
              + '</p>'
            + '</div>'
          + '</div>'
        + '</div>'
    },
    stateMap = { $example : null },
    jqueryMap = {},
    setJqueryMap, initModule;

  setJqueryMap = function () {
    var $example = stateMap.$example;

    jqueryMap = {
      $example : $example,
      $item    : $example.find('.clove-example-main-item')
    };
  };

  onClickLink = function () {
    jqueryMap.$item.click(function () {
      var index = $(this).index();

      switch (index) {
        case 0 :
          $.uriAnchor.setAnchor({ case : 'case_38' });
          break;
        case 1 :
          $.uriAnchor.setAnchor({ case : 'case_19' });
          break;
        case 2 :
          $.uriAnchor.setAnchor({ case : 'case_09' });
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
