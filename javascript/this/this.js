// console.log(this);

class Counter {
  count = 0;
  increase = () => {
    console.log(this);
  };
}

class Simple {}
const counter = new Counter();
const simple = new Simple();
// counter.increase();
simple.bob = counter.increase;
// simple.bob = counter.increase.bind(counter);
simple.bob();
