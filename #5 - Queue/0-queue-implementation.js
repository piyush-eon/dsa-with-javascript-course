// Basic Queue Implementation

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow, cannot perform dequeue";
    }

    return this.queue.shift();
  }

  isEmpty() {
    return this.size() === 0;
  }

  front() {
    if (this.isEmpty()) {
      return "No Elements in the Queue";
    }

    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }

  printQueue() {
    let queueString = "";
    for (let i = 0; i < this.size(); i++) {
      queueString += this.queue[i] + ", ";
    }

    console.log("Queue: " + queueString);
  }
}

const myQueue = new Queue();

myQueue.enqueue(5);
myQueue.enqueue(96);
myQueue.enqueue(786);

myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.dequeue());
console.log(myQueue.front());
