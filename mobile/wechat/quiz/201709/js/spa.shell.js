/*
 * index.js
 * Root namespace javascript
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.shell = (function (){
  //-------------------------- 模块内可用的变量 ---------------------------------
  // 说明  ：
  //   * configMap - 静态配置属性
  //   * jqueryMap - 缓存 jQuery 集合
  //
  var
    configMap = {
      main_html : String()
        + '<div class="spa-welcome">'
          + '<div class="spa-welcome-start-btn"></div>'
          + '<div class="spa-welcome-rule-btn"></div>'
        + '</div>'
        + '<div class="spa-question"></div>'
        + '<div class="spa-score"></div>'
        + '<div class="spa-modal">'
          + '<div class="spa-modal-content"></div>'
        + '</div>',
      spa_welcome : String()
        + '<img class="spa-welcome-bg" src="images/welcome-bg.png">'
        + '<div class="spa-welcome-start-btn"></div>'
        + '<div class="spa-welcome-rule-btn"></div>',
      spa_question : String()
        + '<div class="spa-question-content">'

          + '<div class="spa-question-content-item">'
            + '<div class="spa-question-content-item-title">'
              + '<span class="title-serial-num"></span>'
              + '<img class="title-serial-txt" src="images/question-item-1.png">'
            + '</div>'
            + '<div class="spa-question-content-item-options">'
              + '<div class="option-item">'
                + '<span class="option-item-icon"></span>'
                + '<div class="option-item-txt">'
                  + 'A. 不断买买买，送TA喜欢的东西'
                + '</div>'
              + '</div>'
              + '<div class="option-item">'
                + '<span class="option-item-icon"></span>'
                + '<div class="option-item-txt">'
                  + 'B. 堵公司，堵家门口，进行实时监控'
                + '</div>'
              + '</div>'
              + '<div class="option-item">'
                + '<span class="option-item-icon"></span>'
                + '<div class="option-item-txt">'
                  + 'C. 发动周边亲朋好友，一起劝说'
                + '</div>'
              + '</div>'
              + '<div class="option-item">'
                + '<span class="option-item-icon"></span>'
                + '<div class="option-item-txt">'
                  + 'D. 学习正确的挽回方法，适度冷冻断'
                  + '联，以退为进<br>'
                + '</div>'
              + '</div>'
            + '</div>'
            + '<div class="spa-question-content-item-next-btn">'
              + '<img class="spa-question-next-btn" src="images/question-next-btn-normal.png">'
              + '<img class="spa-question-submit-btn" src="images/question-submit-btn-normal.png">'
            + '</div>'
          + '</div>'

          + '<div class="spa-question-content-item">'
              + '<div class="spa-question-content-item-title">'
                + '<span class="title-serial-num"></span>'
                + '<img class="title-serial-txt" src="images/question-item-2.png">'
              + '</div>'
              + '<div class="spa-question-content-item-options">'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'A. 固执己见，并与他据理力争，坚持看'
                    + '自己想看的'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'B. 自己一个人看自己喜欢的，陪TA看'
                    + 'TA喜欢的'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'C. 两个都看，但是看对方喜欢的电影的'
                    + '时候睡觉或者心不在焉'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'D. 两个都看，彼此去尽量尝试对方喜欢'
                    + '的事物'
                  + '</div>'
                + '</div>'
              + '</div>'
              + '<div class="spa-question-content-item-next-btn">'
                + '<img class="spa-question-next-btn" src="images/question-next-btn-normal.png">'
                + '<img class="spa-question-submit-btn" src="images/question-submit-btn-normal.png">'
              + '</div>'
          + '</div>'

          + '<div class="spa-question-content-item">'
              + '<div class="spa-question-content-item-title">'
                + '<span class="title-serial-num"></span>'
                + '<img class="title-serial-txt" src="images/question-item-3.png">'
              + '</div>'
              + '<div class="spa-question-content-item-options">'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'A. 责备TA不懂事，让TA学会体谅'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'B. 无条件答应TA出去玩，自己累点不'
                    + '算什么'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                      + 'C. 和TA好好说明情况，说以后会补回'
                      + '来，但是过后又抛到脑后'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'D. 好好和TA说明情况，说以后补回来，'
                    + '并认真计划周末的出行'
                  + '</div>'
                + '</div>'
              + '</div>'
              + '<div class="spa-question-content-item-next-btn">'
                + '<img class="spa-question-next-btn" src="images/question-next-btn-normal.png">'
                + '<img class="spa-question-submit-btn" src="images/question-submit-btn-normal.png">'
              + '</div>'
          + '</div>'

          + '<div class="spa-question-content-item">'
              + '<div class="spa-question-content-item-title">'
                + '<span class="title-serial-num"></span>'
                + '<img class="title-serial-txt" src="images/question-item-4.png">'
              + '</div>'
              + '<div class="spa-question-content-item-options">'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'A. 认为爱TA就要给TA最好的，自己使'
                    + '劲挣钱满足TA'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'B. 斥责TA败家，不给TA好脸色，让TA'
                    + '长记性'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                      + 'C. 把钱藏起来，自己不给TA，TA的也要'
                      + '上交，让TA没的花'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'D. 和TA好好沟通，告诉TA你对未来的规'
                    + '划，说明TA在你心里的重要性'
                  + '</div>'
                + '</div>'
              + '</div>'
              + '<div class="spa-question-content-item-next-btn">'
                + '<img class="spa-question-next-btn" src="images/question-next-btn-normal.png">'
                + '<img class="spa-question-submit-btn" src="images/question-submit-btn-normal.png">'
              + '</div>'
          + '</div>'

          + '<div class="spa-question-content-item">'
              + '<div class="spa-question-content-item-title">'
                + '<span class="title-serial-num"></span>'
                + '<img class="title-serial-txt" src="images/question-item-5.png">'
              + '</div>'
              + '<div class="spa-question-content-item-options">'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'A. 义愤填膺，为另一半打抱不平，扬言'
                    + '要去教训TA的上司'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'B. 给TA讲道理，帮TA分析问题所在并'
                    + '为TA做正确的职业规划'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                      + 'C. 先安抚TA的情绪，待到心情平复后再'
                      + '讲道理'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'D. 一味的惯着TA，TA不开心的时候做'
                    + 'TA的肩膀给TA依靠'
                  + '</div>'
                + '</div>'
              + '</div>'
              + '<div class="spa-question-content-item-next-btn">'
                + '<img class="spa-question-next-btn" src="images/question-next-btn-normal.png">'
                + '<img class="spa-question-submit-btn" src="images/question-submit-btn-normal.png">'
              + '</div>'
          + '</div>'

          + '<div class="spa-question-content-item">'
              + '<div class="spa-question-content-item-title">'
                + '<span class="title-serial-num"></span>'
                + '<img class="title-serial-txt" src="images/question-item-6.png">'
              + '</div>'
              + '<div class="spa-question-content-item-options">'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'A. 互不干涉，各自有自己的朋友圈子，'
                    + '没必要完全占据对方的生活'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'B. 逼迫另一半做自己喜欢做的事，对'
                    + '方厌烦，就跟TA大吵一架'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                      + 'C. 偶尔陪TA看书/和朋友约酒，接受彼'
                      + '此的喜好'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'D. 你讽刺TA总是喝大酒没理想没内在，'
                    + 'TA也挖苦你看书无趣无聊老龄化'
                  + '</div>'
                + '</div>'
              + '</div>'
              + '<div class="spa-question-content-item-next-btn">'
                + '<img class="spa-question-next-btn" src="images/question-next-btn-normal.png">'
                + '<img class="spa-question-submit-btn" src="images/question-submit-btn-normal.png">'
              + '</div>'
          + '</div>'

          + '<div class="spa-question-content-item">'
              + '<div class="spa-question-content-item-title">'
                + '<span class="title-serial-num"></span>'
                + '<img class="title-serial-txt" src="images/question-item-7.png">'
              + '</div>'
              + '<div class="spa-question-content-item-options">'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'A. “我爱你，你就是我的空气，没有你'
                    + '我不能呼吸，我真的不能失去你”'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'B. “想当初，我和我前任热恋的时候也'
                    + '来过这里”'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                      + 'C. “有什么好看的，都不如吃顿好吃的'
                      + '来的实惠”'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'D. 在摩天轮最顶端跟TA聊你们记忆深刻'
                    + '的浪漫场景，慢慢靠近亲吻TA'
                  + '</div>'
                + '</div>'
              + '</div>'
              + '<div class="spa-question-content-item-next-btn">'
                + '<img class="spa-question-next-btn" src="images/question-next-btn-normal.png">'
                + '<img class="spa-question-submit-btn" src="images/question-submit-btn-normal.png">'
              + '</div>'
          + '</div>'

          + '<div class="spa-question-content-item">'
              + '<div class="spa-question-content-item-title">'
                + '<span class="title-serial-num"></span>'
                + '<img class="title-serial-txt" src="images/question-item-8.png">'
              + '</div>'
              + '<div class="spa-question-content-item-options">'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'A. 对于TA的过去不管不问，只要当下爱'
                    + '就好'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'B. 如果TA的过去非常不堪，你会给一'
                    + '定的观察期后再决定是否付出全部的爱'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                      + 'C. 如果TA的过去非常不堪，直接提分手，'
                      + '你认为“江山易改，本性难移”'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'D. 如果TA的过去非常不堪，你会把TA'
                    + '的往事说给你的朋友，让他们给你意见'
                  + '</div>'
                + '</div>'
              + '</div>'
              + '<div class="spa-question-content-item-next-btn">'
                + '<img class="spa-question-next-btn" src="images/question-next-btn-normal.png">'
                + '<img class="spa-question-submit-btn" src="images/question-submit-btn-normal.png">'
              + '</div>'
          + '</div>'

          + '<div class="spa-question-content-item">'
              + '<div class="spa-question-content-item-title">'
                + '<span class="title-serial-num"></span>'
                + '<img class="title-serial-txt" src="images/question-item-9.png">'
              + '</div>'
              + '<div class="spa-question-content-item-options">'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'A. TA不做，你也不做，出去吃，看谁先'
                    + '投降'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'B. 主动做给TA吃，不去强迫TA做任何不'
                    + '喜欢的事>'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                      + 'C. 和TA一起做饭，体验生活中专属于两'
                      + '个人的小情趣'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'D. 强制规定，谁下班早谁做饭'
                  + '</div>'
                + '</div>'
              + '</div>'
              + '<div class="spa-question-content-item-next-btn">'
                + '<img class="spa-question-next-btn" src="images/question-next-btn-normal.png">'
                + '<img class="spa-question-submit-btn" src="images/question-submit-btn-normal.png">'
              + '</div>'
          + '</div>'

          + '<div class="spa-question-content-item">'
              + '<div class="spa-question-content-item-title">'
                + '<span class="title-serial-num"></span>'
                + '<img class="title-serial-txt" src="images/question-item-10.png">'
              + '</div>'
              + '<div class="spa-question-content-item-options">'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'A. 给TA看，TA开心就好，自己心里高兴'
                    + '不高兴无所谓'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'B. 不给TA看，并明确告诉TA你不喜欢'
                    + '别人看你手机'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                      + 'C. 不给TA看，但是要把TA哄开心了'
                  + '</div>'
                + '</div>'
                + '<div class="option-item">'
                  + '<span class="option-item-icon"></span>'
                  + '<div class="option-item-txt">'
                    + 'D. 给TA看，但是告诉TA你不喜欢别人看'
                    + '你的手机，因为是TA，才会让TA看'
                  + '</div>'
                + '</div>'
              + '</div>'
              + '<div class="spa-question-content-item-next-btn">'
                + '<img class="spa-question-next-btn" src="images/question-next-btn-normal.png">'
                + '<img class="spa-question-submit-btn" src="images/question-submit-btn-normal.png">'
              + '</div>'
          + '</div>'

        + '</div>',
      spa_score : String()
        ,
      spa_modal_rule : String()
        + '<div class="spa-modal-welcome-rule">'
          + '<div class="modal-opacity"></div>'
          + '<div class="modal-content">'
            + '<div class="txt">'
              + '<div class="time">'
                + '<p>◆ 活动时间</p>'
                + '<p>9月25日 ~ 10月30日</p>'
              + '</div>'
              + '<div class="rule">'
                + '<p>◆ 活动规则</p>'
                + '<p>'
                  + '吸引力测试共设有10道选择题，满分100分，得分80分以上即可获得红包。'
                  + '若低于80分也可分享到任意社交平台获得再一次挑战机会。'
                  + '<br><br>'
                  + '你的吸引力到底有多大，等你来检验！'
                + '</p>'
              + '</div>'
            + '</div>'
          + '</div>'
          + '<div class="modal-close-btn"></div>'
        + '</div>',
      spa_modal_rule_tip : String()
        + '<div class="spa-modal-welcome-rule-tip">'
          + '<div class="modal-opacity"></div>'
          + '<div class="modal-content">'
            + '<div class="txt">'
              + '<p>'
                + 'hi，这是一个神奇的账号<br>'
                + '据说关注这个账号之后，<br>'
                + '会让烂桃花跑光，正缘大驾光临哦！<br>'
                + '我们每天提供最实际的爱情方法论<br>'
                + '过目不忘，随学随用！<br>'
                + '2017年9月25日至10月30日<br>'
                + '<span class="red">“10000元红包”</span>有奖问答活动来了，<br>'
                + '橘子情感为你准备了一份大惊喜<br>'
                + '只为你能更了解橘子情感！<br>'
                + '并支持我们！<br><br>'
                + '◆ 活动时间：<br>'
                + '2017年9月25日—2017年10月30日<br><br>'
                + '◆ 开抢时间：<br>'
                + '全天候，随时开抢<br><br>'
                + '◆ 红包详情：<br>'
                + '红包面额随机派发<br><br>'
                + '◆ 活动规则：<br>'
                + '吸引力测试共设有10道选择题，满分100分，根据要求进行回答，最终得分'
                + '在80分以上即可参与抽红包，若低于80分也可分享到社交平台再获得一次挑'
                + '战机会（平台不限：微信朋友圈、微博、QQ空间等皆可）！每个微信号每天'
                + '最多可参与2次，第二天参与权限正常。你的吸引力到底有多大，等你来检'
                + '验。<br>'
              + '</p>'
            + '</div>'
          + '</div>'
          + '<div class="modal-close-btn"></div>'
        + '</div>'
    },
    stateMap  = {
      $container          : null,
      random_question_arr : [],
      random_score        : null,
      is_option_checked   : null
    },
    jqueryMap = {},
    root_ele,        device_width,    random_question,
    setJqueryMap,    changeFontSize,  randomQuestion,
    randomScore,     createSerialNum, onClick,
    renderScorePage, initModule;
  //-------------------------- 模块内可用的变量 ---------------------------------

  //----------------------------- 不操作 DOM -----------------------------------
  // randomQuestion()
  // 说明   ：
  //   * 页面加载后题目顺序随机显示
  // 设置   ：
  // 返回值 ： Array
  //   * 返回一个包含题目顺序的数组，通过 stateMap.random_question_arr 调用
  //
  randomQuestion = function () {
    var i;
    for (i = 0; i < 100; i++) {
      // note: parseInt(string, radix) - radix 为 0 表示以 10 为基础进行解析
      random_question = parseInt(Math.random()*10, 0).toFixed(0);
      if (stateMap.random_question_arr.indexOf(random_question) === -1) {
        stateMap.random_question_arr.push(random_question);
      }
    }
    // $(item[arr[0]]).addClass('active');
  };

  // randomScore()
  // 说明   ：
  //   * 页面加载后立即随机产生分数
  // 设置   ：无
  // 返回值 ：Number
  //   * 返回一个随机产生的分数，通过 stateMap.random_score 调用
  //
  randomScore = function () {
    var
      f, m, l, index,
      score_arr_front = [],
      score_arr_mid   = [],
      score_arr_last  = [],
      score_arr_total = [];

    for (f = 36; f < 50; f++) {
      score_arr_front.push(f);
    }
    for (m = 50; m < 80; m++) {
      score_arr_mid.push(m);
    }
    for (l = 80; l <= 95; l++) {
      score_arr_last.push(l);
    }

    score_arr_total = score_arr_total
      .concat(score_arr_front, score_arr_mid, score_arr_mid, score_arr_last);

    index = Math.floor(Math.random() * score_arr_total.length);
    stateMap.random_score = score_arr_total[index];
  };
  //----------------------------- 不操作 DOM -----------------------------------

  //------------------------------ 操作 DOM  -----------------------------------
  // setJqueryMap()
  // 缓存 jQuery 集合
  //
  setJqueryMap = function () {
    var $container = stateMap.$container;

    jqueryMap = {
      $container       : $container,
      $test_start      : $container.find('.spa-welcome-start-btn'),
      $test_rule       : $container.find('.spa-welcome-rule-btn'),
      $question_item   : $container.find('.spa-question-content-item'),
      $question_option : $container.find('.option-item'),
      $spa_score       : $container.find('.spa-score')
      // $question_serial_num : $container.find('.spa-question-serial-num')
    };
  };

  // changeFontSize()
  // 说明 ：
  //   * 动态更改页面文字大小
  //
  changeFontSize = function() {
    root_ele = document.documentElement;
    device_width = root_ele.clientWidth;
    root_ele.style.fontSize = device_width / 7.5 + "px";
  };

  // createSerialNum()
  // 说明   ：
  //   * 为随机生成的题目添加序号
  // 设置   ：无
  // 返回值 ：无
  //
  createSerialNum = function () {
    // 在当前显示的问题前面加上序号
    var
      i,
      question_item       = jqueryMap.$question_item,
      random_question_arr = stateMap.random_question_arr;

    for (i = 0; i < question_item.length; i++) {
      $( $(question_item[random_question_arr[i]]).find('.title-serial-num') )
        .html(i+1);
    }
  };

  //------------------------------ DOM 操作 ------------------------------------

  //------------------------ jQuery 事假处理程序 --------------------------------
  // renderScorePage()
  // 渲染分数页面
  //
  renderScorePage = function () {
    var
      $question_item = jqueryMap.$question_item,
      $last_question = $($question_item)[stateMap.random_question_arr[0]],
      $submit_btn    = $($last_question).find('.spa-question-submit-btn');

    $submit_btn.click(function () {
      spa.score.toggleScoreModal();
    });

  };

  // onClick()
  //
  onClick = function () {
    // 弹出 ‘活动锦囊’ 模态框
    jqueryMap.$test_rule.click(function () {
      jqueryMap.$container
        .find('.spa-modal-content')
        .html(configMap.spa_modal_rule);

      jqueryMap.$container.find('.spa-modal').css({ 'display' : 'block' });
      jqueryMap.$container.find('.modal-opacity').animate(
        { 'opacity' : '.8' },
        300
      );
      jqueryMap.$container.find('.modal-content').animate(
        { 'top' : '0' },
        300
      );

      // 隐藏 ‘活动锦囊’ 模态框
      jqueryMap.$container.find('.modal-close-btn').click(function (){
        jqueryMap.$container.find('.modal-opacity').animate(
          { 'opacity' : '0' },
          300
        );
        jqueryMap.$container.find('.modal-content').animate(
          { 'top' : '-20rem' },
          300,
          function () {
            jqueryMap.$container.find('.spa-modal').css({ 'display' : 'none' });
          }
        );
      });

    });

    // 弹出 rule 模态框
    jqueryMap.$test_start.click(function () {
      jqueryMap.$container
        .find('.spa-modal-content')
        .html(configMap.spa_modal_rule_tip);

      jqueryMap.$container.find('.spa-modal').css({ 'display' : 'block' });
      jqueryMap.$container.find('.modal-opacity').animate(
        { 'opacity' : '.8' },
        300
      );
      jqueryMap.$container.find('.modal-content').animate(
        { 'top' : '0' },
        300
      );

      // 隐藏 ‘rule’ 模态框并跳转到问答页面
      jqueryMap.$container.find('.modal-close-btn').click(function (){
        var
          question_item,   current_item, question_btn,
          question_option;

        jqueryMap.$container.find('.spa-welcome').css('display', 'none');
        jqueryMap.$container.find('.spa-question').css('display', 'block');

        jqueryMap.$container.find('.modal-content').animate(
          { 'top' : '-20rem' },
          300,
          function () {
            jqueryMap.$container.find('.spa-modal').css({ 'display' : 'none' });
          }
        );

        question_item = jqueryMap.$container.find('.spa-question-content-item');
        question_btn  = $('.spa-question-next-btn');
        current_item  = $(question_item)[stateMap.random_question_arr[0]];
        $(current_item).addClass('active');
        createSerialNum();

        // 激活选项
        question_option = jqueryMap.$question_option;
        question_option.click(function () {
          // 激活选项前面的图标
          question_option.find('.option-item-icon').css(
            'background-image', 'url("images/question-option-icon-normal.png")'
          );
          $(this).find('.option-item-icon').css(
            'background-image', 'url("images/question-option-icon-active.png")'
          );
          // 激活 “下一题” 按钮
          $($(question_item)[stateMap.random_question_arr[0]])
            .find('.spa-question-next-btn')
            .attr('src', 'images/question-next-btn-active.png');
          // 激活 “提交” 按钮
          $($(question_item)[stateMap.random_question_arr[0]])
            .find('.spa-question-submit-btn')
            .attr('src', 'images/question-submit-btn-active.png');
          renderScorePage();

          stateMap.is_option_checked = true;
          //
          // 下一题
          // console.log(jqueryMap.$container.f
          if (stateMap.random_question_arr.length >= 2) {
            question_btn.click(function () {
              if (stateMap.is_option_checked) {
                // 点击 “下一题” 按钮时，隐藏之前的题目
                if (stateMap.random_question_arr.length > 1) {
                  $($(question_item)[stateMap.random_question_arr[0]]).hide();
                  stateMap.random_question_arr.shift();

                  $($(question_item)[stateMap.random_question_arr[0]])
                    .addClass('active');
                  stateMap.is_option_checked = false;
                }
                // 当做完题目时，渲染分数页面
                if (stateMap.random_question_arr.length === 1) {
                  $($(question_item)[stateMap.random_question_arr[0]])
                    .find('.spa-question-next-btn').hide()
                    .siblings().show();
                }
              }

            });
          }


        });

      });
    });

  };



  //------------------------ jQuery 事假处理程序 --------------------------------

  //----------------------------- 公开方法 -------------------------------------
  initModule = function ($container) {
    stateMap.$container = $container;
    $container.html(configMap.main_html);
    // !!! 调试完再解开
    $container.find('.spa-welcome').html(configMap.spa_welcome);
    $container.find('.spa-question').html(configMap.spa_question);
    setJqueryMap();

    spa.score.initModule(jqueryMap.$spa_score);

    changeFontSize();
    randomQuestion();
    randomScore();
    onClick();


    // jqueryMap.$container.find('.spa-question')
    //   .html(configMap.spa_question)
    //   .css('display', 'block');

    console.log('题目随机：' + stateMap.random_question_arr);
    console.log('分数随机：' + stateMap.random_score);
    $('.spa-score').find('.final-score').html(stateMap.random_score);
  };

  return { initModule : initModule };
  //----------------------------- 公开方法 -------------------------------------
}());
