var util = require('util');
var EventEmitter = require('events');

function MyStream() {
	EventEmitter.call(this);
}

util.inherits(MyStream, EventEmitter);

MyStream.prototype.write = function(data) {
	this.emit('data', data);
};

var stream = new MyStream();

console.log(stream instanceof EventEmitter);
console.log(MyStream.super_ === EventEmitter);

stream.on('data', function(data) {
	console.log(`Received data: "${data}"`);
});

stream.write('It works!');

