{
  type Cafe = {
    music: string;
    drink: string;
    volumn: number;
    desert: string;
  };

  type privateCafe = Cafe['drink'];

  type CoworkingSpace = keyof Cafe;
  const section: CoworkingSpace = 'desert';
}
