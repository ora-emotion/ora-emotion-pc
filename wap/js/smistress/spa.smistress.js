/*
 * spa.smistress.js
 * separate mistress module for SPA
 * 分离小三
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.smistress = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="smistress-state"></div>'
        + '<div class="smistress-reason"></div>'
        + '<div class="smistress-method"></div>'
        + '<div class="smistress-advantage"></div>'
        + '<div class="smistress-kind"></div>'
        + '<div class="smistress-service"></div>'
        + '<div class="smistress-example"></div>'
        + '<div class="smistress-mentor"></div>'
        + '<div class="smistress-progress"></div>'
    },
    stateMap = { $container : null, $smistress : null },
    jqueryMap = {},
    setJqueryMap, loadModule, initModule;

  setJqueryMap = function () {
    var
      $container = stateMap.$container,
      $smistress = stateMap.$smistress;

    jqueryMap = {
      $container : $container,
      $smistress : $smistress,
      $state     : $smistress.find('.smistress-state'),
      $reason    : $smistress.find('.smistress-reason'),
      $method    : $smistress.find('.smistress-method'),
      $advantage : $smistress.find('.smistress-advantage'),
      $kind      : $smistress.find('.smistress-kind'),
      $service   : $smistress.find('.smistress-service'),
      $example   : $smistress.find('.smistress-example'),
      $mentor    : $smistress.find('.smistress-mentor'),
      $progress  : $smistress.find('.smistress-progress')
    };
  };

  loadModule = function () {
    var preface_img = jqueryMap.$container.find('.spa-preface img');

    $('title').text('橘子情感 - 分离小三');
    preface_img.attr('src', 'images/smistress/preface.png');

    // 加载模块
    spa.smistress.state.initModule(jqueryMap.$state);
    spa.smistress.reason.initModule(jqueryMap.$reason);
    spa.smistress.method.initModule(jqueryMap.$method);
    spa.smistress.advantage.initModule(jqueryMap.$advantage);
    spa.smistress.kind.initModule(jqueryMap.$kind);
    spa.smistress.service.initModule(jqueryMap.$service);
    spa.smistress.example.initModule(jqueryMap.$example);
    spa.smistress.mentor.initModule(jqueryMap.$mentor);
    spa.smistress.progress.initModule(jqueryMap.$progress);
  };

  initModule = function ($container, $smistress) {
    stateMap.$container = $container;
    stateMap.$smistress = $smistress;
    $smistress.html(configMap.main_html);

    setJqueryMap();
    loadModule();
  };

  return { initModule : initModule };
}());
