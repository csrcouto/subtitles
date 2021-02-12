module.exports = {
    lerDiretorio,
    filtrarExtencao,
    lerArquivo,
    lerArquivos,
    removerVazios,
    removerPadroes,
    removerNumeracao,
    removerSimbolos,
    separarPalavras,
    agruparPalavras,
    ordenarPalavras
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

function removerVazios(conteudo) {
    return conteudo.filter((linha) => linha.trim());
};

function removerPadroes(conteudo, padrao) {
    return conteudo.filter((linha) => (!linha.includes(padrao)));
};

function removerNumeracao(conteudo) {
    return conteudo.filter((linha) => (!parseInt(linha)));
};

function removerSimbolos(conteudo, simbolos) {
    return conteudo.map((linha) => {
        simbolos.forEach((simbolo) => linha = linha.replace(simbolo, ""));
        return linha;
    });
;}

function separarPalavras(conteudo) {
    conteudo = conteudo.join(" ").split(" ");
    return removerVazios(conteudo);
};

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
};

function ordenarPalavras(conteudo) {
    const conteudoFinal = new Array();
    for (let chave in conteudo) {
        conteudoFinal.push({palavra: `${chave}`, qtd: conteudo[chave]});
    };
    return conteudoFinal.sort(function(a, b) {
        if (a.qtd < b.qtd) return 1;
        if (a.qtd > b.qtd) return -1;
        return 0;
    });
};
