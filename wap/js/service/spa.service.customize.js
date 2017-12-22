/*
 * spa.service.customize.js
 * Customize module for Service
 * 服务介绍 - “挽爱计划”私人定制服务
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.service.customize = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">“挽爱计划”私人定制服务</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="service-customize-main">'
        	+ '<div class="service-customize-main-top">'
        		+ '<p>'
        			 + '随着当今中国社会的爱情分手率、离婚率的不断升高，两性情感问题，已然'
               + '成为普遍的社会问题爱情破裂的原因有很多，或大或小比如：'
        		+ '</p>'
        	+ '</div>'
        	+ '<div class="service-customize-main-bottom">'
        		+ '<div class="service-customize-main-bottom-group">'
        			+ '<div class="service-customize-main-bottom-group-item">'
        				+ '<img src="images/service/customize-icon01.png" />'
        				+ '<p>沟通不畅</p>'
        			+ '</div>'
        			+ '<div class="service-customize-main-bottom-group-item">'
        				+ '<img src="images/service/customize-icon02.png" />'
        				+ '<p>感情冷淡</p>'
        			+ '</div>'
        			+ '<div class="service-customize-main-bottom-group-item">'
        				+ '<img src="images/service/customize-icon03.png" />'
        				+ '<p>矛盾累积</p>'
        			+ '</div>'
        			+ '<div class="service-customize-main-bottom-group-item">'
        				+ '<img src="images/service/customize-icon04.png" />'
        				+ '<p>第三者插足</p>'
        			+ '</div>'
        		+ '</div>'
        		+ '<div class="service-customize-main-bottom-group">'
        			+ '<div class="service-customize-main-bottom-group-item">'
        				+ '<img src="images/service/customize-icon05.png" />'
        				+ '<p>婆媳关系</p>'
        			+ '</div>'
        			+ '<div class="service-customize-main-bottom-group-item">'
        				+ '<img src="images/service/customize-icon06.png" />'
        				+ '<p>家庭暴力</p>'
        			+ '</div>'
        			+ '<div class="service-customize-main-bottom-group-item">'
        				+ '<img src="images/service/customize-icon07.png" />'
        				+ '<p>经济纠纷</p>'
        			+ '</div>'
        			+ '<div class="service-customize-main-bottom-group-item">'
        				+ '<img src="images/service/customize-icon08.png" />'
        				+ '<p>异国异地</p>'
        			+ '</div>'
        		+ '</div>'
        	+ '</div>'
        + '</div>'
    },
    initModule;

  initModule = function ($customize) {
    $customize.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
