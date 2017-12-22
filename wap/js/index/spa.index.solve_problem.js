/*
 * spa.index.solve_problem.js
 * solve problem module for Index
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

spa.index.solve_problem = (function () {
  var
    configMap = {
      solve_problem_html : String()
        + '<div class="spa-module-title">'
          + '<span class="spa-module-title-line"></span>'
          + '<p class="spa-module-title-txt">我们解决的四大问题</p>'
          + '<span class="spa-module-title-line"></span>'
        +  '</div>'
        + '<div class="index-solve-problem">'
          + '<div class="index-solve-problem-row">'
            + '<img src="images/index/solve-problem-pic01.png">'
            + '<img src="images/index/solve-problem-pic02.png">'
          + '</div>'
          + '<div class="index-solve-problem-row">'
            + '<img src="images/index/solve-problem-pic03.png">'
            + '<img src="images/index/solve-problem-pic04.png">'
          + '</div>'
        + '</div>'
    },
    stateMap = { $solve_problem : null },
    initModule;

  initModule = function ($solve_problem) {
    stateMap.$solve_problem = $solve_problem;
    $solve_problem.html(configMap.solve_problem_html);
  };

  return { initModule : initModule };
}());
