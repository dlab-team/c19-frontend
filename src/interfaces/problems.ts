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

interface AdvanceStatus {
  [key: number]: ProblemSolved;
}
interface ProblemSolved {
  solved: boolean;
  solvedTimeStamp?: Date;
  html?: string;
  css?: string;
}
export type { Problem, Problems, AdvanceStatus, ProblemSolved };
