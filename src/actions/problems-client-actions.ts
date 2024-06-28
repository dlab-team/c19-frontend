import * as cheerio from "cheerio";
import { Element } from "cheerio";

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

const handleTest = (userCode: string, desiredCode: string) => {
  const $userCode = cheerio.load(userCode);
  const $desiredCode = cheerio.load(desiredCode);
  const userElements = $userCode("body").find("*");
  const desiredElements = $desiredCode("body").find("*");

  if (userElements.length !== desiredElements.length) {
    console.log("reprobado");
    return;
  }

  for (let i = 0; i < userElements.length; i++) {
    const $userElement = $userCode(userElements[i]);
    const $desiredElement = $desiredCode(desiredElements[i]);

    if (!compareElements($userElement, $desiredElement)) {
      console.log("reprobado");
      return;
    }
  }

  console.log("aprobado");
};

export { handleTest };
