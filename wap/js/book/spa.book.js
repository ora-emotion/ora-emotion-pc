/*
 * spa.book.js
 * Book module for SPA
 * 嘉伟导师十本好书推荐
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.book = (function () {
  var
    configMap = {
      main_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">嘉伟导师十本好书推荐</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="book-main">'
          + '<div class="txt-group">'
            + '<p class="para indent">'
              + '多读书，读好书，毋庸置疑是人进步的阶梯。在我们的企业当中，所有情感'
              + '导师、情感分析师、运营人员、文案编辑等，甚至几乎所有岗位的员工，都'
              + '有着经常阅读、研究的良好学习氛围。而公司的读书角，也是大家工作闲暇'
              + '时间，待的最多的地方。'
            + '</p>'
            + '<p class="para indent">'
              + '此次，我们整理出来10本，比较基础且有代表性的书籍，也是相对更能够对'
              + '你有帮助，让你有收获的。以心理学为主，延伸至两性情感交往的方方面面'
              + '，也是我们新员工入职的基础培训教材之一。'
            + '</p>'
            + '<p class="para indent">'
              + '此次，我们整理出来10本，比较基础且有代表性的书籍，也是相对更能够对'
              + '你有帮助，让你有收获的。以心理学为主，延伸至两性情感交往的方方面面'
              + '，也是我们新员工入职的基础培训教材之一。'
            + '</p>'
          + '</div>'
          + '<div class="book-item-group">'
            + '<div class="item">'
              + '<img src="images/books/book01.png" alt="">'
              + '<div class="des">'
                + '<p class="book-title">1.《心理学与生活》 作者：津巴多</p>'
                + '<p class="des">'
                  + '最经典最基础的心理学书籍，“十一五”国家级规划教材，也是美国斯坦'
                  + '福大学多年来使用的教材。由浅入深，教给你如何在心理方面，给自己'
                  + '在生活中一个良好的定位。'
                + '</p>'
              + '</div>'
            + '</div>'
            + '<div class="item">'
              + '<img src="images/books/book02.png" alt="">'
              + '<div class="des">'
                + '<p class="book-title">2.《爱的艺术》 作者：艾.弗洛姆</p>'
                + '<p class="book-des">'
                  + '必读书籍，让你有更好的感悟和收获。爱情是一种积极的，而不是消极'
                  + '的情绪，是人内心生长的东西，而不是被俘虏的情绪。'
                + '</p>'
              + '</div>'
            + '</div>'
            + '<div class="item">'
              + '<img src="images/books/book03.png" alt="">'
              + '<div class="des">'
                + '<p class="book-title">3. 《情商:为什么情商比智商更重要》作者：丹尼尔.戈尔曼</p>'
                + '<p class="book-des">'
                  + '很多学员，智商不低，但情商，尤其是两性方面的情商真的堪忧。智商即'
                  + '命运吗？其实智商并没有我们想象的那样重要。《情商》不仅打破了长'
                  + '久以来智商的天生决定论，更为心理学界探讨已久的“情绪智慧”问题提'
                  + '出关键性的解释。'
                + '</p>'
              + '</div>'
            + '</div>'
            + '<div class="item">'
              + '<img src="images/books/book04.png" alt="">'
              + '<div class="des">'
                + '<p class="book-title">4.《爱情心理学》  作者：罗伯特.J.斯腾伯格</p>'
                + '<p class="book-des">'
                  + '经典作家的经典之作。爱情心理学是研究男女恋爱中的心理现象及其发生'
                  + '与发展规律的科学，即探讨男女在恋爱、婚姻中，爱情的获得及稳固的'
                  + '心理规律，包括恋爱心理和婚姻心理两部分。'
                + '</p>'
              + '</div>'
            + '</div>'
            + '<div class="item">'
              + '<img src="images/books/book05.png" alt="">'
              + '<div class="des">'
                + '<p class="book-title">5.《人生困境整理术》 作者：李子勋</p>'
                + '<p class="book-des">'
                  + '很多问题，不仅仅是情感本身，而是由情感问题的困扰，导致心态崩溃'
                  + '，而延伸出很多次生问题。在生活的方方面面，都困扰着你。这本书，'
                  + '能够更全面的，来帮助你走出困境。'
                + '</p>'
              + '</div>'
            + '</div>'
            + '<div class="item">'
              + '<img src="images/books/book06.png" alt="">'
              + '<div class="des">'
                + '<p class="book-title">6.《发展心理学》 作者：林崇德</p>'
                + '<p class="book-des">'
                  + '讲述了一个人从受精卵开始，直至死亡的整个生命过程中，所以的心理'
                  + '发展。很多人在爱情中，目的性太强， 能够静下心来，看一下这本书'
                  + '，会让你对生命、人生、有一个更深刻的认识。'
                + '</p>'
              + '</div>'
            + '</div>'
            + '<div class="item">'
              + '<img src="images/books/book07.png" alt="">'
              + '<div class="des">'
                + '<p class="book-title">7.《社会心理学》 作者：章志光</p>'
                + '<p class="book-des">'
                  + '人是社会动物，只要是在这个社会上生活，总要有一本行为指南。你的思'
                  + '维， 决定着你的行为，而你的行为会直接导致他人对你的看法和定位。'
                + '</p>'
              + '</div>'
            + '</div>'
            + '<div class="item">'
              + '<img src="images/books/book08.png" alt="">'
              + '<div class="des">'
                + '<p class="book-title">8.《咨询心理学》 作者：乐国安</p>'
                + '<p class="book-des">'
                  + '通过反向思维阅读，更加了解自身的当下心理状态，更好的找到心态问题'
                  + '。更好的与人沟通， 更好的懂得如何疏导、分析问题，你也可以做到心'
                  + '理学入门。'
                + '</p>'
              + '</div>'
            + '</div>'
            + '<div class="item">'
              + '<img src="images/books/book09.png" alt="">'
              + '<div class="des">'
                + '<p class="book-title">9.《异常心理学》 作者：詹姆斯.布彻</p>'
                + '<p class="book-des">'
                  + '部分人多多少少存在心理病理性人格，甚至轻微性变态，存在问题，该正'
                  + '视而不是逃避。 正视自身的某些问题，或者多去了解一些问题，知识面'
                  + '的扩充带来的从来不是消极的影响。'
                + '</p>'
              + '</div>'
            + '</div>'
            + '<div class="item">'
              + '<img src="images/books/book10.png" alt="">'
              + '<div class="des">'
                + '<p class="book-title">10.《性学与爱情心理学》 作者：弗洛伊德</p>'
                + '<p class="book-des">'
                  + '这是一本弗洛伊德的论文集，主要包括《性学三论》、《儿童的性理论》'
                  + '、《爱情心理学》、《无意识》等论文。 从性这一基础的两性核心理论'
                  + '出发，让你更清晰的认识到性学和爱情的关系。'
                + '</p>'
              + '</div>'
            + '</div>'
          + '</div>'
        + '</div>'
    },
    stateMap = {
      $container : null,
      $book      : null
    },
    jqueryMap = {},

    setJqueryMap, changePrefaceImg, initModule;

  setJqueryMap = function () {
    var
      $container = stateMap.$container,
      $book = stateMap.$book;

    jqueryMap = {
      $container : $container,
      $book      : $book
    };
  };

  changePrefaceImg = function () {
    var preface_img = jqueryMap.$container.find('.spa-preface img');

    $('title').text('橘子情感 - 嘉伟导师十本好书推荐');
    preface_img.attr('src', 'images/books/preface.png');
  };

  initModule = function ($container, $book) {
    stateMap.$container = $container;
    stateMap.$book = $book;
    $book.html(configMap.main_html);

    setJqueryMap();
    changePrefaceImg();
  };

  return { initModule : initModule };
}());
