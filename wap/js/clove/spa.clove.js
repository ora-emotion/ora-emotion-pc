/*
 * spa.clove.js
 * custom love mistress module for SPA
 * 定制爱情
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.clove = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="clove-reason"></div>'
        + '<div class="clove-consequence"></div>'
        + '<div class="clove-customize"></div>'
        + '<div class="clove-example"></div>'
        + '<div class="clove-advantage"></div>'
        + '<div class="clove-mentor"></div>'
        + '<div class="clove-instruction"></div>'
        + '<div class="clove-progress"></div>'
    },
    stateMap = { $container : null, $clove : null },
    jqueryMap = {},
    setJqueryMap, loadModule, initModule;

  setJqueryMap = function () {
    var
      $container = stateMap.$container,
      $clove     = stateMap.$clove;
    jqueryMap = {
      $container   : $container,
      $clove       : $clove,
      $reason      : $clove.find('.clove-reason'),
      $consequence : $clove.find('.clove-consequence'),
      $customize   : $clove.find('.clove-customize'),
      $example     : $clove.find('.clove-example'),
      $advantage   : $clove.find('.clove-advantage'),
      $mentor      : $clove.find('.clove-mentor'),
      $instruction : $clove.find('.clove-instruction'),
      $progress        : $clove.find('.clove-progress')
    };
  };

  loadModule = function () {
    var preface_img = jqueryMap.$container.find('.spa-preface img');

    $('title').text('橘子情感 - 定制爱情');
    preface_img.attr('src', 'images/clove/preface.png');

    // 加载模块
    spa.clove.reason.initModule(jqueryMap.$reason);
    spa.clove.consequence.initModule(jqueryMap.$consequence);
    spa.clove.customize.initModule(jqueryMap.$customize);
    spa.clove.example.initModule(jqueryMap.$example);
    spa.clove.advantage.initModule(jqueryMap.$advantage);
    spa.clove.mentor.initModule(jqueryMap.$mentor);
    spa.clove.instruction.initModule(jqueryMap.$instruction);
    spa.clove.progress.initModule(jqueryMap.$progress);
  };

  initModule = function ($container, $clove) {
    stateMap.$container = $container;
    stateMap.$clove     = $clove;
    $clove.html(configMap.main_html);

    setJqueryMap();
    loadModule();
  };

  return { initModule : initModule };
}());
