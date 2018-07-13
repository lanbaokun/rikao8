var gulp = require('gulp');
var server = require('gulp-webserver');
var path = require('path');
var url = require('url');
var fs = require('fs');



gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            prot: 8989,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (req.url === '/favicon.ico') {
                    return false
                }
                pathnamme = pathname === '/' ? '/index.html' : pathname;
                res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)))
            }
        }))
})