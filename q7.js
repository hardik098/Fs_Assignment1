const fs = require("fs");
const util = require("util");

const unlinkAsync = util.promisify(fs.unlink);

async function deleteFile(filePath) {
  try {
    await unlinkAsync(filePath);
    console.log(`${filePath} was deleted`);
  } catch (error) {
    console.error("Error deleting the file:", error);
  }
}

const filePath = "./public/test.html";

deleteFile(filePath);
