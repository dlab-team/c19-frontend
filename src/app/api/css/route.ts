// pages/api/optimize-css.js
import { NextResponse } from "next/server";
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
  console.log(rules[0].selector);
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
    console.log(optimizedCSS1);
    console.log(optimizedCSS2);

    if (optimizedCSS1 === optimizedCSS2) {
      return NextResponse.json({ success: true }, { status: 200 });
    }
    return NextResponse.json({ success: false }, { status: 200 });
  } catch (error) {
    console.error("Error al optimizar CSS:", error);
    return NextResponse.json(
      { error: "Error interno al optimizar CSS" },
      { status: 500 }
    );
  }
}
