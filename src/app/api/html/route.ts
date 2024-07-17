import { NextResponse } from "next/server";
import { JSDOM } from "jsdom";
import { compare } from "dom-compare";

const askAI = async (differences: string[]) => {
  const difss = differences.join(" - ");
  const input = `dame un consejo de máximo 100 caracteres, para ENTENDER mi código HTML/CSS según el siguiente mensaje, no des la respuesta de cómo solucionarlo, solo da un consejo general sobre dónde debo buscar el problema, el mensaje contiene varios problemas en mi código separados por-: ${difss}. El usuario que leera estos tips no sabe cuales son los errores que te envio `;
  const url = "https://open-ai21.p.rapidapi.com/chatgpt";
  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": "8b44107f5fmsh442a82f06e5a1b7p1f12acjsn32c5facfa323",
      "x-rapidapi-host": "open-ai21.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages: [
        {
          role: "user",
          content: input,
        },
      ],
    }),
  };

  try {
    const result = await fetch(url, options);
    return await result.json();
  } catch (error) {
    console.error("Error fetching data from OpenAI API", error);
  }
};

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Método no permitido" }, { status: 405 });
  }

  const { userHtml, desiredHtml } = await req.json();

  try {
    if (!userHtml || !desiredHtml) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const dom1 = new JSDOM(userHtml);
    const dom2 = new JSDOM(desiredHtml);

    const result = compare(dom2.window.document, dom1.window.document);

    if (result.getResult()) {
      return NextResponse.json({ areEqual: true }, { status: 200 });
    } else {
      const diffArr = result.getDifferences();
      const diffMessages = diffArr.map((item) => item.message);
      const tips = await askAI(diffMessages);
      return NextResponse.json(
        {
          areEqual: false,
          tips: tips,
        },
        { status: 200 },
      );
    }
  } catch (error) {
    console.error("Error al comparar DOMs:", error);
    return NextResponse.json(
      { error: "Error interno al comparar DOMs" },
      { status: 500 },
    );
  }
}
