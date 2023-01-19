{
  function fetch(url: string) {
    if (url === 'localhost') {
      throw new Error(`cannot fetch from url: ${url}`);
    }
    return `fetch from ${url}...`;
  }

  function garbageCollect() {
    console.log('garbage collecting...');
  }
  const url: string = 'localhost';

  function run() {
    try {
      console.log(fetch(url));
    } catch (error) {
      console.error('error happens...');
      return;
    } finally {
      garbageCollect();
      console.log('all done!');
    }
  }

  run();
}
