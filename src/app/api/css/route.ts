/* import { NextResponse } from "next/server";
import postcss from "postcss";
import postcssPresetEnv from "postcss-preset-env";
import cssnano from "cssnano";
import safeParser from "postcss-safe-parser";

// Función para procesar CSS con PostCSS y cssnano
const processCSS = async (css: string) => {
  const result = await postcss([
    postcssPresetEnv(),
    cssnano({
      preset: [
        "default",
        {
          normalizeWhitespace: true,
          convertValues: true,
        },
      ],
    }),
  ]).process(css, { parser: safeParser, from: undefined });
  const root = result.root;

  // Filtrar solo los nodos de tipo 'rule' y ordenarlos por el selector
  const rules = root.nodes.filter((node) => node.type === "rule");
  rules.sort((a, b) => (a.selector > b.selector ? 1 : -1));

  // Reemplazar los nodos existentes por los nodos ordenados
  root.removeAll();
  rules.forEach((rule) => root.append(rule));

  return root.toString();
};

// Manejador de la ruta de la API
export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Método no permitido" }, { status: 405 });
  }

  const { userCss, desiredCss } = await req.json();

  try {
    const optimizedCSS1 = await processCSS(userCss);
    const optimizedCSS2 = await processCSS(desiredCss);

    if (optimizedCSS1 === optimizedCSS2) {
      return NextResponse.json({ success: true }, { status: 200 });
    }
    return NextResponse.json({ success: false }, { status: 200 });
  } catch (error) {
    console.error("Error al optimizar CSS:", error);
    return NextResponse.json(
      { error: "Error interno al optimizar CSS" },
      { status: 500 },
    );
  }
}
 */

import { NextResponse } from "next/server";
import postcss from "postcss";
import postcssJs from "postcss-js";
import postcssPresetEnv from "postcss-preset-env";
import cssnano from "cssnano";
import safeParser from "postcss-safe-parser";
import { diffCss } from "diff";

type JsonValue = string | number | boolean | null | JsonObject | JsonArray;
interface JsonObject {
  [key: string]: JsonValue;
}
type JsonArray = JsonValue[];

// Función para procesar CSS con PostCSS y cssnano
const processCSS = async (css: string): Promise<string> => {
  const result = await postcss([
    postcssPresetEnv(),
    cssnano({
      preset: [
        "default",
        {
          normalizeWhitespace: true,
          convertValues: true,
        },
      ],
    }),
  ]).process(css, { parser: safeParser, from: undefined });
  const root = result.root;

  // Filtrar solo los nodos de tipo 'rule' y ordenarlos por el selector
  const rules = root.nodes.filter((node) => node.type === "rule");
  rules.sort((a, b) => (a.selector > b.selector ? 1 : -1));

  // Reemplazar los nodos existentes por los nodos ordenados
  root.removeAll();
  rules.forEach((rule) => root.append(rule));

  return root.toString();
};

const sortObjectKeys = (
  obj: JsonObject | JsonArray | JsonValue,
): JsonObject | JsonArray | JsonValue => {
  if (Array.isArray(obj)) {
    return obj.map(sortObjectKeys);
  } else if (obj !== null && typeof obj === "object") {
    return Object.keys(obj)
      .sort()
      .reduce((result: JsonObject, key: string) => {
        result[key] = sortObjectKeys(obj[key]);
        return result;
      }, {} as JsonObject);
  }
  return obj;
};

// Manejador de la ruta de la API
export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Método no permitido" }, { status: 405 });
  }

  const { userCss, desiredCss } = await req.json();

  try {
    const optimizedCSS1 = await processCSS(userCss);
    const optimizedCSS2 = await processCSS(desiredCss);

    if (optimizedCSS1 === optimizedCSS2) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      const root1 = postcss.parse(optimizedCSS1);
      const root2 = postcss.parse(optimizedCSS2);
      const cssObj1 = postcssJs.objectify(root1);
      const cssObj2 = postcssJs.objectify(root2);

      // Ordena las claves del objeto recursivamente
      const sortedCssObj1 = sortObjectKeys(cssObj1);
      const sortedCssObj2 = sortObjectKeys(cssObj2);

      // Convierte los objetos JS a cadenas JSON
      const json1 = JSON.stringify(sortedCssObj1, null, 2);
      const json2 = JSON.stringify(sortedCssObj2, null, 2);

      // Compara las cadenas JSON

      const differences = diffCss(json2, json1);

      const formattedDifferences = differences
        .filter((part) => part.added)
        .map((part) => {
          if (part.added) {
            return `Hay un error en CSS. el error esta en la clase, atributo o propiedad que contiene: '${part.value}'`;
          }
        })
        .filter(Boolean); // Filtra los valores undefined o null

      //[ "Expected element 'P' instead of 'A'" ]
      console.log(formattedDifferences);
      return NextResponse.json(
        { success: false, cssDifss: formattedDifferences },
        { status: 200 },
      );
    }
    //
  } catch (error) {
    console.error("Error al optimizar CSS:", error);
    return NextResponse.json(
      { error: "Error interno al optimizar CSS" },
      { status: 500 },
    );
  }
}
