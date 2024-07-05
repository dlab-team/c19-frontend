import * as cheerio from "cheerio";
import { Element } from "cheerio";
import Swal from "sweetalert2";

const compareElements = (
  $userElement: cheerio.Cheerio<Element>,
  $desiredElement: cheerio.Cheerio<Element>,
) => {
  // Compara el nombre de las etiquetas
  if ($userElement[0].tagName !== $desiredElement[0].tagName) {
    return false;
  }

  // Compara el texto contenido en las etiquetas
  if ($userElement.text().trim() !== $desiredElement.text().trim()) {
    return false;
  }

  // Compara los atributos de las etiquetas
  const userAttributes = $userElement[0].attribs;
  const desiredAttributes = $desiredElement[0].attribs;

  const userAttrKeys = Object.keys(userAttributes);
  const desiredAttrKeys = Object.keys(desiredAttributes);

  if (userAttrKeys.length !== desiredAttrKeys.length) {
    return false;
  }

  for (const key of userAttrKeys) {
    if (userAttributes[key] !== desiredAttributes[key]) {
      return false;
    }
  }

  return true;
};

/* const compareCSS = (userCSS: string, desiredCSS: string): boolean => {
  const ast1 = csstree.parse(userCSS);
  const ast2 = csstree.parse(desiredCSS);

  // Serializar los ASTs de vuelta a cadenas CSS para compararlas
  const serializedCss1 = csstree.generate(ast1);
  const serializedCss2 = csstree.generate(ast2);

  // Comparar las cadenas CSS serializadas
  return serializedCss1 === serializedCss2;
};
 */

const handleTest = async (
  userHTMLCode: string,
  desiredHTMLCode: string,
  userCSSCode: string,
  desiredCSSCode: string,
) => {
  const $userCode = cheerio.load(userHTMLCode);
  const $desiredCode = cheerio.load(desiredHTMLCode);
  const userHTMLElements = $userCode("body").find("*");
  const desiredHTMLElements = $desiredCode("body").find("*");

  if (userCSSCode.trim().length > 0 && desiredCSSCode.trim().length > 0) {
    try {
      const response = await fetch("/api/css", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ css1: userCSSCode, css2: desiredCSSCode }),
      });

      if (!response.ok) {
        throw new Error("Error al optimizar CSS");
      }

      const data = await response.json();
      if (!data.success) {
        Swal.fire({
          title: "Respuesta Incorrecta",
          text: "Vuelve a intentarlo",
          icon: "error",
          confirmButtonText: "Ok",
        });
        return;
      }
    } catch (error) {
      console.error("Error al llamar a la API:", error);
    }
  }

  if (userHTMLElements.length !== desiredHTMLElements.length) {
    Swal.fire({
      title: "Respuesta Incorrecta",
      text: "Vuelve a intentarlo",
      icon: "error",
      confirmButtonText: "Ok",
    });
    return;
  }

  for (let i = 0; i < userHTMLElements.length; i++) {
    const $userElement = $userCode(userHTMLElements[i]);
    const $desiredElement = $desiredCode(desiredHTMLElements[i]);

    if (!compareElements($userElement, $desiredElement)) {
      Swal.fire({
        title: "Respuesta Incorrecta",
        text: "Vuelve a intentarlo",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }
  }

  Swal.fire({
    title: "Respuesta Correcta",
    text: "Estas haciendo un buen trabajo",
    icon: "success",
    confirmButtonText: "Ok",
  });
};

export { handleTest };
