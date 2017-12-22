/*
 * spa.index.js
 * Index.main module for Index
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.index = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="index-nav"></div>'
        + '<div class="index-company-intro">'
          + '<div class="main"></div>'
        + '</div>'
        + '<div class="index-solve-problem">'
          + '<div class="main"></div>'
        + '</div>'
        + '<div class="index-mentor-intro">'
          + '<div class="main"></div>'
        + '</div>'
        + '<div class="index-ora-dynamic">'
          + '<div class="main"></div>'
        + '</div>'
        + '<div class="index-service-step">'
          + '<div class="main"></div>'
        + '</div>'
        + '<div class="index-service-guarantee">'
          + '<div class="main"></div>'
        + '</div>'
        + '<div class="index-four-services">'
          + '<div class="main"></div>'
        + '</div>'
    },
    stateMap = { $main : null },
    jqueryMap = {},

    loadModule,
    setJqueryMap, initModule;

  setJqueryMap = function () {
    var $main = stateMap.$main;

    jqueryMap = {
      $main              : $main,
      $nav               : $main.find('.index-nav'),
      $company_intro     : $main.find('.index-company-intro'),
      $solve_problem     : $main.find('.index-solve-problem'),
      $mentor_intro      : $main.find('.index-mentor-intro'),
      $ora_dynamic       : $main.find('.index-ora-dynamic'),
      $service_step      : $main.find('.index-service-step'),
      $service_guarantee : $main.find('.index-service-guarantee'),
      $four_services     : $main.find('.index-four-services')
    };
  };

  loadModule = function () {
    spa.index.nav.initModule(jqueryMap.$nav);
    spa.index.company_intro.initModule(jqueryMap.$company_intro);
    spa.index.solve_problem.initModule(jqueryMap.$solve_problem);
    spa.index.mentor_intro.initModule(jqueryMap.$mentor_intro);
    spa.index.ora_dynamic.initModule(jqueryMap.$ora_dynamic);
    spa.index.service_step.initModule(jqueryMap.$service_step);
    spa.index.service_guarantee.initModule(jqueryMap.$service_guarantee);
    spa.index.four_services.initModule(jqueryMap.$four_services);
  };

  initModule = function ($index_main) {
    stateMap.$main = $index_main;
    $index_main.html(configMap.main_html);
    setJqueryMap();

    loadModule();
  };

  return { initModule : initModule };
}());
