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
    configMap = {},
    stateMap = {
      $html : null,
      url   : []
    },
    jqueryMap = {},

    setJqueryMap, getAnchor,   updateTitle, updateKeywords,
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

  // Start : getAnchor()
  // 功能  : 获取并处理地址栏 url，处理后的地址栏类似于 ['pc', 'index'] 的形式
  //
  getAnchor = function () {
    var
      url    = window.location.href;
      url    = url.split('/');                              // 分隔 url 为数组
      url    = [url[url.length - 2], url[url.length - 1]];  // 取得数组倒数第二项元素和最后一项: xxx.html
      url[1] = url[1].split('.')[0];

    stateMap.url = url;
  };
  // End : getAnchor();

  // Start : getTitle()
  // 功能  : 获取 title.json 数据，将获取到的 data 作为参数传递到 updateTitle()
  //
  getTitle = function (href) {
    $.ajax({
      type     : 'GET',
      dataType : 'json',
      url      : href,
      success  : function (data) {
        updateTitle(data);
      },
      error    : function (error) {
        console.log('请求 title.json 数据失败！');
      }
    });
  };
  // End : getTitle()

  // Start : updateTitle()
  // 功能  : 更新页面 title 的值
  //
  updateTitle = function (data) {
    var
      key,
      title,
      url = stateMap.url;

    // url: ['xxx', 'xxx.html']
    switch (url[0]) {
      case 'pc' || 'www.jvziqinggan.com' :
        jqueryMap.$title.text(data[url[1]]);
        break;
      case 'views' :
        jqueryMap.$title.text(data.views[url[1]]);
        break;
      case 'news' :
        jqueryMap.$title.text(data.news[url[1]]);
        break;
      case 'anli' :
        jqueryMap.$title.text(data.anli[url[1]]);
        break;
      default:
        break;
    }

  };
  // End : updateTitle()

  // Start : updateData()
  // 功能  : 更新页面数据
  //
  updateData = function (href) {
    getTitle(href);
  };
  // End : updateData()

  // Start : initModule()
  // 功能  : 初始化模块
  //
  initModule = function ($html, href) {
    stateMap.$html = $html;

    setJqueryMap();
    getAnchor();
    updateData(href);
  };
  // End : initModule();

  // 导出公开方法
  return { initModule : initModule };
}());
