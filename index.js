const fn = require("./funcoes");
const path = require("path");

const caminho = path.join(__dirname, "legendas");

const simbolos = [
    '.', '?', '-', '\,', '"', '♪', '_', '\r', '<i>', '</i>',
    '[', ']', '(', ')', '\'', '\-', '\.', '\'', ',', '\.', '\"', '!'
];

function agruparPalavras(array) {
    return array.reduce((acc, palavra) => {
        palavra = palavra.toLowerCase();
        if (acc[palavra]) {
            acc[palavra] += 1;
        } else {
            acc[palavra] = 1;
        };
        return acc;
    }, {});
}

fn.lerDiretorio(caminho)
    .then((arquivos) => (fn.filtrarExtencao(arquivos, ".srt")))
    .then((arquivosFiltrados) => (fn.lerArquivos(arquivosFiltrados)))
    .then((conteudoAgregado) => (conteudoAgregado.join("\n")))
    .then((conteudoTratado) => (conteudoTratado.split("\n")))
    .then((conteudo) => (fn.removerVazios(conteudo)))
    .then((conteudo) => (fn.removerPadroes(conteudo, "-->")))
    .then((conteudo) => (fn.removerNumeracao(conteudo)))
    .then((conteudo) => (fn.removerSimbolos(conteudo, simbolos)))
    .then((conteudo) => (fn.separarPalavras(conteudo)))
    .then((conteudo) => (agruparPalavras(conteudo)))
    .then(console.log)
;
