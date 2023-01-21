{
  type Video = {
    author: string;
    id: string;
    releaseDate: Date;
    data: string;
  };

  type metaVideoData = Omit<Video, 'releaseDate' | 'data'>;

  type Obj1 = {
    name: string;
    age: number;
    email: string;
  };

  type exclude<T, K> = T extends K ? never : T;
  const abc: exclude<'he' | 'she' | 'they', 'he'> = 'she';

  function getMetaData(): metaVideoData {
    return {
      author: 'soren',
      id: '1',
    };
  }
}
