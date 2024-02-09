/*alert("Olá");Toda vez quando abrimos e fechamos parenteses, estamos executando uma função*/
/*A estrutura do alert é: nomedafunção(parametro); parametro é a informação ou dado necessário para executar a função*/
//Valores de texto são strings, e são sempre representados por aspas simples ou duplas: "" OR ''.


/*var name = "Fabrício Holanda de Almeida";Uma variavel armazena um valor, no javascript você não precisa definir exatamente
                            qual o seu tipo, ele será definido de acordo com o valor que ele receber.
/*
alert(name);//Um alert pode exibir um valor já pré-definido ou um valor "Variavel", de acordo com o que a variavel recebeu, 
            podendo ser usada como parametro 


var age = 1000;*/

/*alert(age+10);Também é possível fazer operações matemáticas mesmo dentro das funções, dependendo de quais sejam. 
                você pode incrementar ou decrementar valores dependendo da necessidade do site.*/

/*alert("Meu nome é "+ name + " e tenho tem " + age + " anos :)");Também é possível fazer uma concatenação entre valores de números e texto,
                                                        formando uma frase logica com as atribuidas as váriaveis.*/

/*Logo, se tentar concatenar um número de fato com um número em formato string, você só terá a concatenação deles, 
não uma soma ou subtração em si:

alert("50"+10);
Resultado: 5010

se você definir 50 como número:
alert(50+10);
Resultado: 60
*/

/*function showMyNameAndMyAge()   Todas as fuções devem começar com letra minuscula, SEM EXCEÇÕES, separando palavras 
                                com letras maiusculas. isso é chamado de Camel Case, como por exemplo:
                                
                                pegarMinhasCorujinhas()
                                makeTheCake()
                                */

                                /*As funções e variaveis nunca devem começar com números, independente de quais sejam.*/ 
                                
                                /*Funções tem que ter uma nomenclatura verbial, ou seja, elas tem que indicar ações 
                                imperativas para algo, como "makePolichinelo()" 
{
    alert("Nome: " + name + " Idade: " + age);
}
*/

/*showMyNameAndMyAge();    Uma função só é executada quando ela é chamada, como podemos ver no script ao lado. acima 
                        declaramos a função, e apenas depois ela é chamda para ser executada no código.*/

//Player 1
const $buttonStonePlayer1 = document.querySelector(".button-move-stone-1"); /*ponto (.) é referente a classe*/
const $buttonPaperPlayer1 = document.querySelector(".button-move-paper-1");
const $buttonScissorPlayer1 = document.querySelector(".button-move-scissor-1");

//Player 2
const $buttonStonePlayer2 = document.querySelector(".button-move-stone-2"); /*ponto (.) é referente a classe*/
const $buttonPaperPlayer2 = document.querySelector(".button-move-paper-2");
const $buttonScissorPlayer2 = document.querySelector(".button-move-scissor-2");


const $moveBox1 = document.querySelector("#move-box-1"); /*hash tag (#) é referente a ID*/
const $moveBox2 = document.querySelector("#move-box-2");
console.log($moveBox1);
/*const é recomendado o seu uso pois é um tipo de variavel que garante que o valor armazenado nela não será alterado, evitando quebras de código
no sistema.

o simbolo $ no ínicio de uma váriavel não passa de uma convenção e/ou boa prática, ou seja, é uma forma de indicar que esta varivael 
vai lidar com elementos html, não afetando a forma como a mesma se comporta
*/ 
//Manipulação de DOM é o document e document é o arquivo html.

/*agora, iremos fazer um evento de click do botão, um escutador de eventos ao clicar no botão.*/

/*fuções com nomenclatura 'Handle' são convenções que costumam ser referentes a ações do usuário, como clicar, scrool do mouse, digitar algo, etc.*/

//P1
function handleStone1Move()
{
    $moveBox1.innerHTML = "<img src='/images/icons/stone.png' title='Ícone de pedra' alt='ícone de pedra'>";
}
function handlePaper1Move()
{
    $moveBox1.innerHTML = "<img src='/images/icons/paper.png' title='Ícone de papel' alt='ícone de papel'>";
}
function handleScissor1Move()
{
    $moveBox1.innerHTML = "<img src='/images/icons/scissors.png' title='Ícone de tesoura' alt='ícone de tesoura'>";
}

//P2
function handleStone2Move()
{
    $moveBox2.innerHTML = "<img src='/images/icons/stone.png' title='Ícone de pedra' alt='ícone de pedra'>";
}
function handlePaper2Move()
{
    $moveBox2.innerHTML = "<img src='/images/icons/paper.png' title='Ícone de papel' alt='ícone de papel'>";
}
function handleScissor2Move()
{
    $moveBox2.innerHTML = "<img src='/images/icons/scissors.png' title='Ícone de tesoura' alt='ícone de tesoura'>";
}

//P1
$buttonStonePlayer1.addEventListener("click", handleStone1Move);/*a Função addEventListener tem dois parâmetros, o primeiro sendo a ação que
                                                                ela irá escutar, sendo nesse caso um clique, e o sengundo a ação que ela irá
                                                                tomar caso essa ação seja escutada, que seria uma função no caso.
                                                                
                                                                outro ponto importante é que se declararmos os parenteses na função, ela irá 
                                                                executar antes do evento de clique ocorrer, então em casos onde a função deve
                                                                occorrer apenas em eventos especificos escutados pelo addEventListener, ela não
                                                                deve ser declarada com parenteses, pois ela seria executada antes da ação desejada
                                                                */
$buttonPaperPlayer1.addEventListener("click", handlePaper1Move);
$buttonScissorPlayer1.addEventListener("click", handleScissor1Move); 

//P2
$buttonStonePlayer2.addEventListener("click", handleStone2Move);
$buttonPaperPlayer2.addEventListener("click", handlePaper2Move);
$buttonScissorPlayer2.addEventListener("click", handleScissor2Move);