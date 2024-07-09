interface Problem {
  id: number;
  type: number;
  title: string;
  subtitle: string;
  codeType: string;
  enunciado: string;
  descripcion: string;
  cssCode: string;
  htmlCode: string;
  desiredHTMLCode: string;
  desiredCSSCode: string;
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
