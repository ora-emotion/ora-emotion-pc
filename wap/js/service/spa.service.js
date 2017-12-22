/*
 * spa.service.js
 * service intro module for SPA
 * 服务介绍
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.service = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="service-customize"></div>'
        + '<div class="service-state"></div>'
        + '<div class="service-system"></div>'
        + '<div class="service-course"></div>'
        + '<div class="service-mentor"></div>'
        + '<div class="service-tutor"></div>'
        + '<div class="service-step"></div>'
        + '<div class="service-guarantee"></div>'
    },
    stateMap = { $container : null, $service : null },
    jqueryMap = {},
    setJqueryMap, loadModule, initModule;

  setJqueryMap = function () {
    var
      $container = stateMap.$container,
      $service   = stateMap.$service;

    jqueryMap = {
      $container : $container,
      $service   : $service,
      $customize : $service.find('.service-customize'),
      $state     : $service.find('.service-state'),
      $system    : $service.find('.service-system'),
      $course    : $service.find('.service-course'),
      $mentor    : $service.find('.service-mentor'),
      $tutor     : $service.find('.service-tutor'),
      $step      : $service.find('.service-step'),
      $guarantee : $service.find('.service-guarantee')
    };
  };

  loadModule = function () {
    var preface_img = jqueryMap.$container.find('.spa-preface img');

    $('title').text('橘子情感 - 服务介绍');
    preface_img.attr('src', 'images/service/preface.png');

    // 加载模块
    spa.service.customize.initModule(jqueryMap.$customize);
    spa.service.state.initModule(jqueryMap.$state);
    spa.service.system.initModule(jqueryMap.$system);
    spa.service.course.initModule(jqueryMap.$course);
    spa.service.mentor.initModule(jqueryMap.$mentor);
    spa.service.tutor.initModule(jqueryMap.$tutor);
    spa.service.step.initModule(jqueryMap.$step);
    spa.service.guarantee.initModule(jqueryMap.$guarantee);
  };

  initModule = function ($container, $service) {
    stateMap.$container = $container;
    stateMap.$service   = $service;

    $service.html(configMap.main_html);

    setJqueryMap();
    loadModule();
  };

  return { initModule : initModule };
}());
