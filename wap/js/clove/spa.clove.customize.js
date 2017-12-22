/*
 * spa.clove.customize.js
 * Customize module for Customize Love
 * 定制爱情 - 橘子情感定制服务
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.clove.customize = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">橘子情感定制服务</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'

        + '<div class="clove-customize-main">'
          + '<div class="column-line"></div>'
          + '<div class="clove-customize-main-content">'
            + '<div class="clove-customize-main-content-item">'
              + '<div class="txt-title">'
                + '<img src="images/clove/customize-icon01.png">'
                + '<p>导师分析讨论</p>'
              + '</div>'
              + '<p class="txt-des">'
                + '专业的心理侧写师和狙击导师组成6人以上的私人专业指导小组，针'
                + '对学员的情况做出详细的分析和指导。'
              + '</p>'
            + '</div>'
            + '<div class="clove-customize-main-content-item">'
              + '<div class="txt-title">'
                + '<img src="images/clove/customize-icon02.png">'
                + '<p class="txt-title">指导形象建设</p>'
              + '</div>'
              + '<p class="txt-des">'
                + '根据学员的实际情况，由资深造型师给出合理的风格搭配和不同种'
                + '类的形象造型选择。'
              + '</p>'
            + '</div>'
            + '<div class="clove-customize-main-content-item">'
              + '<div class="txt-title">'
                + '<img src="images/clove/customize-icon03.png">'
                + '<p class="txt-title">自身价值提升</p>'
              + '</div>'
              + '<p class="txt-des">'
                + '由专业导师对目标的分析，对比分析学员状况，给出详细的自身价'
                + '值评估以及详细提升方案。'
              + '</p>'
            + '</div>'
            + '<div class="clove-customize-main-content-item">'
              + '<div class="txt-title">'
                + '<img src="images/clove/customize-icon04.png">'
                + '<p class="txt-title">制定表白计划</p>'
              + '</div>'
              + '<p class="txt-des">'
                + '详细分析目标性格、心理，确定表白时机、地点、以及后续方案，'
                + '制定详细的表白前期中期后期计划，导师全程跟进，确保万无一失。'
              + '</p>'
            + '</div>'
            + '<div class="clove-customize-main-content-item">'
              + '<div class="txt-title">'
                + '<img src="images/clove/customize-icon05.png">'
                + '<p class="txt-title">导师代聊邀约</p>'
              + '</div>'
              + '<p class="txt-des">'
                + '全程导师跟进学员情况，调动目标情绪，导师会在关键时刻代替学'
                + '员邀约对方，保证最终的执行效果。'
              + '</p>'
            + '</div>'
            + '<div class="clove-customize-main-content-item">'
              + '<div class="txt-title">'
                + '<img src="images/clove/customize-icon06.png">'
                + '<p class="txt-title">确立及维护关系</p>'
              + '</div>'
              + '<p class="txt-des">'
                + '导师组不仅会全程跟进直至确定关系，在合同的承诺期内，会确保'
                + '长期关系稳定并且及时做出指导。'
              + '</p>'
            + '</div>'
          + '</div>'
          + '<!--<div class="modal"></div>-->'
        + '</div>'
        + '<p class="more">查看更多>>></p>',

        content_extend_height : 1120,
        content_retract_height : 410,
        content_extend_time : 300
    },
    stateMap = { $customize : null },
    jqueryMap = {},
    setJqueryMap, checkMore, initModule;

  setJqueryMap = function () {
    var $customize = stateMap.$customize;

    jqueryMap = {
      $customize  : $customize,
      $content    : $customize.find('.clove-customize-main'),
      $check_more : $customize.find('.more')
    };
  };

  checkMore = function () {
    jqueryMap.$check_more.click(function () {
      jqueryMap.$content.animate(
        { height : configMap.content_extend_height },
        configMap.content_extend_time
      );
      $(this).animate(
        { opacity : 0 },
        configMap.content_extend_time
      );
    });
  };

  initModule = function ($customize) {
    stateMap.$customize = $customize;
    $customize.html(configMap.main_html);

    setJqueryMap();
    checkMore();
  };

  return { initModule : initModule };
}());
