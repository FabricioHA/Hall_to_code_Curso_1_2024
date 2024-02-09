/*
Referente às querys, ela são basicamente uma forma de "puxar" os elementos html, seja por id ou classe, representadas por algum texto
como por exemplo ponto (.) representando uma classe ou hash tag (#) representando IDs
*/

//Player 1
const $buttonStonePlayer1 = document.querySelector(".button-move-stone-1"); /*ponto (.) é referente a classe*/
const $buttonPaperPlayer1 = document.querySelector(".button-move-paper-1");
const $buttonScissorPlayer1 = document.querySelector(".button-move-scissor-1");

//Player 2
const $buttonStonePlayer2 = document.querySelector(".button-move-stone-2"); /*ponto (.) é referente a classe*/
const $buttonPaperPlayer2 = document.querySelector(".button-move-paper-2");
const $buttonScissorPlayer2 = document.querySelector(".button-move-scissor-2");

//Caixas de ação
const $moveBox1 = document.querySelector("#move-box-1"); /*hash tag (#) é referente a ID*/
const $moveBox2 = document.querySelector("#move-box-2");

/*let são variaveis que podem mudar de valor, ou seja, seus valores não são constantes*/ 
let movePlayer1 = ''; //As variaveis sempre devem ter algum valor atribido ao serem criadas,  um '' já evita uma falta de atribuição 
let movePlayer2 = '';
let winner = 0;

function setWinner()
{
    if(movePlayer1 == 'stone' && movePlayer2 == 'paper')
    {
        alert("jogador 2 ganhou");
    }
}

//P1
function handleStone1Move()
{
    $moveBox1.innerHTML = "<img src='/images/icons/stone.png' title='Ícone de pedra' alt='ícone de pedra'>";
    movePlayer1 = 'stone';
    console.log(movePlayer1)
}
function handlePaper1Move()
{
    $moveBox1.innerHTML = "<img src='/images/icons/paper.png' title='Ícone de papel' alt='ícone de papel'>";
    movePlayer1 = 'paper';
}
function handleScissor1Move()
{
    $moveBox1.innerHTML = "<img src='/images/icons/scissors.png' title='Ícone de tesoura' alt='ícone de tesoura'>";
    movePlayer1 = 'scissor';
}

//P2
function handleStone2Move()
{
    $moveBox2.innerHTML = "<img src='/images/icons/stone.png' title='Ícone de pedra' alt='ícone de pedra'>";
    movePlayer2 = 'stone';
}
function handlePaper2Move()
{
    $moveBox2.innerHTML = "<img src='/images/icons/paper.png' title='Ícone de papel' alt='ícone de papel'>";
    movePlayer2 = 'paper';
}
function handleScissor2Move()
{
    $moveBox2.innerHTML = "<img src='/images/icons/scissors.png' title='Ícone de tesoura' alt='ícone de tesoura'>";
    movePlayer2 = 'scissor';
}

//P1
$buttonStonePlayer1.addEventListener("click", handleStone1Move);
$buttonPaperPlayer1.addEventListener("click", handlePaper1Move);
$buttonScissorPlayer1.addEventListener("click", handleScissor1Move); 

//P2
$buttonStonePlayer2.addEventListener("click", handleStone2Move);
$buttonPaperPlayer2.addEventListener("click", handlePaper2Move);
$buttonScissorPlayer2.addEventListener("click", handleScissor2Move);

/*a Função addEventListener tem dois parâmetros, o primeiro sendo a ação que
ela irá escutar, sendo nesse caso um clique, e o sengundo a ação que ela irá
tomar caso essa ação seja escutada, que seria uma função no caso.

outro ponto importante é que se declararmos os parenteses na função, ela irá 
executar antes do evento de clique ocorrer, então em casos onde a função deve
occorrer apenas em eventos especificos escutados pelo addEventListener, ela não
deve ser declarada com parenteses, pois ela seria executada antes da ação desejada
*/