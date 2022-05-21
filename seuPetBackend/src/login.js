const http = require('http')
const fs = require('fs').promises;


async function saveData(data) {
  try {
    await fs.writeFile('users.json', JSON.stringify(data));
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

async function readData(filePath) {
    try {
      const data = await fs.readFile(filePath);
      console.log(data.toString());
    } catch (error) {
      console.error(`Got an error trying to read the file: ${error.message}`);
    }
}

const users = readData('users.json');
console.log('Ola')







