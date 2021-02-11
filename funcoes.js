module.exports = {
    lerDiretorio,
    filtrarExtencao,
    lerArquivo,
    lerArquivos,
    removerVazios,
    removerPadroes,
    removerNumeracao,
    removerSimbolos,
    separarPalavras
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

function filtrarExtencao(array, extencao) {
    return array.filter((arquivo) => (arquivo.endsWith(extencao)));
}

function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        try {
            resolve(fs.readFileSync(caminho, {encoding: "utf-8"}).toString());
        } catch(e) {
            reject(e);
        };
    });
};

function lerArquivos(caminhos) {
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)));
};

function removerVazios(array) {
    return array.filter((linha) => linha.trim());
};

function removerPadroes(array, padrao) {
    return array.filter((linha) => (!linha.includes(padrao)));
};

function removerNumeracao(array) {
    return array.filter((linha) => (!parseInt(linha)));
};

function removerSimbolos(array, simbolos) {
    return array.map((linha) => {
        simbolos.forEach((simbolo) => linha = linha.replace(simbolo, ""));
        return linha;
    });
;}

function separarPalavras(array) {
    array = array.join(" ").split(" ");
    return removerVazios(array);
};
