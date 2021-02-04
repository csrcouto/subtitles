const fn = require("./funcoes");
const path = require("path");

const caminho = path.join(__dirname, "legendas");

const arquivos = fn.lerDiretorio(caminho);
console.log(arquivos);
