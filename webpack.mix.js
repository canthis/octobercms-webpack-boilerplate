let mix = require('laravel-mix');

var url = 'sandbox.local';
var theme = 'canthis-webpack-boilerplate';

mix.options({
        processCssUrls: false,
        autoprefixer: {
            enabled: true,
            options: {
                browsers: ['last 2 versions', '> 1%'],
                cascade: true,
                grid: true,
            }
        },
    })
    .setPublicPath('/')
    .sass('src/scss/app.scss', 'assets/css/styles.css')
    .js('src/js/app.js', 'assets/js/scripts.js')
    .version();

mix.browserSync({
    proxy: url,
    notify:true,
    files: [
        'assets/css/**/*',
        'assets/js/**/*',
        '**/*.htm',
    ]
});


