const frasesAI = [
  "Soy tu asistente AI, listo para ayudarte cuando lo necesites.",
  "Soy la AI y estoy aquí para ofrecerte apoyo con tus ejercicios.",
  "Soy la AI y te daré consejos si te quedas atascado.",
  "Soy tu asistente AI, aquí para ayudarte a resolver cualquier duda.",
  "Soy la AI y estaré aquí para guiarte si tienes problemas con el ejercicio.",
];

function getRandomNumber(): number {
  return Math.floor(Math.random() * 5);
}

export function getPhrase(): string {
  return frasesAI[getRandomNumber()];
}
