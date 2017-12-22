/*
 * spa.score.js
 * Score javascript
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.score = (function (){
  var
    configMap = {
      main_html : String()
        + '<p>得分： <span class="final-score"></span></p>'
    },
    stateMap = { $container : null },
    jqueryMap = {},
    setJqueryMap, toggleScoreModal, initModule;

  setJqueryMap = function () {
    var $score = stateMap.$container;

    jqueryMap = {
      $score : $score
    };
  };

  // 当题目做完时，渲染每个得分情况
  toggleScoreModal = function () {
    jqueryMap.$score.css({
      'display'  : 'block',
      'position' : 'absolute'
    });
  };

  //------------------------------ 公开方法 ------------------------------------
  initModule = function ($container) {
    stateMap.$container = $container;
    $container.html(configMap.main_html);
    setJqueryMap();

  };

  return {
    initModule       : initModule,
    toggleScoreModal : toggleScoreModal
  };
}());
