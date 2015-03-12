Seed Project Angular
===========

Core projet node.js and angularJS


Client features
----------

 - Bower
 - AngularJS


Server features
----------

 - Browserify : Uses AMD specs for client files
 - Connect : Server middleware
 - Gulp : Make process
 - Less : CSS preprocessor
 - Jade : HTML template language
 - Bluebird : Promises
 - Socket.io : Websockets


Developement features
----------

 - Mocha for testing
 - Live reload of browser
 - Live reload of the server
 - Script syntax check


How to
----------

Copy Source files in a new folder.

Run npm install -g gulp
Run npm install -g bower

Run npm install in project directory.
Run bower install in project directory.

Start app with gulp instead of node. (--production parameter will compile HTML, CSS an JS files) :

  gulp [build|build-pages|build-scripts|build-styles|copy-assets|install-bower-components|build|clean|distclean|test] [--production]