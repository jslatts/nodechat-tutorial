
// noop to keep references low.
exports.noop = function () {};

// Logger function.
exports.log = function log (error, results) {
  if (error) return console.error(error);

  var ret;

  if (results instanceof Array) {
    var result;
    ret = [];

    for (var i = 0, il = results.length; i < il; i++) {
      result = results[i];

      if (result instanceof Buffer) {
        ret.push(result.toString());
      } else {
        ret.push(result);
      }
    }
  } else if (results instanceof Buffer) {
    ret = results.toString();
  } else ret = results;

  console.log(ret);
};

// Fast copyBuffer method for small buffers.
exports.copyBuffer = function copyBuffer (source, target, start, s_start, s_end) {
  s_end || (s_end = source.length);

  for (var i = s_start; i < s_end; i++) {
    target[i - s_start + start] = source[i];
  }

  return target;
};

// Fast write buffer for small uns.
var writeBuffer = exports.writeBuffer = function writeBuffer (buffer, string, offset) {
  for (var i = 0, il = string.length; i < il; i++) {
    buffer[i + offset] = string.charCodeAt(i);
  }

  return il;
};

var toArray = exports.toArray = function toArray (args) {
  var len = args.length,
      arr = new Array(len), i;

  for (i = 0; i < len; i++) {
    arr[i] = args[i];
  }

  return arr;
};

// Queue class adapted from Tim Caswell's pattern library
// http://github.com/creationix/pattern/blob/master/lib/pattern/queue.js
var Queue = function () {
  this.array = Array.prototype.slice.call(arguments);
  this.offset = 0;
};

exports.Queue = Queue;

Queue.prototype.shift = function () {
  if (this.array.length === 0) return;
  var ret = this.array[this.offset];
  this.array[this.offset++] = undefined;
  if (this.offset === this.array.length) {
    this.array.length = 0;
    this.offset       = 0;
  }
  return ret;
}

Queue.prototype.push = function (item) {
  return this.array.push(item);
};

Object.defineProperty(Queue.prototype, 'length', {
  get: function () {
    return this.array.length;
  }
});
;
