const fn = require("./funcoes");
const path = require("path");

const caminho = path.join(__dirname, "legendas");

fn.lerDiretorio(caminho)
    .then((arquivos) => (console.log(arquivos)))
    .catch((erro) => (console.log("Erro na leitura do diretório")))
;
