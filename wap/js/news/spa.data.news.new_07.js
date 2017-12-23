/*
 * spa.data.news.new_07.js
 * news for data
 * 新闻咨询 07 - 正确恋爱观讲座
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.data.news.new_07 = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-data-news">'
          + '<h2>正确恋爱观讲座</h2>'
          + '<p>'
            + '由橘子创想文化传播有限公司进入中国海洋大学的校园，给中国海洋大学的学子'
            + '们进行了一场关于什么是《正确恋爱观》的专业讲座。'
          + '</p>'
          + '<div class="center">'
            + '<img src="images/news/22.jpg" />'
          + '</div>'
          + '<p>'
            + '《正确恋爱观》的专业爱情讲座。是橘子情感导师团队，和中国海洋大学就当今'
            + '社会下的青年人群的恋爱观念、婚姻理念以及情感问题解决而举办的大型公益讲'
            + '座。现场的气氛火爆，很多的同学早早就占好位置，等待着讲座的开始。'
          + '</p>'
          + '<p>'
            + '此次讲座由橘子情感团队嘉伟导师主讲，各位导师们也为此次讲座做了充分的准'
            + '备。'
          + '</p>'
          + '<div class="center">'
            + '<img src="images/news/23.jpg" />'
          + '</div>'
          + '<p>'
            + '嘉伟老师一开场就调动起全场同学的热烈气氛，围绕着“你是不是单身汪”以及“'
            + '你应该怎么和对方相处”、“你想要什么样的爱情”、“爱情和责任”这样的话题开'
            + '始热烈的讨论，很多的同学更多积极发言，畅所欲言，纷纷表达自己对于爱情的'
            + '见解。'
          + '</p>'
          + '<p>'
            + '嘉伟老师根据大家的讨论，给大家生动有趣的解释了什么是真正的爱情，以及在'
            + '爱情中男生和女生到底应该怎么相处，赢得大家的热烈掌声和附和，现场的气氛'
            + '非常活跃，嘉伟老师更是金句频出，使每一位同学都受益颇深。'
          + '</p>'
          + '<div class="center">'
            + '<img src="images/news/24.jpg" />'
          + '</div>'
          + '<p>'
            + '之后导师就大学生为出发点，循循善诱，让大家陷入了对于婚姻家庭以及自己责'
            + '任的思考，很多的同学开始愿意讲出自己的感受，以及对于责任的理解，大家也'
            + '在老师的指导下，明白了原来婚姻是什么以及自己肩上的责任，更加坚定自己的'
            + '目标，不断的认清自己的责任以及将来的能力，深深的考量自己的人生。'
          + '</p>'
        + '</div>'
    },
    initModule;

  initModule = (function () {
    $('.spa-main').html(configMap.main_html);
  }());
}());