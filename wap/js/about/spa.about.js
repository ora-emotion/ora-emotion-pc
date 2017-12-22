/*
 * spa.about.js
 * About us module for SPA
 * 关于我们
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.about = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="about-ora"></div>'
        + '<div class="about-history"></div>'
        + '<div class="about-environment"></div>'
        + '<div class="about-dynamic"></div>'
        + '<div class="about-step"></div>'
        + '<div class="about-guarantee"></div>'
        + '<div class="about-associated"></div>'
    },
    stateMap = { $container : null, $about: null },
    jqueryMap = {},
    setJqueryMap, loadModule, initModule;

  setJqueryMap = function () {
    var
      $container = stateMap.$container,
      $about     = stateMap.$about;

    jqueryMap = {
      $container   : $container,
      $about       : $about,
      $ora         : $about.find('.about-ora'),
      $history     : $about.find('.about-history'),
      $environment : $about.find('.about-environment'),
      $dynamic     : $about.find('.about-dynamic'),
      $step        : $about.find('.about-step'),
      $guarantee   : $about.find('.about-guarantee'),
      $associated  : $about.find('.about-associated')
    };
  };

  loadModule = function () {
    var preface_img = jqueryMap.$container.find('.spa-preface img');

    $('title').text('橘子情感 - 关于我们');
    preface_img.attr('src', 'images/about/preface.png');

    // 加载模块
    spa.about.ora.initModule(jqueryMap.$ora);
    spa.about.history.initModule(jqueryMap.$history);
    spa.about.environment.initModule(jqueryMap.$environment);
    spa.about.dynamic.initModule(jqueryMap.$dynamic);
    spa.about.step.initModule(jqueryMap.$step);
    spa.about.guarantee.initModule(jqueryMap.$guarantee);
    spa.about.associated.initModule(jqueryMap.$associated);
  };

  initModule = function ($container, $about) {
    stateMap.$container = $container;
    stateMap.$about     = $about;
    $about.html(configMap.main_html);

    setJqueryMap();
    loadModule();
  };

  return { initModule : initModule };
}());
