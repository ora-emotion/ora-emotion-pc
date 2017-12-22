/*
 * spa.mentor.js
 * mentor team module for SPA
 * 权威专家
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.mentor = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="mentor-excellent"></div>'
        + '<div class="mentor-team"></div>'
        + '<div class="mentor-tutor"></div>'
    },
    stateMap = { $container : null, $mentor : null },
    jqueryMap = {},
    setJqueryMap, loadModule, initModule;

  setJqueryMap = function () {
    var
      $container = stateMap.$container,
      $mentor    = stateMap.$mentor;

    jqueryMap = {
      $container : $container,
      $mentor    : $mentor,
      $excellent : $mentor.find('.mentor-excellent'),
      $team      : $mentor.find('.mentor-team'),
      $tutor     : $mentor.find('.mentor-tutor')
    };
  };

  loadModule = function () {
    var preface_img = jqueryMap.$container.find('.spa-preface img');

    $('title').text('橘子情感 - 权威专家');
    preface_img.attr('src', 'images/mentor/preface.png');

    // 加载模块
    spa.mentor.excellent.initModule(jqueryMap.$excellent);
    spa.mentor.team.initModule(jqueryMap.$team);
    spa.mentor.tutor.initModule(jqueryMap.$tutor);
  };

  initModule = function ($container, $mentor) {
    stateMap.$container = $container;
    stateMap.$mentor    = $mentor;
    $mentor.html(configMap.main_html);

    setJqueryMap();
    loadModule();
  };

  return { initModule : initModule };
}());
