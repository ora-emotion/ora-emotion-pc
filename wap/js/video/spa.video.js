/*
 * spa.video.js
 * Video module for SPA
 * 橘子视频
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.video = (function () {
  var
    stateMap = { $video : null },
    jqueryMap = {},

    setJqueryMap, checkPwd, loadPage, initModule;

  setJqueryMap = function () {
    var $video = stateMap.$video;

    jqueryMap = {
      $video : $video
    };
  };

  // Start : checkPwd()
  // des   : 用户进入付费视频页面之前，验证密码
  //
  checkPwd = function () {
    var msg, user_input;

    msg = '请输入密码';
    user_input = prompt(msg, '');

    if (user_input !== null && user_input === 'juzi911') {
      spa.video.vip.initModule(jqueryMap.$video);
    } else {
      $.uriAnchor.setAnchor({ page : 'service_intro' });
      $(document).scrollTop(localStorage.video);
      return false;
    }
  };
  // End : checkPwd()

  loadPage = function () {
    var anchor_map, key_name;
    anchor_map = $.uriAnchor.makeAnchorMap();

    KEYVAL:
    for (key_name in anchor_map) {
      if (anchor_map.hasOwnProperty(key_name)) {
        if (key_name.indexOf('_') === 0) { continue KEYVAL; }
        switch (anchor_map[key_name]) {
          case 'free' :
            spa.video.free.initModule(jqueryMap.$video);
            break;
          case 'vip' :
            checkPwd();
            break;
          default:
            break;
        }
      }
    }
  };

  initModule = function ($video) {
    stateMap.$video = $video;

    setJqueryMap();
    loadPage();
  };

  return { initModule : initModule };
}());
