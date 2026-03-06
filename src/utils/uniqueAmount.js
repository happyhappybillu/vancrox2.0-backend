const generateUniqueAmount = (amount) => {
  const random = (Math.random() * 0.99).toFixed(2);
  const unique = parseFloat(amount) + parseFloat(random);
  return parseFloat(unique.toFixed(2));
};

module.exports = generateUniqueAmount;