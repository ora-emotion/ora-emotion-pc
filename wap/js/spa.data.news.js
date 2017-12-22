/*
 * spa.data.news.js
 * News module for Data
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */


spa.data.news = (function () {
  var
    configMap = {
      title : {
        new_01 : '第六届情感导师行业交流指导会',
        new_02 : '十大杰出诚信企业',
        new_03 : '市南区区长参观',
        new_04 : '纪橘子情感行业导师培植计划•上海站',
        new_05 : '凤凰网人物访谈',
        new_06 : '“暖爱计划”婚恋知识公益讲座报道',
        new_07 : '正确恋爱观讲座',
        new_08 : '客户远道而来，送来锦旗向导师团队致谢',
        new_09 : '社会各界人士交流会',
        new_11 : '我们是一家人：飞扬老师、千无老师生日',
        new_12 : '一个创业者的自述：橘子情感，专注情感，为爱而生',
        new_13 : '团队理论研发',
        new_14 : '橘子情感联合青岛大学商学院举办创业就业经验分享讲座',
        new_15 : '橘子情感联合山东省创业中心举办中俄新兴行业交流会'
      }
    },

    createScript, loadPage, initModule;

  createScript = function (key_name_value, src) {
    var script, head;

    script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    head = document.getElementsByTagName('head')[0];

    script.setAttribute('class', 'data-news-' + key_name_value);
    script.setAttribute('charset', 'utf-8');

    head.appendChild(script);
  };

  loadPage = function () {
    var anchor_map, key_name, key_name_value, url;

    anchor_map = $.uriAnchor.makeAnchorMap();

    KEYVAL:
    for (key_name in anchor_map) {
      if (anchor_map.hasOwnProperty(key_name)) {
        if (key_name.indexOf('_') === 0) { continue KEYVAL; }

        key_name_value = anchor_map[key_name];

        url = 'js/news/spa.data.news.' + key_name_value + '.js';
        createScript(key_name_value, url);

        // update title
        $('head title')
          .text(configMap.title[key_name_value] + ' | 橘子情感新闻咨询 | 橘子情感');

        // update keywords

        // update description
      }
    }
    return false;
  };

  initModule = function () {
    loadPage();
  };

  return { initModule : initModule };
}());
