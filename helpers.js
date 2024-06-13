const fs = require("fs/promises");
const logFileError = "./errores.log";
const logFileSuccess = "./exitosos.log";

async function logError(carpeta, err) {
  const errorMessage = `Error al copiar la carpeta ${carpeta}: ${err}\n`;
  try {
    await fs.appendFile(logFileError, errorMessage);
  } catch (logErr) {
    console.error("Error al escribir en el archivo de log:", logErr);
  }
}

async function logSuccess(carpeta) {
  const Message = `Carpeta ${carpeta} copiada correctamente.\n`;
  try {
    await fs.appendFile(logFileSuccess, Message);
  } catch (logFileSuccess) {
    console.error("Error al escribir en el archivo de log:", logFileSuccess);
  }
}

module.exports = { logError, logSuccess };
