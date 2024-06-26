var gulp = require('gulp');
var rimraf  = require('rimraf');
var fs     = require('fs');
var cheerio     = require('cheerio');

gulp.task('dist', function(done) {

    //remove old dist files from laravel public folder
    rimraf.sync('./../PetsShelter_LaravelApi/public/pets-shelter-angular');

    //copy dist folder into laravel public folder
    gulp.src(['./dist/pets-shelter-angular/**/*', '!./dist/pets-shelter-angular/browser/index.html', '!./dist/stats.json']).pipe(gulp.dest('E:/Web Projekty/PetsShelter/PetsShelter_Back/PetsShelter_LaravelApi/public/pets-shelter-angular'));

    var $ = cheerio.load(fs.readFileSync('./dist/pets-shelter-angular/browser/index.html', 'utf8'));

    //get script tags that need to be injected into main laravel view
    var scripts = $('script').map(function(i, el) {
        var oldSrc =  $(el).attr('src');
        $(el).attr('src', 'pets-shelter-angular/browser/' + oldSrc)
        return $('<div>').append($(el)).html();
    }).toArray();

    //get css tags that need to be injected into main laravel view
    var styles = $('link').filter(function(i, el) {
        return $(el).attr('href').indexOf('styles-OCY2JWHF.css') > -1;
    }).map(function(i, el) {
        var oldSrc =  $(el).attr('href');
        $(el).attr('src', 'pets-shelter-angular/browser/' + oldSrc)
        $(el).attr('href', 'pets-shelter-angular/browser/' + oldSrc)
        return $('<div>').append($(el)).html();
    }).toArray();

    //js scripts replace regex
    var jsSearch = /{{--angular scripts begin--}}[\s\S]*{{--angular scripts end--}}/;
    var jsReplaceStr = '{{--angular scripts begin--}}' + "\n\t\t" + scripts.join("\n\t\t") + "\n\t\t{{--angular scripts end--}}";

    //css styles replace regex
    var cssSearch = /{{--angular styles begin--}}[\s\S]*{{--angular styles end--}}/;
    var cssReplaceStr = '{{--angular styles begin--}}' + "\n\t\t" + styles.join("\n\t\t") + "\n\t\t{{--angular styles end--}}";

    //replace app stylesheet links and js script tags with new ones
    var content = fs.readFileSync('E:/Web Projekty/PetsShelter/PetsShelter_Back/PetsShelter_LaravelApi/resources/views/welcome.blade.php', 'utf8');
    content = content.replace(jsSearch, jsReplaceStr).replace(cssSearch, cssReplaceStr);

    fs.writeFileSync('E:/Web Projekty/PetsShelter/PetsShelter_Back/PetsShelter_LaravelApi/resources/views/welcome.blade.php', content, 'utf8');
    done();
});
