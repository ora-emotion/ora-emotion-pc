/*
 * spa.data.news.new_09.js
 * news for data
 * 新闻咨询 09 - 社会各界人士交流会
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.data.news.new_09 = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-data-news">'
          + '<h2>社会各界人士交流会</h2>'
          + '<div class="center">'
            + '<img src="images/news/02.jpg" />'
          + '</div>'
          + '<p>'
            + '山东省社会各行业跨界交流会在山东省青岛市市南区召开， 23大行业参加了交流'
            + '会。来自各行各业的与会者们惊喜的发现，这是一次与众不同、别具一格的跨界交'
            + '流，跨界碰撞的火花为自己行业发展提供了更多灵感和途径。'
          + '</p>'
          + '<p>'
            + '近几年了，“跨界”已经不是什么新闻了，但是绝大多数人对“跨界”的认识还停留在'
            + '“转行”或“跨行”层面，而本次山东省各行业跨界交流会却完全打破了这一传统认识'
            + '，以开创性的思维重新解读了“跨界”的内涵。'
          + '</p>'
          + '<div class="center">'
            + '<img src="images/news/01.jpg" />'
          + '</div>'
          + '<p>'
            + '橘子情感创始人嘉伟老师受邀参加了本次交流会。作为互联网行业的杰出代表，嘉'
            + '伟老师发表了重要讲话。'
          + '</p>'
          + '<p>'
            + '嘉伟老师首先谈了中国经济飞速发展带来的机遇和冲击，在这种经济飞速发展的大'
            + '势下，谁能够抓住机遇做出正确变革，谁就能赢在起点，谁无法针对冲击做出正确'
            + '变革，谁就会被淘汰。嘉伟老师着重强调了社会各行业加强交流深化合作的作用，'
            + '只有社会各行业通力合作，才能达到共赢，才能共创和谐社会。'
          + '</p>'
          + '<div class="center">'
            + '<img src="images/news/03.jpg" />'
          + '</div>'
          + '<p>'
            + '讲话结束后，很多其他行业从业者对情感挽回行业都比较感兴趣，并对此进行提问'
            + '。针对提问，嘉伟老师做出了详细的回答，阐述了情感挽回行业的发展现状，以及'
            + '情感挽回行业在为解决社会问题，维护社会稳定所起到的作用。现场响起一阵阵热'
            + '烈的掌声。'
          + '</p>'
          + '<p>'
            + '现今社会，结婚率越来越低，离婚率越来越高，这种婚恋不稳定状况极大地影响了'
            + '社会稳定。情感挽回行业应运而生，为维护社会稳定做出了重要贡献。'
          + '</p>'
          + '<div class="center">'
            + '<img src="images/news/04.jpg" />'
          + '</div>'
          + '<p>'
            + '27日下午5点，此次山东省社会各行业跨界交流会圆满结束，人民日报、山东电视'
            + '台、青岛电视台、网易新闻等多家媒体进行报道。'
          + '</p>'
        + '</div>'
    },
    initModule;

  initModule = (function () {
    $('.spa-main').html(configMap.main_html);
  }());
}());
