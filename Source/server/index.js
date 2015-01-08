#!/usr/bin/env node

'use strict';

/* global angular:false */
/*jslint node: true */

//====================================================================

var createIoServer = require('socket.io');
var connect = require('connect');
var serveStatic = require('serve-static');
var http = require('http');
var execPromise = require('exec-promise');
var Promise = require('bluebird');

//====================================================================

exports = module.exports = function (args) {

    console.log('Config du middleware');
    
    var app = connect().use(serveStatic('client/dist'));

    console.log('Cration du serveur web');
    var httpServer = http.createServer(app);

    console.log('Creation du websocket');
    var socketServer = createIoServer(httpServer);

    socketServer.on('connection', function (client) {
        console.log('new connection');
    });

    httpServer.listen((args ? args : 80));

    return new Promise(function (resolve, reject) {
        socketServer.on('close', resolve);
        socketServer.on('error', reject);
    });
}

//====================================================================

if (!module.parent) {
    execPromise(exports);
}
