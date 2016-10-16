var split = require('split');
var through = require('through2');
var count = 0;

var stream = through(function(buffer, _, next) {
  var line = buffer.toString();
  if (count % 2 === 0) {
    this.push(line.toLowerCase() + "\n");
  } else {
    this.push(line.toUpperCase() + "\n");
  }
  count++;
  next();
});

process.stdin
  .pipe(split())
  .pipe(stream)
  .pipe(process.stdout);
