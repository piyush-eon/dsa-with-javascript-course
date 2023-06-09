// Ques 2 : Implement Stack using Queues
// Implement a last -in -first - out(LIFO) stack using only two queues.
// The implemented stack should support all the functions of a stack (push, top, pop, and empty).

var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
};

// q1 - [4,2,3,5]
// q2 - []

MyStack.prototype.push = function (x) {
  while (this.q1.length !== 0) {
    this.q2.push(this.q1.shift());
  }
  this.q1.push(x);
  while (this.q2.length !== 0) {
    this.q1.push(this.q2.shift());
  }
};

MyStack.prototype.pop = function () {
  return this.q1.shift();
};

MyStack.prototype.top = function () {
  return this.q1[0];
};

MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};

var stack = new MyStack();
stack.push(3);
stack.push(5);
stack.push(96);
stack.push(24);
stack.pop();
console.log(stack.top());
