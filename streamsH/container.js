var through = require('through');
var split = require('split');

var combine = require('stream-combiner')

    module.exports = function () {
      var grouper = through(write,end);

        return combine(
            // read newline-separated json,
            // group books into genres,
            // then gzip the output
        );
    }
