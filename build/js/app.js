(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var journal = require('./../js/journal.js').journal

$(document).ready(function() {
  $("#journal").submit(function(event) {
    event.preventDefault();
    var title = $("input#title").val();
    var body = $("input#body").val();
    var output = new Journal(title, body);




    $("#titleOutput").prepend("<li>" + output.title + "</li>");
    $("#bodyOutput").prepend("<li>" + output.body + "</li>");
    $("#countOutput").prepend("<li>" + output.wordCount() + "</li>");

  });
});

},{"./../js/journal.js":2}],2:[function(require,module,exports){
//Length method for number of words in the title

exports.journal = function(title, body) {
  this.title = title;
  this.body = body;
};

exports.journal.prototype.wordCount = function() {
  var body = this.body;
  var bodyArray = body.split(" ");
  var bodyLength = bodyArray.length;

  return bodyLength;
};

},{}]},{},[1]);
