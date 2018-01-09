/**
 * Created by smpower on 2017/8/30 0030.
 */


var app = (function () {
  var
    changeFontSize, initModule,
    rootEle,        deviceWidth
    ;

  // 加载字体自适应大小函数
  var changeFontSize = (function () {

    rootEle = document.documentElement;  // 获取 html 元素
    deviceWidth = rootEle.clientWidth;       // 获取设备宽度
    // 改变 html 字体大小 - 以 iPhone6 为准
    rootEle.style.fontSize   = deviceWidth / 7.5 + 'px';

    window.onresize = function () {
      rootEle = document.documentElement;
      deviceWidth = rootEle.clientWidth;
      rootEle.style.fontSize = deviceWidth / 7.5 + 'px';
    };
  }());

  var initModule = function ( $container ) {

  };

  return { initModule : initModule };
}());
