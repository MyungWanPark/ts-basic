{
  interface Stack {
    size: number;
    push(value: string): void;
    pop(): string;
  }

  type Node = {
    readonly value: string;
    readonly next?: Node;
  };

  class StackImpl implements Stack {
    private _size: number = 0;
    private head?: Node;

    constructor(private readonly capacity: number) {}

    get size(): number {
      return this._size;
    }

    push(value: string) {
      if (this._size === this.capacity) {
        throw new Error('stack is full');
      }
      const node: Node = {
        value,
        next: this.head,
      };

      this.head = node;
      this._size++;
    }

    pop(): string {
      if (this.head == null) {
        throw new Error('Stack is empty!');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl(2);
  stack.push('park');
  stack.push('lee');
  stack.push('kim');

  while (stack.size > 0) {
    console.log(stack.pop());
  }
}
