interface gameProblem {
  titleGame: string;
  codeType: string;
  enunciadoGame:string;
  problems: gameFormas[];
}
interface gameFormas {
  id: number;
  gameSubType: string;
  codeType: string;
  listOptions: { id: number; option: string; lista: number }[];
  listCorrect: string[];
  listAyuda: string[];
  figuraHtml: string;
  figuraCss: string;
  codigo: string;
  enunciadoGame: string;
}
interface gameProblems {
  [key:string]: gameProblem[],
}

interface gameSolved {
  solved: boolean;
  solvedTimeStamp?: Date;
}

export type { gameProblem, gameProblems, gameFormas, gameSolved };
