/*
 * spa.smarriage.method.js
 * Method module for Save Marriage
 * 错误挽回方式
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.smarriage.method = (function () {
  var
    configMap = {
      item_normal : {
        height : '0'
      },
      item_active : {
        height : '1.8rem',
        width : '5.26rem',
        background : 'url(images/smarriage/method-bg.png) center center no-repeat',
        backgroundSize : '100% 100%'
      },
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">错误挽回方式</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'

        + '<div class="smarriage-method-main">'
          + '<div class="ul1">'
      			+ '<input id="toggle1" type="radio" name="toggle">'
      			+ '<label for="toggle1" class="label1">守株待兔等对方服软</label>'
      			+ '<section class="content content1 active">'
      				+ '<p class="p1">'
      					+ '这是一种极其消极的挽回方式，当对方不想挽回这段感情时，你守株待兔是'
                + '没有任何意义的，只会错过最佳挽回时间。'
      				+ '</p>'
      			+ '</section>'
      			+ '<input id="toggle2" type="radio" name="toggle">'
      			+ '<label for="toggle2" class="label2">互不理睬以冷战降温</label>'
      			+ '<section class="content content2">'
      				+ '<p class="p1">'
      					+ '发生矛盾的双方需要解决矛盾，以冷战来降温的方式本质上就是错误的，矛'
                + '盾永远不会因为你们互不理睬而被解决。'
      				+ '</p>'
      			+ '</section>'
      			+ '<input id="toggle3" type="radio" name="toggle">'
      			+ '<label for="toggle3" class="label3">请求外援发动亲朋好友介入</label>'
      			+ '<section class="content content3">'
      				+ '<p class="p1">'
      					+ '婚姻的破裂和挽回都是你们两个人的事情，其他人无法感同身受，在对方眼'
                + '里，通通都是站着说话不腰疼。'
      				+ '</p>'
      			+ '</section>'
      			+ '<input id="toggle4" type="radio" name="toggle">'
      			+ '<label for="toggle4" class="label4">孩子要挟让对方再也见不到孩子</label>'
      			+ '<section class="content content4">'
      				+ '<p class="p1">'
      					+ '首先你这种行为就是违法的，其次以孩子作为要挟，只会让对方更恨你，而'
                + '不是跟你复合。'
      				+ '</p>'
      			+ '</section>'
      			+ '<input id="toggle5" type="radio" name="toggle">'
      			+ '<label for="toggle5" class="label5">威逼利诱从第三者下手</label>'
      			+ '<section class="content content5">'
      				+ '<p class="p1">'
      					+ '出轨的根本原因还是在你们身上， 而不是在第三者身上，如果不解决根本'
                + '原因，你逼走了一个第三者还会再来一个，源源不断。'
      				+ '</p>'
      			+ '</section>'
      			+ '<input id="toggle6" type="radio" name="toggle">'
      			+ '<label for="toggle6" class="label6">追究他人辱骂对方亲朋</label>'
      			+ '<section class="content content6">'
      				+ '<p class="p1">'
      					+ '你们的婚姻，绝不是对方亲朋挑唆几句就会出现问题，你去辱骂对方亲朋，'
                + '会让对方难堪，无法面对亲朋让对方不想再搭理你。'
      				+ '</p>'
      			+ '</section>'
      		+ '</div>'
        + '</div>'
    },
    stateMap = { $method : null },
    jqueryMap = {},
    setJqueryMap, dropList, initModule;

  setJqueryMap = function () {
    var $method = stateMap.$method;
    jqueryMap = {
      $method    : $method,
      $label     : $method.find('.smarriage-method-main label'),
      $content   : $method.find('.smarriage-method-main .content'),
      $section   : $method.find('.smarriage-method-main section'),

      $label01   : $method.find('.smarriage-method-main label1'),
      $label02   : $method.find('.smarriage-method-main label2'),
      $label03   : $method.find('.smarriage-method-main label3'),
      $label04   : $method.find('.smarriage-method-main label4'),
      $label05   : $method.find('.smarriage-method-main label5'),
      $label06   : $method.find('.smarriage-method-main label6'),
    };
  };

  dropList = function () {
    jqueryMap.$label.click(function () {
      jqueryMap.$section.removeClass('active');
    });

    jqueryMap.$label.click(function (event) {
      var target = event.target;

      switch (target.className.toLowerCase()) {
        case 'label1':
          jqueryMap.$content.css(configMap.item_normal);
          $('.smarriage-method-main .content1').css(configMap.item_active);
          break;
        case 'label2':
          jqueryMap.$content.css(configMap.item_normal);
          $('.smarriage-method-main .content2').css(configMap.item_active);
          break;
        case 'label3':
          jqueryMap.$content.css(configMap.item_normal);
          $('.smarriage-method-main .content3').css(configMap.item_active);
          break;
        case 'label4':
          jqueryMap.$content.css(configMap.item_normal);
          $('.smarriage-method-main .content4').css(configMap.item_active);
          break;
        case 'label5':
          jqueryMap.$content.css(configMap.item_normal);
          $('.smarriage-method-main .content5').css(configMap.item_active);
          break;
        case 'label6':
          jqueryMap.$content.css(configMap.item_normal);
          $('.smarriage-method-main .content6').css(configMap.item_active);
          break;
        default:
          break;
      }
    });
  };

  initModule = function ($method) {
    stateMap.$method = $method;
    $method.html(configMap.main_html);

    setJqueryMap();
    dropList();
  };

  return { initModule : initModule };
}());
