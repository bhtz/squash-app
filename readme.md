com.sncf.angular2-bootstrap
==========================

Angular 2 (TypeScript / Browserify) starter kit.

Requirements
------------

* npm
* gulp
* nodejs
* protractor
* mocha

Installation
------------

Install node.js:

[Download Node.js](http://nodejs.org/download/)

Install project dependencies:

	npm install
	
Install gulp (task runner):

	npm install gulp -g

Install selenium-standalone & protractor (test framework):

	npm install protractor -g

Update webdrivers:

	webdriver-manager update

Install mocha (test runner):

	npm install mocha -g
	
Commands
--------

Run web application:

	npm start

Run web application in development mode:

	npm run serve

Run end to end tests:

	npm run test

Run source code validation:

	npm run lint

Build web application:

	npm run build

Release web application:

	npm run release