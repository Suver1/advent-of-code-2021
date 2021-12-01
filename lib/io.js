const fs = require("fs");

const getFile = (file) => {
  let data = null;
  let error = null;

  try {
    data = fs.readFileSync(file, "utf8");
  } catch (err) {
    error = err;
  }
  return [data, error];
};

const setFile = (data, file) => {
  let error = null;
  try {
    fs.writeFileSync(file, data, "utf8");
  } catch (err) {
    error = err;
  }
  return error;
};

exports.getFile = getFile;
exports.setFile = setFile;
