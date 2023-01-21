{
  type Video = {
    author: string;
    id: string;
    releaseDate: Date;
    data: string;
  };

  type metaVideoData = Pick<Video, 'author' | 'id'>;

  function getMetaData(): metaVideoData {
    return {
      author: 'soren',
      id: '1',
    };
  }
}
