{
  type Color = {
    name: string;
  };

  type ColorUsage = 'painting' | 'hobby' | 'plasticSurgery';

  const relatedColor: Record<ColorUsage, Color> = {
    painting: {
      name: 'yellow',
    },
    hobby: {
      name: 'brown',
    },
    plasticSurgery: {
      name: 'transparent',
    },
  };
  const types: Uppercase<ColorUsage> = 'HOBBY';
}
