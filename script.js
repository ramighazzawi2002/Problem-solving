// Q1 : Given an array arr[] of size N, you have to reverse the array using Stack.
// class Stack {
//   constructor() {
//     this.arr = [];
//     this.top = 0;
//   }
//   push(value) {
//     this.arr[this.top] = value;
//     this.top++;
//   }
//   get() {
//     return this.arr;
//   }
//   pop() {
//     const x = this.arr.pop();
//     this.top--;
//     return x;
//   }
// }

// const reverse = arr => {
//   const stack = new Stack();
//   arr.forEach(element => {
//     stack.push(element);
//   });
//   return arr.map(element => stack.pop());
// };

// const arr = [1, 2, 3, 4, 5];
// console.log(reverse(arr));

// Q2 : Implementing a Queue Data Structure using Two Stacks

// class Stack {
//   constructor() {
//     this.arr = [];
//     this.top = 0;
//   }
//   push(value) {
//     this.arr[this.top] = value;
//     this.top++;
//   }
//   get() {
//     return this.arr;
//   }
//   pop() {
//     const x = this.arr.pop();
//     this.top--;
//     return x;
//   }
// }

// class Queue {
//   constructor() {
//     this.arr = [];
//     this.top = 0;
//     this.stack1 = new Stack();
//     this.stack2 = new Stack();
//   }
//   enqueue(element) {
//     this.stack1.push(element);
//   }
//   dequeue() {
//     console.log(this.stack1.get());
//     const x = [...this.stack1.get()];
//     x.forEach(element => {
//       this.stack2.push(this.stack1.pop());
//     });
//     console.log(this.stack2.get());
//     const v = this.stack2.pop();

//     const y = [...this.stack2.get()];
//     y.forEach(element => {
//       this.stack1.push(this.stack2.pop());
//     });
//     return v;
//   }
//   get() {
//     return this.stack1.get();
//   }
// }

// const q1 = new Queue();
// q1.enqueue(1);
// q1.enqueue(2);
// q1.enqueue(3);
// q1.enqueue(4);
// console.log(q1.dequeue());
// console.log(q1.get());
// // Q3 : Create a function to find the sum of an array of integers using recursion

// function sumArray(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   return arr[0] + sumArray(arr.slice(1));
// }

// const numbers = [1, 2, 3, 4, 5];
// console.log(sumArray(numbers));

// Q4 : Create a function that takes a LinkedList and reverses it

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.stack1 = new Stack();
  }
  printAll() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      this.stack1.push(current.data);
      current = current.next;
    }
    console.log(this.stack1.get());
  }
  addToTail(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
}

class Stack {
  constructor() {
    this.arr = [];
    this.top = 0;
  }
  push(value) {
    this.arr[this.top] = value;
    this.top++;
  }
  get() {
    return this.arr;
  }
  pop() {
    const x = this.arr.pop();
    this.top--;
    return x;
  }
}

const l1 = new LinkedList();
l1.addToTail(1);
l1.addToTail(2);
l1.addToTail(3);
l1.printAll();
