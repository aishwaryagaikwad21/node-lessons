const EventEmitter = require('events');

function Counter() {
  let count = 0;
  this.start = function() {
    count++;
    console.log(`Count is now ${count}`);
    this.emit('increment', count); // Emit an event
  };
}

// Make Counter inherit from EventEmitter
Counter.prototype = new EventEmitter();

const myCounter = new Counter();

// Listen for the 'increment' event
myCounter.on('increment', (n) => {
  console.log(`Event received! Count is ${n}`);
});

// Start counting
myCounter.start();
myCounter.start();

/*
you create your own object, like a counter that counts numbers.

If you make your Counter object extend (inherit from) EventEmitter, then:

Your Counter can emit events like "start", "increment", or "stop".

Other parts of your code can listen for these events and do something when they happen.
Counter.prototype = new EventEmitter()
→ means every Counter object can now use .emit() and .on() methods.

When this.emit('increment', count) runs,
→ Node “announces” that an 'increment' event happened.

myCounter.on('increment', callback)
→ tells Node, “Hey, whenever that event happens, run this function!”*/