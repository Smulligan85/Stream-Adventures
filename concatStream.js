var concat = require('concat-stream');

var stream = concat(function(buffer) {
  process.stdout.write(buffer.toString().split('').reverse('').join('') + '\n');
});

process.stdin.pipe(stream);
