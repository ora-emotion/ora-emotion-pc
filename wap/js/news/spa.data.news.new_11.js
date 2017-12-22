/*
 * spa.data.news.new_11.js
 * news for data
 * 新闻咨询 11 - 我们是一家人：飞扬老师、千无老师生日
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.data.news.new_11 = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-data-news">'
          + '<h2>我们是一家人：飞扬老师、千芜老师生日</h2>'
          + '<p>走进橘子情感，映入眼帘的便是员工们其乐融融，一起为飞扬老师、千无老师'
          + '庆祝生日的场景。'
          + '</p>'
          + '<div class="center">'
            + '<img src= "images/news/30.jpg"  alt="橘子情感--我们是一家人：飞扬老师、千无老师生日"/>'
          + '</div>'
          + '<p>'
            + '公司事先准备好蛋糕和礼物，打算在他们不知情的情况下给他们一个惊喜，在5'
            + '月31日下午3点，大家都停下手头的工作，由嘉伟老师推着蛋糕入场，大家纷纷'
            + '掏出自己精心准备的礼物送给飞扬老师和千芜老师，并送上了生日祝福，给他们'
            + '戴上生日帽并让他们发表生日感言。'
          + '</p>'
          + '<div class="center">'
            + '<img src="images/news/31.jpg" alt="橘子情感--我们是一家人：飞扬老'
            + '师、千无老师生日"/>'
          + '</div>'
          + '<p>'
            + '“谢谢大家给我们准备的生日惊喜，没想到大家都记得我们的生日，真的很开心'
            + '，橘子情感就像我的第二个家一样，希望公司能够越办越好，我们一起努力。”'
            + '飞扬老师如是说，千芜老师在旁边表示赞同，并打趣道：“生日愿望说出来就不'
            + '灵了。”大家哄堂大笑。'
          + '</p>'
          + '<p>'
            + '从飞扬老师和千芜老师的话语中可以感受到员工们对公司的期望和祝福。接下来'
            + '不知道谁带头唱起了生日快乐歌，飞扬老师和千芜老师在大家的生日歌中吹熄了'
            + '生日蛋糕上的蜡烛，并一起切蛋糕为同事分发。'
          + '</p>'
          + '<p>'
            + '这已经不是第一次为员工庆生了，导师嘉伟表示：“我们公司每周五都会举办员'
            + '工活动，给每个员工庆生，目的就是为了让公司员工在工作之余有放松娱乐的时'
            + '间，更让他们感受到我们是一个大家庭，在这里感受到温暖。”'
          + '</p>'
        + '</div>'
    },
    initModule;

  initModule = (function () {
    $('.spa-main').html(configMap.main_html);
  }());
}());
