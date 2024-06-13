const fs = require("fs/promises");
const path = require("path");
const { carpetas } = require("./listFacturas.js");
const { logError, logSuccess } = require("./helpers.js");

const origen = "./origen";
const destino = "./destino";

async function copiarCarpetas() {
  for (const carpeta of carpetas) {
    const origenCarpeta = path.join(origen, carpeta);
    const destinoCarpeta = path.join(destino, carpeta);

    try {
      await fs.access(origenCarpeta);
      await fs.cp(origenCarpeta, destinoCarpeta, { recursive: true });
      await logSuccess(carpeta);
      console.log(`Carpeta ${carpeta} copiada correctamente.`);
    } catch (err) {
      console.error(`Error al copiar la carpeta ${carpeta}:`, err);
      await logError(carpeta, err);
    }
  }
}

copiarCarpetas();
