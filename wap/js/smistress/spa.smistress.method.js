/*
 * spa.smistress.method.js
 * Method module for Separate Mistress
 * 分离小三 - 错误应对方式
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.smistress.method = (function () {
  var
    configMap = {
      main_html : String()
      + '<div class="spa-module-title">'
        + '<span class="spa-module-title-line"></span>'
        + '<p class="spa-module-title-txt">错误应对方式</p>'
        + '<span class="spa-module-title-line"></span>'
      +  '</div>'

      + '<div class="smistress-method-main">'
        + '<div class="swiper-container">'
    			+ '<div class="swiper-wrapper">'
    				+ '<div class="swiper-slide">'
    					+ '<div class="item">'
    						+ '<h3>威胁离婚</h3>'
    						+ '<p>'
    							+ '带人去捉奸，留下证据，以起诉离婚让他净身出户相要挟，甚至威胁他'
                  + '离婚之后不让他再见孩子一面，这样并不会让他退缩，甚至刚好合他的'
                  + '心意抛掉了家庭和负担，与小三重建美满的家庭。'
    						+ '</p>'
    					+ '</div>'
    				+ '</div>'
    				+ '<div class="swiper-slide">'
    					+ '<div class="item">'
    						+ '<h3>找小三当面对质</h3>'
    						+ '<p>'
    							+ '约小三见面，痛骂小三，甚至大打出手，让周围的群众评理，这样不仅'
                  + '不会让小三识趣主动离开，而且你的形象也随之彻底毁掉，现在吹枕边'
                  + '风的是小三不是你，你这样只会使小三添油加醋把自己伪装成受害者，'
                  + '让他更加嫌弃你。'
    						+ '</p>'
    					+ '</div>'
    				+ '</div>'
    				+ '<div class="swiper-slide">'
    					+ '<div class="item">'
    						+ '<h3>自己也出轨</h3>'
    						+ '<p>'
    							+ '老公出轨，破罐子破摔，出于报复心理，自己也禁不住诱惑出轨，试图'
                  + '刺激对方扳回一局，可能你觉得报复很爽，但是最终痛苦的还是你，社'
                  + '会本来就对男人的出轨宽容度更高，不仅挽回不了婚姻，还会背负骂名，'
                  + '让你的父母孩子以后怎么看待你？'
    						+ '</p>'
    					+ '</div>'
    				+ '</div>'
    				+ '<div class="swiper-slide">'
    					+ '<div class="item">'
    						+ '<h3>苦苦哀求</h3>'
    						+ '<p>'
    							+ '谁也不想舍弃这安稳的现状，就算低声下气苦苦哀求也要保住这支离破'
                  + '碎的家庭，乞求他不要抛弃婚姻，但是这样无尊严无下限并不会使他同'
                  + '情你，而是觉得厌烦。'
    						+ '</p>'
    					+ '</div>'
    				+ '</div>'
    				+ '<div class="swiper-slide">'
    					+ '<div class="item">'
    						+ '<h3>蓄意报复</h3>'
    						+ '<p>'
    							+ '不管是找人报复还是损坏私人财产的做法不仅是违法的，更是让他觉得'
                  + '你疯了，谁会愿意跟一个疯子维持婚姻到他公司闹也只会使他颜面扫地，'
                  + '蓄意报复的行为只会使事情无法收场，断绝一切挽回的希望。'
    						+ '</p>'
    					+ '</div>'
    				+ '</div>'
    				+ '<div class="swiper-slide">'
    					+ '<div class="item">'
    						+ '<h3>争吵冷战</h3>'
    						+ '<p>'
    							+ '将一切都摊牌，跟对方撕破脸，什么难听的话都说出口，甚至动手，这'
                  + '样只会让对方觉得你是一个泼妇，拿你跟小三作比较，直接打包行李住'
                  + '到小三家，连你面都不想见，那你还拿什么来挽回你的婚？'
    						+ '</p>'
    					+ '</div>'
    				+ '</div>'
    			+ '</div>'
    		+ '</div>'
    		+ '<div class="swiper-pagination"></div>'
      + '</div>'
    },
    stateMap = { $method : null },
    jqueryMap = {},
    setJqueryMap, swiper, initModule;

  setJqueryMap = function () {
    var $method = stateMap.$method;

    jqueryMap = {
      $method : $method,
      $swiper_container : $method.find('.swiper-container')
    };
  };

  swiper = function () {
    var mySwiper = new Swiper(jqueryMap.$swiper_container, {
      autoplay   : 10000,                  // 禁止自动播放
      pagination : '.swiper-pagination',   // 显示分页器
      loop       : true
    });
  };

  initModule = function ($method) {
    stateMap.$method = $method;
    $method.html(configMap.main_html);

    setJqueryMap();
    swiper();
  };

  return { initModule : initModule };
}());
