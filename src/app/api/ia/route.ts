import { NextResponse } from "next/server";

const askAI = async (differences: string[]) => {
  const difss = differences.join(" - ");
  const input = `dame un consejo de máximo 100 caracteres, para ENTENDER mi código HTML/CSS según el siguiente mensaje, no des la respuesta de cómo solucionarlo, solo da un consejo general sobre dónde debo buscar el problema, el mensaje contiene varios problemas en mi código separados por-: ${difss}. El usuario que leera estos tips no sabe cuales son los errores que te envio `;
  const url = "https://open-ai21.p.rapidapi.com/chatgpt";
  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": "7337f30058msh16cf9c9dd1caf0dp1c2c5djsne7f715f52c46",
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

  const { diffsMsgs } = await req.json();

  try {
    if (!diffsMsgs) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const tips = await askAI(diffsMsgs);
    return NextResponse.json(
      {
        tips: tips,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error al comparar conectar con IA", error);
    return NextResponse.json(
      { error: "Error interno al comparar DOMs" },
      { status: 500 },
    );
  }
}
