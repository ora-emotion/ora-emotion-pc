/*
 * spa.slide.js
 * Slide module for SPA
 * 侧导航
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.shell.slide = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-slide-main">'
          + '<div class="spa-slide-main-item home">'
            + '<span class="spa-slide-main-item-icon home"></span>'
            + '<span class="spa-slide-main-item-txt home">返回首页</span>'
          + '</div>'
          + '<div class="spa-slide-main-item slove">'
            + '<span class="spa-slide-main-item-icon slove"></span>'
            + '<span class="spa-slide-main-item-txt slove">挽回爱情</span>'
          + '</div>'
          + '<div class="spa-slide-main-item smarriage">'
            + '<span class="spa-slide-main-item-icon smarriage"></span>'
            + '<span class="spa-slide-main-item-txt smarriage">挽救婚姻</span>'
          + '</div>'
          + '<div class="spa-slide-main-item smistress">'
            + '<span class="spa-slide-main-item-icon smistress"></span>'
            + '<span class="spa-slide-main-item-txt smistress">分离小三</span>'
          + '</div>'
          + '<div class="spa-slide-main-item clove">'
            + '<span class="spa-slide-main-item-icon clove"></span>'
            + '<span class="spa-slide-main-item-txt clove">定制爱情</span>'
          + '</div>'
          + '<div class="spa-slide-main-item forum">'
            + '<span class="spa-slide-main-item-icon forum"></span>'
            + '<span class="spa-slide-main-item-txt forum">情感论坛</span>'
          + '</div>'
          + '<div class="spa-slide-main-item mentor">'
            + '<span class="spa-slide-main-item-icon mentor"></span>'
            + '<span class="spa-slide-main-item-txt mentor">权威专家</span>'
          + '</div>'
          + '<div class="spa-slide-main-item service">'
            + '<span class="spa-slide-main-item-icon service"></span>'
            + '<span class="spa-slide-main-item-txt service">服务介绍</span>'
          + '</div>'
          + '<div class="spa-slide-main-item about">'
            + '<span class="spa-slide-main-item-icon about"></span>'
            + '<span class="spa-slide-main-item-txt about">关于我们</span>'
          + '</div>'
        + '</div>'
        + '<div class="spa-slide-btn">'
          + '<span class="spa-slide-btn-extend"></span>'
        + '</div>',

        slide : {
          extend_width  : '0',
          retract_width : '-520'
        }
    },
    stateMap = {
      $slide : null,
      is_slide_retract : true
    },
    jqueryMap = {},

  setJqueryMap, toggleSlide, onClickSlide, initModule;

  setJqueryMap = function () {
    var $container, $slide;

      $container = $('#spa');
      $slide = stateMap.$slide;

    jqueryMap = {
      $container  : $container,
      $modal      : $container.find('.spa-modal'),
      $slide      : $slide,
      $slide_list : $slide.find('.spa-slide-main'),
      $btn_extend : $slide.find('.spa-slide-btn-extend')
    };
  };

  toggleSlide = function (slide_state, fn) {
    // 展开左侧导航
    if (slide_state) {
      jqueryMap.$modal.show();
      jqueryMap.$modal.animate({ opacity : '.7' }, 150);

      jqueryMap.$slide.animate({ left : configMap.slide.extend_width }, 150);

      return false;
    }

    // 收起左侧导航
    if (!slide_state) {
      jqueryMap.$modal.animate({ opacity : 0 }, 150, function () {
        jqueryMap.$modal.hide();
      });

      jqueryMap.$slide.animate({ left : configMap.slide.retract_width }, 150, fn);

      return false;
    }
  };

  onClickSlide = function () {
    jqueryMap.$container.click(function (e) {
      var target;

      e = e || window.e;
      target = e.target;
      target = $(target)[0].className.split(' ');  // 将 class 名转为数组
      target = target[target.length - 1];          // 取数组的最后一个 class 名

      switch (target) {
        case 'spa-slide-btn-extend' :  // 展开左侧导航
          toggleSlide(true);
          break;
        case 'spa-modal' :             // 收起左侧导航
          toggleSlide(false);
          break;
        case 'home' :                  // 加载首页
          toggleSlide(false, function () {
            $.uriAnchor.setAnchor({});
          });
          break;
        case 'slove' :                 // 加载挽回爱情页面
          toggleSlide(false, function () {
            $.uriAnchor.setAnchor({ page : 'save_love' });
          });
          break;
        case 'smarriage' :             // 加载挽救婚姻页面
          toggleSlide(false, function () {
            $.uriAnchor.setAnchor({ page : 'save_marriage' });
          });
          break;
        case 'smistress' :             // 加载分离小三页面
          toggleSlide(false, function () {
            $.uriAnchor.setAnchor({ page : 'separate_mistress' });
          });
          break;
        case 'clove' :                 // 加载定制爱情页面
          toggleSlide(false, function () {
            $.uriAnchor.setAnchor({ page : 'custom_love' });
          });
          break;
        case 'forum' :                 // 加载情感论坛页面
          toggleSlide(false, function () {
            $.uriAnchor.setAnchor({ page : 'emotion_forum' });
          });
          break;
        case 'mentor' :                // 加载权威专家页面
          toggleSlide(false, function () {
            $.uriAnchor.setAnchor({ page : 'mentor_team' });
          });
          break;
        case 'service' :               // 加载服务介绍页面
          toggleSlide(false, function () {
            $.uriAnchor.setAnchor({ page : 'service_intro' });
          });
          break;
        case 'about' :                 // 加载关于我们页面
          toggleSlide(false, function () {
            $.uriAnchor.setAnchor({ page : 'about_us' });
          });
          break;
        default:
          break;
      }
    });
  };

  initModule = function ($slide) {
    stateMap.$slide = $slide;
    $slide.html(configMap.main_html);

    setJqueryMap();
    onClickSlide();
  };

  return { initModule : initModule, toggleSlide : toggleSlide };
}());
