interface Problem {
  id: number;
  title: string;
  subtitle: string;
  codeType: string;
  codeSubType: string;
  enunciado: string;
  descripcion: string;
  editors: Editor[];
}
interface Problems {
  [key: string]: Problem[];
}
interface Editor {
  type: string;
  title: string;
  expectedCode: string;
  initialCode: string;
}

interface CssCode {
  [key: string]: string;
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
export type {
  Problem,
  Problems,
  AdvanceStatus,
  ProblemSolved,
  Editor,
  CssCode,
};
