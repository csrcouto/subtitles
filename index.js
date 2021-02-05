const fn = require("./funcoes");
const path = require("path");
const { parse } = require("path");

const caminho = path.join(__dirname, "legendas");

fn.lerDiretorio(caminho)
    .then((arquivos) => (console.log(fn.filtrarExtencao(arquivos, ".srt"))))
    .catch((erro) => (console.log(erro)))
;
