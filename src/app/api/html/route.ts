import { NextResponse } from "next/server";
import { JSDOM } from "jsdom";
import { compare } from "dom-compare";

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
      //console.log(diffMessages);
      //const tips = await askAI(diffMessages);
      return NextResponse.json(
        {
          areEqual: false,
          diffsMsgs: diffMessages,
          //tips: tips,
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
