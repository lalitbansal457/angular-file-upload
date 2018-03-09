var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minifier');

gulp.task('sass', function(done) {
 gulp.src('src/assets/scss/*.scss')
   .pipe(sass())
   .on('error', sass.logError)
   .pipe(gulp.dest('./src/assets/css'))
   .on('end', done);
});

gulp.task('watch', function() {
 gulp.watch('src/assets/scss/*.scss', ['sass']);
});

gulp.task('watch-images', function(){
  return gulp.src('./src/assets/images/*').pipe(gulp.dest('../../../public/assets/images'))
})

gulp.task('watch-css', function(){
  return gulp.src('./src/styles.css').pipe(gulp.dest('../../../public'))
})

gulp.task('watch-dist', function(){
  return gulp.src('./dist/*.js').pipe(minify({
    minify: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    minifyJS: true,
    getKeptComment: function (content, filePath) {
      var m = content.match(/\/\*![\s\S]*?\*\//img);
      return m && m.join('\n') + '\n' || '';
    }
  })).pipe(gulp.dest('../../../public/js'));
})

gulp.task('prod', ['watch-images', 'watch-dist', 'sass', 'watch-css']);
