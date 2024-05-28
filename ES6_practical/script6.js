// Arrow Functions and this Context:
// Create a class Counter with a method increment that increments a count property by 1. The method should be bound to the correct context such that calling setTimeout(counter.increment, 1000) will correctly increment the counter.
class Counter {
    constructor(count) {
        this.count = 8;
       this.increment = this.increment.bind(this);
    }

    increment=()=>{
        return this.count+=1;
    }
}

const counter = new Counter();
// console.log(counter.increment())
setTimeout(()=>{console.log(counter.increment())}, 1000);script