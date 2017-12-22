/*
 * spa.service.course.js
 * Course module for Service
 * 服务介绍 - 视频课程
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.service.course = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">视频课程</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="service-course-main">'
          + '<div class="head">'
          	+ '<p>'
          		+ '在“挽爱计划”课程服务中，系统的视频课程，是课程体系中的一部分。包括心'
              + '态心法、吸引力构建、挽回方法、高效沟通聊天方法、约会见面攻略、异地恋'
              + '、应对第三者、婚后生活、爱情保鲜、长期关系等在感情生活中的，方方面面'
              + '的问题以及解决方法。'
          	+ '</p>'
          + '</div>'
        	+ '<div class="curriculum">'
        		+ '<div class="group">'
        			+ '<div class="left">'
        				+ '<img src="images/service/course-pic01.png" />'
        			+ '</div>'
        			+ '<div class="zhong">'
        				+ '<h3>免费课程预览</h3>'
        				+ '<p>'
        					+ '课程简介视频预览'
        				+ '</p>'
        				+ '<p>'
        					+ '<img src="images/service/course-icon01.png" />'
        					+ '挽回的具体操作和技巧'
        				+ '</p>'
        			+ '</div>'
        			+ '<div class="right">'
        				+ '<a href="#!video=free">'
        					+ '<img src="images/service/course-icon02.png" />'
        				+ '</a>'
        			+ '</div>'
        		+ '</div>'
        		+ '<div class="group">'
        			+ '<div class="left">'
        				+ '<img src="images/service/course-pic02.png" />'
        			+ '</div>'
        			+ '<div class="zhong">'
        				+ '<h3>付费用户视频专区</h3>'
        				+ '<p>成为会员可免费观看更多视频</p>'
        				+ '<p>'
        					+ '<img src="images/service/course-icon01.png" />'
        					+ '正确认识你和女生的关系'
        				+ '</p>'
        			+ '</div>'
        			+ '<div class="right">'
        				+ '<a href="#!video=vip"><img src="images/service/course-icon02.png" /></a>'
        			+ '</div>'
        		+ '</div>'
        	+ '</div>'
        + '</div>'
    },
    stateMap = { $course : null },
    jqueryMap = {},

    setJqueryMap, freeVideo, vipVideo, loadVideo, initModule;

  setJqueryMap = function () {
    var $container, $course;

    $container = $('#spa');
    $course = stateMap.$course;

    jqueryMap = {
      $preface    : $container.find('.spa-preface'),
      $course     : $course,
      $free_video : $course.find('.group:first-child'),
      $vip_video  : $course.find('.group:last-child')
    };
  };

  freeVideo = function () {
    var $free_video = jqueryMap.$free_video;

    $free_video.click(function () {
      $.uriAnchor.setAnchor({ video : 'free' });
    });
  };

  vipVideo = function () {
    var $vip_video = jqueryMap.$vip_video;

    $vip_video.click(function () {
      $.uriAnchor.setAnchor({ video : 'vip' });
    });
  };

  loadVideo = function () {
    freeVideo();
    vipVideo();
  };

  initModule = function ($course) {
    stateMap.$course = $course;
    $course.html(configMap.main_html);

    setJqueryMap();
    loadVideo();

    jqueryMap.$preface.show();
  };

  return { initModule : initModule };
}());
