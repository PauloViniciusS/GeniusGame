let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const azul = document.querySelector('.azul');
const amarelo = document.querySelector('.amarelo');
const vermelho = document.querySelector('.vermelho');
const verde = document.querySelector('.verde');

let suffleOrder = () => {

    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor = (element, time) => {
    time = time * 500;

    setTimeout(() => {
        element.classList.add('selected')
    }, time - 250);

    setTimeout(() => {
        element.classList.remove('selected')
    }, time);
}

let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVoce acertou! Iniciando proximo nivel`);
        nextLevel()
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

    
}

let createColorElement = (color) => {
    if(color == 0) {
        return verde;
    }else if(color == 1){
        return vermelho;
    }else if(color == 2){
        return amarelo;
    }else if(color == 3){
        return azul;
    }
}

let nextLevel = () => {
    score++;
    suffleOrder();
}

let gameOver = () => {
    alert(`Pontuação: ${score}!\nVoce perdeu o jogo!\nClique em OK para iniciar um novo jogo.`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert('Bem vindo ao Gênius!');
    score = 0 ;

    nextLevel();
}

verde.addEventListener('click', click(0));
vermelho.addEventListener('click', click(1));
amarelo.addEventListener('click', click(2));
azul.addEventListener('click', click(3));

verde.onclick = () => click(0);
vermelho.onclick = () => click(1);
amarelo.onclick = () => click(2);
azul.onclick = () => click(3);

playGame();