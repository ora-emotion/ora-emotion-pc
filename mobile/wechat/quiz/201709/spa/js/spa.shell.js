/*
 * index.js
 * Root namespace javascript
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.shell = (function (){
  //-------------------------- 模块内可用的变量 ---------------------------------
  // 说明  ：
  //   * configMap - 静态配置属性
  //   * jqueryMap - 缓存 jQuery 集合
  //
  var
    configMap = {
      main_html : String()
        + '<div class="spa-welcome"></div>'
        + '<div class="spa-question"></div>'
        + '<div class="spa-score"></div>'
        + '<div class="spa-modal">'
          + '<div class="spa-modal-content"></div>'
        + '</div>',
      spa_welcome : String() + '欢迎页',
      spa_question : String() + '问答页',
      spa_score    : String() + '分数页',
      spa_modal    : String() + '模态框'
    },
    stateMap  = {
      $container          : null,
      random_question_arr : [],
      random_score        : null
    },
    jqueryMap = {},
    root_ele,      device_width,  random_question,
    randomScore,
    setJqueryMap, changeFontSize, randomQuestion,      initModule;
  //-------------------------- 模块内可用的变量 ---------------------------------

  //----------------------------- 不操作 DOM -----------------------------------
  // randomQuestion()
  // 说明   ：
  //   * 页面加载后题目顺序随机显示
  // 设置   ：
  // 返回值 ： Array
  //   * 返回一个包含题目顺序的数组，通过 stateMap.random_question_arr 调用
  //
  randomQuestion = function () {
    random_question_arr = [];
    for (var i = 0; i < 100; i++) {
      random_question = parseInt(Math.random()*10).toFixed(0);
      if (stateMap.random_question_arr.indexOf(random_question) == -1) {
        stateMap.random_question_arr.push(random_question);
      }
    }
    // $(item[arr[0]]).addClass('active');
  };

  // randomScore()
  // 说明   ：
  //   * 页面加载后立即随机产生分数
  // 设置   ：无
  // 返回值 ：Number
  //   * 返回一个随机产生的分数，通过 stateMap.random_score 调用
  //
  randomScore = function () {
    var
      index,
      score_arr_front = [],
      score_arr_mid   = [],
      score_arr_last  = [],
      score_arr_total = [];

    for (var f = 36; f < 50; f++) {
      score_arr_front.push(f);
    }
    for (var m = 50; m < 80; m++) {
      score_arr_mid.push(m);
    }
    for (var l = 80; l <= 95; l++) {
      score_arr_last.push(l);
    }

    score_arr_total = score_arr_total
      .concat(score_arr_front, score_arr_mid, score_arr_mid, score_arr_last);

    var index = Math.floor(Math.random() * score_arr_total.length);
    stateMap.random_score = score_arr_total[index];
  };
  //----------------------------- 不操作 DOM -----------------------------------

  //------------------------------ 操作 DOM  -----------------------------------
  // setJqueryMap()
  // 缓存 jQuery 集合
  //
  setJqueryMap = function () {
    var $container = stateMap.$container;

    jqueryMap = {
      $container : $container
    };
  };

  // changeFontSize()
  // 说明 ：
  //   * 动态更改页面文字大小
  //
  changeFontSize = function() {
    root_ele = document.documentElement;
    device_width = root_ele.clientWidth;
    root_ele.style.fontSize = device_width / 7.5 + "px";
  };
  //------------------------------ DOM 操作 ------------------------------------

  //------------------------ jQuery 事假处理程序 --------------------------------
  //------------------------ jQuery 事假处理程序 --------------------------------

  //----------------------------- 公开方法 -------------------------------------
  initModule = function ($container) {
    stateMap.$container = $container;
    $container.html(configMap.main_html);
    $container.find('.spa-welcome').html(configMap.spa_welcome);
    setJqueryMap();
    changeFontSize();
    randomQuestion();
    randomScore();

    console.log('题目随机：' + stateMap.random_question_arr);
    console.log('分数随机：' + stateMap.random_score);
  };

  return { initModule : initModule };
  //----------------------------- 公开方法 -------------------------------------
}());
