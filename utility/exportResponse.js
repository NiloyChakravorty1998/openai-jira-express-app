import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

async function exportToTextFile(exportData) {
  if (exportData && exportData.story && exportData.response) {
    const { story, response } = exportData;

    // DECLARE FILEPATH
    const filePath = `${process.env.FILE_PATH}/export-data-${story}.txt`;

    // STRUCTURE CONTENT OF FILE
    const structuredString = `STORY : ${story}\n\nANSWER :\n${response.content}`;
    
    fs.writeFile(filePath, structuredString, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Data has been written to the file.');
      }
    });
  } else {
    console.error('Invalid or missing exportData');
  }
}

export default exportToTextFile;
