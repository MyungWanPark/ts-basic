{
  interface Stack<T> {
    size: number;
    push(value: T): void;
    pop(): T;
  }

  type Node<T> = {
    readonly value: T;
    readonly next?: Node<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: Node<T>;

    constructor(private readonly capacity: number) {}

    get size(): number {
      return this._size;
    }

    push(value: T) {
      if (this._size === this.capacity) {
        throw new Error('stack is full');
      }
      const node = {
        value,
        next: this.head,
      };

      this.head = node;
      this._size++;
    }

    pop(): T {
      if (this.head == null) {
        throw new Error('Stack is empty!');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl<string>(3);
  stack.push('park');
  stack.push('lee');
  stack.push('kim');

  while (stack.size > 0) {
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<number>(3);
  stack2.push(1);
  stack2.push(43);
  stack2.push(12412);

  while (stack2.size > 0) {
    console.log(stack2.pop());
  }

  const stack3 = new StackImpl<boolean>(3);
  stack3.push(true);
  stack3.push(false);
  stack3.push(true);

  while (stack3.size > 0) {
    console.log(stack3.pop());
  }
}
