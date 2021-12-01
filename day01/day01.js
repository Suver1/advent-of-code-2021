const { getFile, setFile } = require("../lib/io.js");

let [input, readError] = getFile(__dirname + "/input.txt");
if (readError) {
  console.error(readError);
  return;
}

const inputArr = input.trim().split("\n");
let numIncreased = 0;
let prevValue = null;
for (let value of inputArr) {
  if (prevValue !== null && Number(value) > prevValue) {
    numIncreased++;
  }
  prevValue = Number(value);
}

const output = numIncreased.toString();
console.log(output);
const writeError = setFile(output, __dirname + "/output.txt");
if (writeError) {
  console.error(writeError);
  return;
}
