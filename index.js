#!/usr/bin/env node

var path = require('path')
var fs = require('fs')
var through = require('through2')
var chunk = require('chunk-stream')

fs.createReadStream(path.join(__dirname, 'data'))
  .pipe(chunk(100))
  .pipe(through(function (chunk, enc, cb) {
    this.push(chunk)
    setTimeout(cb, Math.random() * 50)
  }))
  .pipe(process.stdout)

