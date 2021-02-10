const fn = require("./funcoes");
const path = require("path");

const caminho = path.join(__dirname, "legendas");

fn.lerDiretorio(caminho)
    .then((arquivos) => (fn.filtrarExtencao(arquivos, ".srt")))
    .then((arquivosFiltrados) => (fn.lerArquivos(arquivosFiltrados)))
    .then((conteudoAgregado) => (conteudoAgregado.join("\n")))
    .then((conteudoTratado) => (conteudoTratado.split("\n")))
    .then((linha) => (fn.removerVazios(linha)))
    .then((linha) => (fn.removerPadroes(linha, "-->")))
    .then(console.log)
;
