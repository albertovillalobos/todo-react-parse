I'm writing a quick tutorial for a simple to do list using Facebook's React and Parse.

###Environment
- iTerm
- Node + NPM
- Atom
- OSX



###Setting up the project

Open iTerm and create a directory called todo-react-parse. I usually have all my code in ~/repos/ but you can put it anywhere you want.
````javascript
cd ~/repos
mkdir todo-react-parse
````
Go into that directory, and press tab to help you autocomplete

````
cd todo-react-parse
````

(Optionally, before going on this step, it'd be a good idea to initialize a git repo on github so that npm autofills the repo stuff)

Now lets initialize the project with NPM, the node package manager

````
npm init
````
Follow the prompts and fill it in, you may also just type enter to autofill stuff or leave blanks.

We have now the project setup, kind of.


###Scaffolding

Let's now scaffold our app, our project should look pretty empty now. Let's do the following:
````
touch index.html
mkdir css
touch css/style.css
mkdir js
touch js/app.js
````

This should be pretty self explanatory,  we're creating an index.html file, creating the css and js folders and creating a file in each one of them.

I'm using gulp in this project, which is optional, but if you'll use it:
````
touch gulpfile.js
````

Open it in atom and paste the following:
````javascript
var gulp = require('gulp'),
  connect = require('gulp-connect'),
  watch = require('gulp-watch');

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('reload', function() {
  gulp.src('*.html')
    .pipe(connect.reload());

  console.log('detected change');
})

gulp.task('watch', function() {
  gulp.watch('./*.html', ['reload']);
})

gulp.task('default', ['webserver', 'watch']);

````
Since we're using gulp, gulp-connect and gulp-watch, you should install those first like so:

````bash
npm install -g gulp
npm install gulp-connect --save-dev
npm install gulp-watch --save-dev
````
And you're good to go!
