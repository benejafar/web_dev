const EventEmittor = require('events');

//create class
class MyEmittor extends EventEmittor {}

//init object
const myEmittor = new MyEmittor();

//event listener
myEmittor.on('event', () => console.log('event fired'));

//init event
myEmittor.emit('event');
myEmittor.emit('event');
myEmittor.emit('event');
