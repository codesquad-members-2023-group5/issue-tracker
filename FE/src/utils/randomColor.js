const createRandomNumberToHexCode = (number) => {
  return Math.floor(Math.random() * number)
    .toString(16)
    .toUpperCase();
};

const generateRandomColor = () => {
  const R = createRandomNumberToHexCode(256);
  const G = createRandomNumberToHexCode(256);
  const B = createRandomNumberToHexCode(256);

  return `#${R}${G}${B}`;
};

export { generateRandomColor };
