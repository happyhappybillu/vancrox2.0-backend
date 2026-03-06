const generateUID = () => {
  const number = Math.floor(100000 + Math.random() * 900000);
  return `UID${number}`;
};

const generateTID = () => {
  const number = Math.floor(100000 + Math.random() * 900000);
  return `TID${number}`;
};

module.exports = {
  generateUID,
  generateTID,
};