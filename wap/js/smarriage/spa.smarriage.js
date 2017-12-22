/*
 * spa.slove.js
 * save marriage module for SPA
 * 挽救婚姻
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.smarriage = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="smarriage-state"></div>'
        + '<div class="smarriage-reason"></div>'
        + '<div class="smarriage-advantage"></div>'
        + '<div class="smarriage-method"></div>'
        + '<div class="smarriage-kind"></div>'
        + '<div class="smarriage-service"></div>'
        + '<div class="smarriage-example"></div>'
        + '<div class="smarriage-mentor"></div>'
        + '<div class="smarriage-progress"></div>'
    },
    stateMap = { $container : null, $smarriage : null },
    jqueryMap = {},
    setJqueryMap, loadModule, initModule;

  setJqueryMap = function () {
    var
      $smarriage = stateMap.$smarriage,
      $container = stateMap.$container;

    jqueryMap = {
      $container : $container,
      $smarriage : $smarriage,
      $state     : $smarriage.find('.smarriage-state'),
      $reason    : $smarriage.find('.smarriage-reason'),
      $advantage : $smarriage.find('.smarriage-advantage'),
      $method    : $smarriage.find('.smarriage-method'),
      $kind      : $smarriage.find('.smarriage-kind'),
      $service   : $smarriage.find('.smarriage-service'),
      $example   : $smarriage.find('.smarriage-example'),
      $mentor    : $smarriage.find('.smarriage-mentor'),
      $progress  : $smarriage.find('.smarriage-progress')
    };
  };

  loadModule = function () {
    var preface_img = jqueryMap.$container.find('.spa-preface img');

    $('title').text('橘子情感 - 挽救婚姻');
    preface_img.attr('src', 'images/smarriage/preface.png');

    // 加载模块
    spa.smarriage.state.initModule(jqueryMap.$state);
    spa.smarriage.reason.initModule(jqueryMap.$reason);
    spa.smarriage.advantage.initModule(jqueryMap.$advantage);
    spa.smarriage.method.initModule(jqueryMap.$method);
    spa.smarriage.kind.initModule(jqueryMap.$kind);
    spa.smarriage.service.initModule(jqueryMap.$service);
    spa.smarriage.example.initModule(jqueryMap.$container, jqueryMap.$example);
    spa.smarriage.mentor.initModule(jqueryMap.$mentor);
    spa.smarriage.progress.initModule(jqueryMap.$progress);
  };

  initModule = function ($container, $smarriage, key_name_value) {
    stateMap.$container = $container;
    stateMap.$smarriage = $smarriage;
    $smarriage.html(configMap.main_html);

    setJqueryMap();
    loadModule();
  };

  return { initModule : initModule };
}());
