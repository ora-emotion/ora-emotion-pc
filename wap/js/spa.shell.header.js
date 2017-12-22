/*
 * spa.shell.header.js
 * Header module for Shell
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.shell.header = (function () {
  var
    configMap = {
      header_html : String()
        + '<a href="spa.html">'
          + '<div class="spa-header-logo"></div>'
        + '</a>'
        + '<div class="spa-header-contact">'
          + '<div class="spa-header-contact-icon"></div>'
          + '<div class="spa-header-contact-txt">'
            + '<p>免费情感热线电话</p>'
            + '<p>4006-299-520</p>'
          + '</div>'
        + '</div>'
    },
    stateMap = { $header : null },
    initModule;

  initModule = function ($header) {
    stateMap.$header = $header;
    $header.html(configMap.header_html);
  };

  return { initModule : initModule };
}());
