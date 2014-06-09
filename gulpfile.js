var gulp            = require('gulp'),
    jade            = require('gulp-jade'),
    minifyCss       = require('gulp-minify-css'),
    sass            = require('gulp-sass'),
    plumber          = require('gulp-plumber'),
    notify          = require('gulp-notify'),
    watch         = require('gulp-watch'),
    compass         = require('gulp-compass'),
    concat          = require('gulp-concat');


gulp.task('template:jade', function(){
	gulp.src('./components/**/*.jade')
    	.pipe(concat('mainj.jade'))
    	.pipe(gulp.dest('./layouts/'));
    return gulp.src('./layouts/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./assets/html'));
});

gulp.task('template:html', function(){
    gulp.src('./components/**/*.html')
        .pipe(concat('main.html'))
        .pipe(gulp.dest('./assets/html'));
});


gulp.task('sass', function () {
    gulp.src('./components/styles.scss')
        .pipe(sass())
        .pipe(minifyCss ())
        .pipe(gulp.dest('./assets/css/'))
});


gulp.task('default', function(){
        gulp.run('template:html', 'sass');
        gulp.watch('./components/**/*.scss', function(){
        gulp.run('sass');
    });
        gulp.watch('./components/**/*.html', function(){
            gulp.run('template:html');
        });
});