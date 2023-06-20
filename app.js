const events = require('events');
const formidable = require('formidable');

const { eventEmitter } = require('stream');
const eventEmitter = new events.EventEmitter()

const myEventHandler = () => {
    console.log("event handler")
}

eventEmitter.on('scream', myEventHandler)

eventEmitter.emit('scream')