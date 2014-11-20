---

# Nature Indirect Costs Scatterplot

Infographic for @naturenews build with [d3.js](http://d3js.org/).

Published at [http://www.nature.com/news/indirect-costs-keeping-the-lights-on-1.16376#/interactive](http://www.nature.com/news/indirect-costs-keeping-the-lights-on-1.16376#/interactive)

### Build process

Uses [Grunt](http://gruntjs.com/) for file concatenation, to compile [Sass](http://sass-lang.com/) and apply [JSHint](https://github.com/gruntjs/grunt-contrib-jshint). If you've not used Grunt before, be sure to check out the [getting started guide](http://gruntjs.com/getting-started).

Install dependencies with `npm install`

Type `grunt` to automatically watch for changes and concat a version of `index.html` into the build and dist folders.

**build/index.html** can be used for local testing. You'll need to set up a local server, which is nice and easy to do with Python 2 on a mac.

	cd build
	python -m SimplHTTPServer 

**dist/index.html** is a 'headerless' file ready to be copied into the polopoly CMS as a HTML widget.