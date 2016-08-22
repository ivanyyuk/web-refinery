"use strict";
var path = require('path');
var express = require('express');


module.exports = function (app) {

    var root = app.getValue('projectRoot');

    var npmPath = path.join(root, './node_modules');
    var publicPath = path.join(root, './public');
    var browserPath = path.join(root, './browser');
    var hostedPath = path.join(root, './hosted-projects');
    var bowerPath = path.join(root, './bower_components');


    app.use(express.static(npmPath));
    app.use(express.static(publicPath));
    app.use(express.static(browserPath));
    app.use(express.static(bowerPath));
    // app.use(express.static(hostedPath));

};
