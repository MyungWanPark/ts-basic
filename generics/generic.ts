{
  interface Basket<B, M, T> {
    bottom(): B;
    middle: () => M;
    top: () => T;
  }

  class FoodBasket<B, M, T> implements Basket<B, M, T> {
    constructor(
      private readonly bottomItem: B,
      private readonly middleItem: M,
      private readonly topItem: T
    ) {}

    bottom(): B {
      return this.bottomItem;
    }

    middle(): M {
      return this.middleItem;
    }

    top(): T {
      return this.topItem;
    }
  }
}
