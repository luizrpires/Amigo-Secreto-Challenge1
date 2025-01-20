//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];
let listaIndicesSorteados = [];


function verificaNomeVazio(nomeAmigo) {
    let verificado = false;
    if (nomeAmigo != "") {
        verificado = true;
    }
    return verificado;
}

function verificaNomeRepetido(nomeAmigo) {
    let verificado = false;
    if (listaAmigos.includes(nomeAmigo)) {
        verificado = true;
    }
    return verificado;
}


function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;
    //document.querySelector("#amigo").value;
    //console.log("o nome digitado foi: " + nomeAmigo);
    if (verificaNomeVazio(nomeAmigo)) {
        if (!verificaNomeRepetido(nomeAmigo)) {
            listaAmigos.push(nomeAmigo);
            document.getElementById("amigo").value = "";
            listarAmigos();
        } else {
            alert("O nome já foi digitado. Por favor, insira outro nome.");
            document.getElementById("amigo").value = "";
        }
    } else {
        alert("Por favor, insira um nome.");
    }
}


function listarAmigos() {
    //lista = document.getElementById("listaAmigos");
    lista = document.querySelector("#listaAmigos")
    lista.innerHTML = "";
    
    for (let i=0; i<listaAmigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = listaAmigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    let indiceSorteado;

    if (listaAmigos.length > 0) {    
        if (listaIndicesSorteados.length < listaAmigos.length) {
            do {
                indiceSorteado = parseInt(Math.random() * listaAmigos.length);
            } while (listaIndicesSorteados.includes(indiceSorteado));
            listaIndicesSorteados.push(indiceSorteado);
        } else {
            alert("Todos amigos já foram sorteados!");
        }
    } else {
        alert("Por favor, insira pelo menos um amigo.");
    }
    listarAmigosSorteados(indiceSorteado);
    //console.log(indiceSorteado);
}


function listarAmigosSorteados(indiceSorteado) {
    lista = document.querySelector("#resultado");
    let item = document.createElement("li");
    item.textContent = listaAmigos[indiceSorteado];
    lista.appendChild(item);
}

function resetarSorteio() {
    lista = document.querySelector("#resultado");
    lista.innerHTML = "";
    listaIndicesSorteados = [];
}