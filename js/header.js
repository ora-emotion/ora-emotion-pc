/*
 * header.js
 * Header namespace module
 * 页面 header 区域 javascript
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, header */

var header = (function () {
  var
    stateMap = { $header : null },
    jqueryMap = {},

    setJqueryMap, toggleWechat, initModule;

  setJqueryMap = function () {
    var $header = stateMap.$header;

    jqueryMap = {
      $header : $header,
      $qrcode : $header.find('.qrcode-wechat img'),
      $wechat : $header.find('.wechat')
    };
  };

  // Start : toggleWechat()
  // 功能 : 显示和隐藏 header 区域微信二维码图片
  // 说明 : 
  //   * 当鼠标移入 ‘官方二维码’ 处的图标时，显示二维码；当鼠标移出时，隐藏二维码。
  //
  toggleWechat = function () {
    jqueryMap.$qrcode.mouseover(function () {
      jqueryMap.$wechat.toggle();
    });
    jqueryMap.$qrcode.mouseleave(function () {
      jqueryMap.$wechat.toggle();
    });
  };
  // End : toggleWechat()

  initModule = function ($header) {
    stateMap.$header = $header;

    setJqueryMap();
    toggleWechat();
  };

  return { initModule : initModule };
}());
