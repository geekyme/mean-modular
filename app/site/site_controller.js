/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    _ = require('underscore');


exports.render = function(req, res) {
    res.render('index', {
        user: req.user ? JSON.stringify(req.user) : "null"
    });
};

exports.tmpls = function(req, res){
  res.render('includes/'+req.params.module+'/'+req.params.tmpl)
}