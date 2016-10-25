var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var concat = require('gulp-concat');


gulp.task('sass', function() {
   return gulp.src('css/sass/styles.scss')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('css/'))
      .pipe(reload({stream:true}))
});


gulp.task('scripts', function() {
    return gulp.src('js/dev/*.js')
      .pipe(concat('main.js'))
      .pipe(gulp.dest('js/'));
});

//watch
gulp.task('html', function (){
  return gulp.src('*.html')
  .pipe(reload({stream:true}))
  // Other watchers
});


//watch
gulp.task('watch', ['sass', 'scripts'], function (){
  gulp.watch('css/sass/*.scss', ['sass']);
  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('*.html', ['html']);
  // Other watchers
});

// server root for browser-sync
gulp.task('browserSync', function() {
   browserSync.init({
      server: {
         baseDir: ''
      },
   })
})

// Default Task
gulp.task('default', ['sass', 'scripts', 'html', 'browserSync', 'watch']);
