/* jslint           browser : true,   continue : true,
   devel  : true,    indent : 2,       maxerr  : 50,
   newcap : true,     nomen : true,   plusplus : true,
   regexp : true,    sloppy : true,       vars : false,
   white  : true
*/
/* global $, spa */

$(function (){
  // 说明 ：
  //  * configMap - 保存模块配置
  //  * stateMap  - 保存运行时的状态值
  //  * jqueryMap - 缓存 jQuery 集合

  var
    para,
    score,
    arr      = [],
    frontArr = [],
    midArr   = [],
    lastArr  = [],
    totalArr = [],
    stateMap = {},
    random_num,      welcome_btn,  question_btn, rule_btn,
    modal_close_btn, question_num, copy_txt,     /*copyTxt,*/
    changeRadom,     showScore,    concatArr,    changeFontSize
    ;

  welcome_btn     = $('.start');
  question_btn    = $('.questions .btn');
  rule_btn        = $('.welcome .rule');
  modal_close_btn = $('.rule-modal-close-btn');
  item            = $('.questions .group .ti');
  copy_txt        = document.getElementsByClassName('copy')[0];
  question_num    = 1;
  console.log(copy_txt);

  /** 字体大小自适应 */
  changeFontSize = (function() {

    // 获取 html 元素
    var rootEle = document.documentElement;
    // 获取设备宽度
    var deviceWidth = rootEle.clientWidth;
    // 改变 html 字体大小 - 以 iPhone6 为准
    rootEle.style.fontSize = deviceWidth / 7.5 + "px";

    window.onresize = function() {
      var rootEle = document.documentElement;
      var deviceWidth = rootEle.clientWidth;
      rootEle.style.fontSize = deviceWidth / 7.5 + "px";
    };

  }());

  welcome_btn.click(function () {
    $('.welcome').addClass('hidden');
    $('.questions').removeClass('hidden');
  });

  rule_btn.click(function () {
    $('.rule-modal').animate(
      { top : 0 },
      300
    );
    $('.modal-opacity').css('display', 'block');
    $('.modal-opacity').animate(
      { opacity : '.8' },
      500
    );
  });

  modal_close_btn.click(function () {
    $('.rule-modal').animate(
      { top : '-10rem' },
      300
    );
    $('.modal-opacity').animate(
      { opacity : '0' },
      500,
      function () {
        $('.modal-opacity').css('display', 'none');
      }
    );
  });

  // copyTxt = function () {
  //   copy_txt.select();
  //   document.execCommand('Copy');
  //   alert('复制成功');
  // };
  // $(copy_txt).click(function () {
  //   copyTxt();
  // });

  changeRadom = (function () {
    for (var i = 0; i < 100; i++) {
      random_num = parseInt(Math.random()*10).toFixed(0);
      if (arr.indexOf(random_num) == -1) {
        arr.push(random_num);
      }
    }
    $(item[arr[0]]).addClass('active');
  }());
  // console.log(arr);

  concatArr = function () {
    for (var i = 36; i < 50; i++) {
      frontArr.push(i);
    }
    for (var j = 50; j < 80; j++) {
      midArr.push(j);
    }
    for (var k = 80; k <= 95; k++) {
      lastArr.push(k);
    }
    totalArr = totalArr.concat(frontArr, midArr, midArr, lastArr);
  };

  showScore = function () {
    concatArr();

    var index = Math.floor(Math.random() * totalArr.length);

    $('.score .result .num').html(totalArr[index]);
    $('.questions').addClass('hidden');
    $('.score').removeClass('hidden');
  };

  question_btn.click(function (){
    arr.shift();
    $('.questions .group .ti.active').remove();
    $(item[arr[0]]).addClass('active');

    if (arr.length === 0) {
      showScore();
    }
  });

});
