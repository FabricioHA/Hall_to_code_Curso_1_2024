/*alert("Olá");Toda vez quando abrimos e fechamos parenteses, estamos executando uma função*/
/*A estrutura do alert é: nomedafunção(parametro); parametro é a informação ou dado necessário para executar a função*/
//Valores de texto são strings, e são sempre representados por aspas simples ou duplas: "" OR ''.


var name = "Marcos Henrique";/*Uma variavel armazena um valor, no javascript você não precisa definir exatamente
                            qual o seu tipo, ele será definido de acordo com o valor que ele receber.
/*
alert(name);//Um alert pode exibir um valor já pré-definido ou um valor "Variavel", de acordo com o que a variavel recebeu, 
            podendo ser usada como parametro 
*/

var age = 52;

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

function showMyNameAndMyAge()   /*Todas as fuções devem começar com letra minuscula, SEM EXCEÇÕES, separando palavras 
                                com letras maiusculas. isso é chamado de Camel Case, como por exemplo:
                                
                                pegarMinhasCorujinhas()
                                makeTheCake()
                                */

                                /*As funções e variaveis nunca devem começar com números, independente de quais sejam.*/ 
                                
                                /*Funções tem que ter uma nomenclatura verbial, ou seja, elas tem que indicar ações 
                                imperativas para algo, como "makePolichinelo()"*/ 
{
    alert("Nome: " + name + " Idade: " + age);
}

showMyNameAndMyAge()    /*Uma função só é executada quando ela é chamada, como podemos ver no script ao lado. acima 
                        declaramos a função, e apenas depois ela é chamda para ser executada no código.*/