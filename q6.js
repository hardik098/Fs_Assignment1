const fs = require("fs");
const zlib = require("zlib");

function extractFile(gzipFilePath, outputFilePath) {
  const file = fs.createReadStream(gzipFilePath);
  const gunzip = zlib.createGunzip();
  const extracted = fs.createWriteStream(outputFilePath);

  file
    .pipe(gunzip)
    .pipe(extracted)
    .on("finish", () => {
      console.log("File extracted successfully!");
    });
}

const gzipFilePath = "./file.txt.gz";
const outputFilePath = "./extracted-file.txt";

extractFile(gzipFilePath, outputFilePath);
