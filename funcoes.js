module.exports = {
    lerDiretorio
};

const fs = require("fs");
const path = require("path");

function lerDiretorio(caminho) {
    return new Promise(function(resolve, reject) {
        try {
            let arquivos = fs.readdirSync(caminho);
            resolve(arquivos.map((arquivo) => path.join(caminho, arquivo)));
        } catch(e) {
            reject(e);
        };
    });
};
