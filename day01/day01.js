const { getFile, setFile } = require("../lib/io.js");

let [input, readError] = getFile(__dirname + "/input.txt");
if (readError) {
  console.error(readError);
  return;
}

const inputArr = input.split("\n");
let numIncreased = 0;
let prevValue = null;
for (let value of inputArr) {
  if (prevValue !== null && prevValue < value) {
    numIncreased++;
  }
  prevValue = value;
}

const output = numIncreased.toString();
const writeError = setFile(output, __dirname + "/output.txt");
if (writeError) {
  console.error(writeError);
  return;
}
