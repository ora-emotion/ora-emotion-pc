/*
 *
 * created by smpower
 * date: 2017.07.27
 *
 * */

var gulp = require("gulp"),
    less = require("gulp-less");

gulp.task("less", function () {
    gulp.src("src/less/*.less")
        .pipe(less())
        .pipe(gulp.dest("css"));
});

gulp.task("default", function () {
    return gulp.watch("src/less/*.less", ["less"]);
});