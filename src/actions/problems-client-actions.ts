import type { CssCode } from "@/interfaces/problems";
import { setProdListCookie } from "./cookies-client";

export interface Response {
  success: boolean;
  response: string;
}

const handleTest = async (
  userHTMLCode: string,
  desiredHTMLCode: string,
  userCSSCode: CssCode,
  desiredCSSCode: string,
  excerciseId: number,
): Promise<Response> => {
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
        return {
          success: false,
          response: "no success",
        };
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

    if (!data.areEqual) {
      return {
        success: false,
        response: data.tips.result,
      };
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

  return {
    success: true,
    response: "Estas realizando un buen trabajo",
  };
};

export { handleTest };
