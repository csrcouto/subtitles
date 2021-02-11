const fn = require("./funcoes");
const path = require("path");

const caminho = path.join(__dirname, "legendas");

const simbolos = [
    '.', '?', '-', '\,', '"', '♪', '_', '\r', '<i>', '</i>',
    '[', ']', '(', ')', '\'', '\-', '\.', '\'', ',', '\.',
    '\"', '!'
];

fn.lerDiretorio(caminho)
    .then((arquivos) => (fn.filtrarExtencao(arquivos, ".srt")))
    .then((arquivosFiltrados) => (fn.lerArquivos(arquivosFiltrados)))
    .then((conteudoAgregado) => (conteudoAgregado.join("\n")))
    .then((conteudoTratado) => (conteudoTratado.split("\n")))
    .then((linhas) => (fn.removerVazios(linhas)))
    .then((linhas) => (fn.removerPadroes(linhas, "-->")))
    .then((linhas) => (fn.removerNumeracao(linhas)))
    .then((linhas) => (fn.removerSimbolos(linhas, simbolos)))
    .then((linhas) => (fn.separarPalavras(linhas)))
    .then(console.log)
;
