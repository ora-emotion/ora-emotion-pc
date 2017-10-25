/*
 * data.js
 * Data namespace module
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, data */

var data = (function () {
  var
    configMap = {
      title : {}
    },
    stateMap = { $html : null },
    jqueryMap = {},

    setJqueryMap, updateTitle, updateKeywords,
    updateDes,    updateData,  getTitle,       initModule;

  setJqueryMap = function () {
    var $html = stateMap.$html;

    jqueryMap = {
      $html        : $html,
      $title       : $html.find('head title'),
      $keywords    : $html.find('head meta[name="keywords"]'),
      $description : $html.find('head meta[name="description"]')
    };
  };

  // 获取 title 数据
  getTitle = function () {
    $.ajax({
      type     : 'GET',
      dataType : 'json',
      url      : 'data/title.json',
      success  : function (data) {
        updateTitle(data);
      },
      error    : function (error) {
        console.log('请求 title.json 数据失败！');
      }
    });
  };

  // 更新 title
  updateTitle = function (data) {
    console.log(data);
  };

  updateData = function () {
    getTitle();
  };

  initModule = function ($html) {
    stateMap.$html = $html;

    setJqueryMap();
    updateData();
  };

  return { initModule : initModule };
}());
