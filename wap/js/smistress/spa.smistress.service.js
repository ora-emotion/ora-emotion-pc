/*
 * spa.smistress.service.js
 * Service module for Separate Mistress
 * 分离小三 - 能够提供的分离小三服务
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.smistress.service = (function () {
  var
    configMap = {
      main_html : String()
      + '<div class="spa-module-title">'
        + '<span class="spa-module-title-line"></span>'
        + '<p class="spa-module-title-txt">能够提供的分离小三服务</p>'
        + '<span class="spa-module-title-line"></span>'
      +  '</div>'
      + '<div class="smistress-service-main"></div>'
      + '<div class="chakan"><p>查看更多>>></p></div>',

      extend_height : '10.88rem',
      extend_time   : 300
    },
    stateMap = { $service : null },
    jqueryMap = {},
    setJqueryMap, viewMore, initModule;

  setJqueryMap = function () {
    var $service = stateMap.$service;

    jqueryMap = {
      $service   : $service,
      $main      : $service.find('.smistress-service-main'),
      $check_btn : $service.find('.chakan')
    };
  };

  viewMore = function () {
    jqueryMap.$check_btn.click(function(){
      jqueryMap.$main.animate(
        { height   : configMap.extend_height },
        configMap.extend_time
      );
      $(this).animate({ opacity : '0' });
    });
  };

  initModule = function ($service) {
    stateMap.$service = $service;
    $service.html(configMap.main_html);

    setJqueryMap();
    viewMore();
  };

  return { initModule : initModule };
}());
