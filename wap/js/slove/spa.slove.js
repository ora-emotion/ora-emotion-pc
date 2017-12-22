/*
 * spa.slove.js
 * save love module for SPA
 * 挽回爱情
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.slove = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="slove-separate"></div>'
        + '<div class="slove-wrong"></div>'
        + '<div class="slove-fail"></div>'
        + '<div class="slove-advantage"></div>'
        + '<div class="slove-kind"></div>'
        + '<div class="slove-service"></div>'
        + '<div class="slove-example"></div>'
        + '<div class="slove-mentor"></div>'
        + '<div class="slove-progress"></div>'
    },
    stateMap = {
      $container : null,
      $slove     : null
    },
    jqueryMap = {},
    setJqueryMap, loadModule, initModule;

  // Start : setJqueryMap()
  // 功能  : 缓存 jQuery 集合
  //
  setJqueryMap = function () {
    var
      $container = stateMap.$container,
      $slove     = stateMap.$slove;

    jqueryMap = {
      $container : $container,
      $slove     : $slove,
      $separate  : $slove.find('.slove-separate'),
      $wrong     : $slove.find('.slove-wrong'),
      $fail      : $slove.find('.slove-fail'),
      $advantage : $slove.find('.slove-advantage'),
      $kind      : $slove.find('.slove-kind'),
      $service   : $slove.find('.slove-service'),
      $example   : $slove.find('.slove-example'),
      $mentor    : $slove.find('.slove-mentor'),
      $progress  : $slove.find('.slove-progress')
    };
  };
  // End : setJqueryMap()

  // Start : insertModule()
  // 功能  : 插入模块
  //
  loadModule = function () {
    var preface_img = jqueryMap.$container.find('.spa-preface img');

    $('title').text('橘子情感 - 挽回爱情');
    preface_img.attr('src', 'images/slove/preface.png');

    spa.slove.separate.initModule(jqueryMap.$separate);
    spa.slove.wrong.initModule(jqueryMap.$wrong);
    spa.slove.fail.initModule(jqueryMap.$fail);
    spa.slove.advantage.initModule(jqueryMap.$advantage);
    spa.slove.kind.initModule(jqueryMap.$kind);
    spa.slove.service.initModule(jqueryMap.$service);
    spa.slove.example.initModule(jqueryMap.$container, jqueryMap.$example);
    spa.slove.mentor.initModule(jqueryMap.$mentor);
    spa.slove.progress.initModule(jqueryMap.$progress);
  };
  // End : insertModule()

  // Start : initModule()
  // 功能  : 初始化模块
  //
  initModule = function ($container, $slove) {
    stateMap.$container  = $container;
    stateMap.$slove      = $slove;
    $slove.html(configMap.main_html);

    setJqueryMap();
    loadModule();
  };
  // End : initModule()

  return { initModule : initModule, configMap : configMap };
}());
