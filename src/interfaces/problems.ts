interface Problem {
  id: number;
  type: number;
  title: string;
  subtitle: string;
  codeType: string;
  codeSubType: string;
  enunciado: string;
  descripcion: string;
  cssCode: CssCode;
  htmlCode: string;
  desiredHTMLCode: string;
  desiredCSSCode: string;
}
interface CssCode {
  css1Code: string;
  css2Code: string;
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
export type { Problem, Problems, AdvanceStatus, ProblemSolved, CssCode };
