/*Desafio: Mudar o placar e exibir o vencedor de acordo com os inputs esquerdos, depois limpar esses mesmos campos*/

//Entrada de dados
const $winnerName = document.querySelector(".winner-name");

//Botões de controle
const $buttonStart = document.querySelector(".button-start");
const $buttonReset = document.querySelector(".button-reset");

//variaveis flexiveis
let winner = 0;
let player1score = 0;
let player2score = 0;
let startGame = "stoped";

const game = {
    currentMove: "X" //Tradução: Movimento atual
}

function getField(fieldNumber) //esse parametro represennta o número correspondente do elemento HTML na sua classe.
{
    const $field = document.querySelector(".scenary-field-"+fieldNumber); //Nesse caso, o parametro fieldNumber representa o indice da classe/ID correspondente.

    return $field; //Nesse caso, retornamos o valor "document.querySelector(".scenary-field-"+fieldNumber);", sendo ele valor da variavel $field
}

function toggleCurrentMove() //Tradução: alternar movimento atual
{
    if(game.currentMove == "X") 
    {
        game.currentMove = "O";
    }
    else if(game.currentMove== "O")
    {
        game.currentMove = "X";
    }
}

function verifyFields(fieldOne, fieldTwo, fieldThree)
{
    const $fieldList = document.querySelectorAll(".scenary-field-big");

    const hasWinner = $fieldList[fieldOne].textContent != '' && $fieldList[fieldOne].textContent == $fieldList[fieldTwo].textContent && $fieldList[fieldTwo].textContent == $fieldList[fieldThree].textContent;

    return hasWinner;
}

function getWinner()
{ 
    if(verifyFields(0,1,2)) {
        return game.currentMove;
    } else if(verifyFields(3,4,5)) {
        return game.currentMove;
    } else if(verifyFields(3,4,5)) {
        return game.currentMove;
    } else if(verifyFields(6,7,8)) {
        return game.currentMove;
    } else if(verifyFields(0,3,6)) {
        return game.currentMove;
    } else if(verifyFields(1,4,7)) {
        return game.currentMove;
    } else if(verifyFields(2,5,8)) {
        return game.currentMove;
    } else if(verifyFields(0,4,8)) {
        return game.currentMove;
    } else if(verifyFields(2,4,6)) {
        return game.currentMove;
    } else {
        return '';
    }
    /*A função acima irá retornar o como saida o ultimo movimento executado pelo jogador, possibilitando assim usar isso de base descobrir */
}

function addWinnerScore()
{
    if(winner == 1)
    {
        player1score++;
    }
    else if(winner == 2)
    {
        player2score++;
    }
}

function printWinnerName()
{
    if(winner == 0)
    {
        $winnerName.textContent = "Esperando Resultado";
    }
    else if(winner == 1)
    {
        $winnerName.textContent = "Jogador 1";
    }
    else if(winner == 2)
    {
        $winnerName.textContent = "Jogador 2";
    }
    else if(winner == 3)
    {
        $winnerName.textContent = "Deu marmelada!"
    }
}

function resetWinnerScore()
{
    player1score = 0;
    player2score = 0;
}

//HandleSta
$buttonStart.addEventListener("click", function()
{
    if(startGame == "stoped")
    {
        startGame = "started";
    }
    else if(startGame == "started")
    {
        startGame = "stoped";
    }
});

for (let index = 0; index <= 8; index++) //Agora criamos um loop para indexar cada field até que seja menor ou igual a 8
{
    const $field = getField(index); //Depositamos o valor da função de acordo com sua numeração

    $field.addEventListener("click", function() //Assim que o ekemento for clicado, ele será incrementado até o seu indice correspondente.
    {
        if(startGame==false) return;
        $field.textContent = game.currentMove; //Aqui pegamos um valor de um objeto transcrevemos ele no field
        console.log(getWinner())
        toggleCurrentMove(); /*Aqui, quando o field for transcrito apartir do objeto game.currentMove, ele irá substituir seu valor de X para O, alternando
        entre as jogadas.*/ 
        /*Por fim criamos uma função anonima onde ao clicar em cada field, ele irá receber alterar o texto presente no mesmo*/
    });
}