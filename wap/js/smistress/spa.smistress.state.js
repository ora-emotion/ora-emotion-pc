/*
 * spa.smistress.state.js
 * State module for Separate Mistress
 * 分离小三 - 婚姻状况
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.smistress.state = (function () {
  var
    configMap = {
      main_html : String()
      + '<div class="spa-module-title">'
        + '<span class="spa-module-title-line"></span>'
        + '<p class="spa-module-title-txt">婚姻状况</p>'
        + '<span class="spa-module-title-line"></span>'
      +  '</div>'

      + '<div class="smistress-state-main">'
        + '<div class="smistress-state-main-group">'
          + '<div class="smistress-state-main-group-item">'
            + '<img src="images/smistress/state-icon01.png">'
            + '<div class="smistress-state-main-group-item-txt">'
              + '<p>老公婚内出轨</p>'
              + '<p>'
                + '也许你们之间已经没有了激情，正是你的不作为导致了对方的背叛。'
              + '</p>'
            + '</div>'
          + '</div>'
          + '<div class="smistress-state-main-group-item">'
            + '<img src="images/smistress/state-icon02.png">'
            + '<div class="smistress-state-main-group-item-txt">'
              + '<p>老公坚决离婚</p>'
              + '<p>'
                + '任凭你做多少努力，对方的态度坚决，认为你给不了他想要的家庭。'
              + '</p>'
            + '</div>'
          + '</div>'
        + '</div>'
        + '<div class="smistress-state-main-group">'
          + '<div class="smistress-state-main-group-item">'
            + '<img src="images/smistress/state-icon03.png">'
            + '<div class="smistress-state-main-group-item-txt">'
              + '<p>小三真情实意无所她求</p>'
              + '<p>'
                + '老公心意已决，要与小三组成家庭。'
              + '</p>'
            + '</div>'
          + '</div>'
          + '<div class="smistress-state-main-group-item">'
            + '<img src="images/smistress/state-icon04.png">'
            + '<div class="smistress-state-main-group-item-txt">'
              + '<p>小三强势逼宫</p>'
              + '<p>'
                + '老公坚决离婚，站在小三一边。'
              + '</p>'
            + '</div>'
          + '</div>'
        + '</div>'
      + '</div>'
    },
    initModule;

  initModule = function ($state) {
    $state.html(configMap.main_html);
  };

  return { initModule : initModule };
}());
