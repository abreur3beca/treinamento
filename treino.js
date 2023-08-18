const nome = 'Rebeca'

function getEventoAleatorio(){
    const numeroAleatorio = Math.floor(Math.random()*3);
    if(numeroAleatorio === 0) {
        return"Maratona";
    } 
    else if (numeroAleatorio === 1) {
        return"Triathlon";
    }
    else {
        return"Pentathlon";
    }
}

const resultado = getEventoAleatorio()
    console.log(resultado)


    function getDiasTreino(numeroAleatorio){
        let dias = 0
    if(numeroAleatorio === "Maratona"){
        dias = 50;
    }
    else if(numeroAleatorio === "Triathlon"){
        dias = 100;
    }
    else {
        dias = 200;
    }
    return dias
}

const dias = getDiasTreino(resultado)
    console.log(dias)

    function logEvento(nome , resultado){
        console.log(`${nome} irá participar de ${resultado}`);
    }
    function logTempo(nome , dias){
        console.log(`${nome} irá treinar por ${dias}`);
    }

logEvento (nome, resultado)
logTempo (nome, dias)
