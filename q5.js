const fs = require("fs");
const zlib = require("zlib");

function compressFile(filePath, outputFilePath) {
  const file = fs.createReadStream(filePath);
  const gzip = zlib.createGzip();
  const compressed = fs.createWriteStream(outputFilePath);
  file
    .pipe(gzip)
    .pipe(compressed)
    .on("finish", () => {
      console.log("File compressed successfully!");
    });
}

const filePath = "./public/test.html";
const outputFilePath = "./file.txt.gz";

compressFile(filePath, outputFilePath);
