const EventEmittor = require('events');
const uuid = require('uuid');

class Logger extends EventEmittor{
    log(msg){
        //call event
        this.emit('message',{id:uuid.v4(),msg});
    }
}

// module.exports = Logger;

const logger = new Logger();

logger.on('message',data => console.log('Called listener',data))

logger.log('Hello World');
logger.log('hi');
logger.log('Hello')