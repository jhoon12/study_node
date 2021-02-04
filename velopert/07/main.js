let events = require('events');
let eventEmitter = new events.EventEmitter();

let connectHandler = () =>{
    console.log('Connection Successfull');
    eventEmitter.emit("data_received");
}
eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', ()=>{
    console.log('Data received');
})

eventEmitter.emit('connection');

console.log("Program has ended")