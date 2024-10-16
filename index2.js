calculadoraDeRank(15)
function calculadoraDeRank(vitorias){
    let nivel = "" ;
    let saldoVitorias = vitorias ;
    switch (true){
        case ( vitorias < 10):
            nivel = "Ferro";
            break;
        case  (vitorias >= 11 && vitorias < 20):
            nivel = "Bronze";
            break;
        case (vitorias >= 21 && vitorias < 50):
            nivel = "Prata";
            break;
        case ( vitorias >= 51 && vitorias < 80):
            nivel = "Ouro";
            break;    
        case (vitorias >= 81 && vitorias < 90):
            nivel = "Diamante";
            break;
        case ( vitorias >= 91 && vitorias < 100):
            nivel = "Lendário";
            break;
        case (vitorias <= 101):
            nivel = "Imortal";
            break;
}
console.log(`O herói está com o saldo de ${saldoVitorias} e se encontra no nível de ${nivel}`)
}
