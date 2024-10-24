const fs = require('fs').promises; // Importing the fs module with promises

function writeTimeToFile() {
  return new Promise(async (resolve, reject) => {
    try {
      const currentTime = new Date().toLocaleTimeString(); 
      await fs.writeFile('output.txt', `Current time: ${currentTime}\n`); 
      resolve(`Time written to 'output.txt' at ${currentTime}`); 
    } catch (error) {
      reject(`Error writing to file: ${error}`); 
    }
  });
}

writeTimeToFile() 
  .then((message) => {
    console.log(message); 
  })
  .catch((error) => {
    console.error(error); 
  });
