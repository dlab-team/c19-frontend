interface Problem {
  title: string;
  subtitle: string;
  enunciado: string;
  cssCode: string;
  htmlCode: string;
  descripcion: string;
  id: number;
  codeType: string;
}

interface Problems {
  [key: string]: Problem[];
}

interface Status {
  problemId: number;
  solved: boolean;
  solvedTimeStamp?: Date;
  html?: string;
  css?: string;
}

export type { Problem, Problems, Status };
