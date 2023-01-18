{
  function isNull<T>(args: T): T {
    if (args == null) {
      throw new Error('not a valid type');
    }
    return args;
  }

  const result: string = isNull('hello');
}
