// 引用 gulp plugin
var gulp = require('gulp');
    gulpSass = require('gulp-sass');    // 載入 gulp-sass


// 建立預設 gulp task
gulp.task('default', function () {
    console.log('###### start ######');
});

gulp.task('styles', function () {
    gulp.src('scss/**/*.scss')    // 指定要處理的 Scss 檔案目錄
        .pipe(gulpSass())         // 編譯 Scss
        .pipe(gulp.dest('css'));  // 指定編譯後的 css 檔案目錄
});
