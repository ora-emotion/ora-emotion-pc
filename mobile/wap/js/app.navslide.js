/*
 * app.navslide.js
*/

app.navslide = (function () {
  var
    configMap = {
      // position: fixed; left: 0;
      extended_left : 0,
      // position: fixed; left: -435px;
      retracted_left : -455,
      hidden_retracted_btn_position : -25,
      show_retracted_btn_position : 52
    },
    $sliderBar,    $sliderBarBtnExtended, $sliderBarBtnRetracted,
    listItem,      sliderExtended,        sliderRetracted,
    onClickSlider, initModule
    ;

  // 展开导航滑块
  sliderExtended = function () {
    var bar_left = $('#bar').position().left;
    // 收缩状态时
    if ( bar_left === configMap.extended_left ) {
      $sliderBar.animate({ left : configMap.retracted_left });
      $sliderBarBtnExtended.animate({
        right   : 0,
        width   : 59
      });
      $sliderBarBtnRetracted.find('.icon').animate({
        right   : configMap.hidden_retracted_btn_position,
        opacity : 0
      });
    }
    else if ( bar_left === configMap.retracted_left ) {
      $sliderBar.animate({ left : configMap.extended_left });
      $sliderBarBtnExtended.animate({
        right   : 59,
        width   : 0
      });
      $sliderBarBtnRetracted.find('.icon').animate({
        right   : configMap.show_retracted_btn_position,
        opacity : 1
      });
    }
    return false;
  };

  // 收缩导航滑块
  sliderRetracted = function () {
    var bar_left = $('#bar').position().left;
    // 展开状态时
    if ( bar_left === configMap.extended_left ) {
      $sliderBar.animate({ left : configMap.retracted_left });
      $sliderBarBtnExtended.animate({
        right   : 0,
        width   : 59
      });
      $sliderBarBtnRetracted.find('.icon').animate({
        right   : configMap.hidden_retracted_btn_position,
        opacity : 0
      });
    }
    else if ( bar_left === configMap.retracted_left ) {
      $sliderBar.animate({ left : configMap.extended_left });
      $sliderBarBtnExtended.animate({
        right   : 59,
        width   : 0
      });
      $sliderBarBtnRetracted.find('.icon').animate({
        right   : configMap.show_retracted_btn_position,
        opacity : 0
      });
    }
    return false;
  };

  // initialize slider bar - 初始化滑块
  var initSlider = function () {
    $sliderBar.animate({
      'left'  : configMap.retracted_left
    });
    $sliderBarBtnExtended.animate({
      right   : 0,
      width   : 59
    });
    $sliderBarBtnRetracted.find( '.icon' ).animate({
      right   : configMap.hidden_retracted_btn_position,
      opacity : 0
    });

    return false;
  };

  onClickListItem = function ( event ) {
    var listItem = $( '#bar' ).find( '.list-item' );
    listItem.click(function (event) {
      $(this)
          .addClass( 'active' )
          .siblings().removeClass( 'active' );

      initSlider();

      return false;
    });
  };

  // initialize module
  initModule = function ( $container ) {
    $sliderBar             = $('#bar');
    $sliderBarBtnExtended  = $container.find('.btn-wrap');           // extended button
    $sliderBarBtnRetracted = $container.find('.btn-retracted');     // retracted button
    $sliderBarBtnExtended.click( sliderExtended );
    $sliderBarBtnRetracted.click( sliderRetracted );
    $( 'body, html' ).click( function ( event ) {
      initSlider();
      event.stopPropagation();
      return false;
    });
    onClickListItem();

    return true;
  };

  return { initModule : initModule };

}());
