{
  type Coffee = {
    manufacturer: string;
    ingridient: string;
  };

  type Optional<T> = {
    [P in keyof T]?: T[P];
  };

  const CoffeeOptional: Optional<Coffee> = {
    manufacturer: 'kim',
    ingridient: 'coffee beans',
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };

  type smallProxy = {
    electricLine: number;
    height?: number;
    material: string;
  };

  const Proxy1: Proxify<smallProxy> = {
    electricLine: {
      get: () => 3,
      set: (value) => {
        let k = value;
      },
    },
    material: {
      get: () => 'hello',
      set: (value) => {
        let y = value;
      },
    },
  };
}
