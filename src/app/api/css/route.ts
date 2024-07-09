// pages/api/optimize-css.js
import { NextResponse } from "next/server";
import postcss from "postcss";
import postcssPresetEnv from "postcss-preset-env";
import cssnano from "cssnano";

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
  ]).process(css, { from: undefined });

  return result.css;
};

// Manejador de la ruta de la API
export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Método no permitido" }, { status: 405 });
  }

  const { css1, css2 } = await req.json();

  try {
    const optimizedCSS1 = await processCSS(css1);
    const optimizedCSS2 = await processCSS(css2);
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
