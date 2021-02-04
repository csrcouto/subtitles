module.exports = {
    lerDiretorio
};

const fs = require("fs");
const path = require("path");

function lerDiretorio(caminho) {
    arquivos = fs.readdirSync(caminho);
    return arquivos.map((arquivo) => path.join(caminho, arquivo));
};
