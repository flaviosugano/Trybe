function randomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

test("Testing if #randomRgbColor is called", () => {
  // testando se a função foi chamada. Não simulamos nenhum comportamento aqui, pois, para esse teste, isso não importa! Queremos saber se ela foi chamada e ponto final.
  randomRgbColor = jest.fn();

  randomRgbColor();
  expect(randomRgbColor).toHaveBeenCalled();
});

test("Testing if #randomRgbColor works properly, using rgb(255, 255, 255) as a mock value", () => {
  // testando se a função foi chamada e qual seu retorno
    randomRgbColor = jest.fn().mockReturnValue("rgb(255, 255, 255)");

  randomRgbColor();
  expect(randomRgbColor).toHaveBeenCalled();
  expect(randomRgbColor()).toBe("rgb(255, 255, 255)");
});

test("Testing how many times #randomRgbColor is called and its return value", () => {
  // testando quantas vezes a função foi chamada e qual seu retorno
  randomRgbColor = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(randomRgbColor).toHaveBeenCalledTimes(0);

  expect(randomRgbColor()).toBe("first call");
  expect(randomRgbColor).toHaveBeenCalledTimes(1);

  expect(randomRgbColor()).toBe("second call");
  expect(randomRgbColor).toHaveBeenCalledTimes(2);

  expect(randomRgbColor()).toBe("default value");
  expect(randomRgbColor).toHaveBeenCalledTimes(3);
});