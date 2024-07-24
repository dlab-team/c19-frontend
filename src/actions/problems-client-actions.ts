import type { CssCode } from "@/interfaces/problems";
import { setProdListCookie } from "./cookies-client";

export interface Response {
  success: boolean;
  response: string[];
}

const handleTest = async (
  userHTMLCode: string,
  desiredHTMLCode: string,
  userCSSCode: CssCode,
  desiredCSSCode: string,
  excerciseId: number,
): Promise<Response> => {
  let alldifss: string[] = [];
  //Comparar CSS
  if (
    userCSSCode.css1Code.trim().length > 0 &&
    desiredCSSCode.trim().length > 0
  ) {
    try {
      const response = await fetch("/api/css", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userCss: userCSSCode.css1Code + userCSSCode.css2Code,
          desiredCss: desiredCSSCode,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al optimizar CSS");
      }

      const data = await response.json();

      if (!data.success) {
        alldifss = [...alldifss, ...data.cssDifss];
      }
    } catch (error) {
      console.error("Error al llamar a la API:", error);
    }
  }

  // fin comparar CSS

  try {
    const response = await fetch("/api/html", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userHtml: userHTMLCode,
        desiredHtml: desiredHTMLCode,
      }),
    });

    const data = await response.json();
    //console.log(data)
    if (!data.areEqual) {
      alldifss = [...alldifss, ...data.diffsMsgs];
    }
  } catch (error) {
    console.log(error);
  }
  setProdListCookie(
    Number(excerciseId),
    true,
    new Date(),
    userHTMLCode,
    userCSSCode,
  );

  if (alldifss.length === 0) {
    return {
      success: true,
      response: ["Estas realizando un buen trabajo"],
    };
  } else {
    return {
      success: false,
      response: alldifss,
    };
  }
};

const handleIA = async (diffsMsgs: string[]) => {
  try {
    const response = await fetch("/api/ia", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        diffsMsgs,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { handleTest, handleIA };
