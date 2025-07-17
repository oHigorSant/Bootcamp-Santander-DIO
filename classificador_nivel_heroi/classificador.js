// Desafio: Classificador de nível de Herói


//Variáveis
let nomeHeroi = "Higor";
let quantidadeXP = 9700;
let nivel = "";

// Estrutura de decisão
if (quantidadeXP < 1000) {
    nivel = "Ferro";
} else if (quantidadeXP >= 1001 && quantidadeXP <= 2000) {
    nivel = "Bronze";
} else if (quantidadeXP >= 2001 && quantidadeXP <= 5000) {
    nivel = "Prata";
} else if (quantidadeXP >= 5001 && quantidadeXP <= 7000) {
    nivel = "Ouro";
} else if (quantidadeXP >= 7001 && quantidadeXP <= 8000) {
    nivel = "Platina";
} else if (quantidadeXP >= 8001 && quantidadeXP <= 9000) {
    nivel = "Ascendente";
} else if (quantidadeXP >= 9001 && quantidadeXP <= 10000) {
    nivel = "Imortal";
} else if (quantidadeXP >= 10001) {
    nivel = "Radiante";
} else {
    nivel = "Nível indefinido";
}

// Saída
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
