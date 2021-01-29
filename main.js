let events = require('events');

let eventEmitter = new events.EventEmitter()

let connectHandler = () => {
    console.log('Connection successfull');

    eventEmitter.emit("data_received");
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function(){
    console.log('Data Received');
})

eventEmitter.emit('connection');

console.log("Program has ended")