import { CssCode } from "@/interfaces/problems";
import { getCookie, hasCookie, setCookie } from "cookies-next";

export const getSolvedListCookie = () => {
  if (hasCookie("AdvanceStatus")) {
    const solvedList = JSON.parse(
      (getCookie("AdvanceStatus") as string) ?? "{}",
    );
    return solvedList;
  }
  return {};
};

export function setProdListCookie(
  problemId: number,
  solved: boolean,
  solvedTimeStamp?: Date,
  html?: string,
  css?: CssCode,
) {
  const cookieSolvedList = getSolvedListCookie();
  if (problemId) {
    cookieSolvedList[problemId] = {
      solved,
      solvedTimeStamp,
      html,
      css,
    };
  }
  setCookie("AdvanceStatus", JSON.stringify(cookieSolvedList));
}
