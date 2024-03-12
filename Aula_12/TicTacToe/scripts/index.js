/*Objetos em javascript

Nada mais são do que objetos que agem como "variaveis" capazes de armazenas diferentes valores, como se fosse um vetor heterogêneo unidimensional 
(1 coluna e N linhas), como no exemplo abaixo:
*/
const game = {
    currentMove: "X", //Tradução: Movimento atual
    test: ":)"
}

/*Para chamar os valores individualmente, sua sintaxe seria:

nomeDoObjeto.indexDoObjeto;
ou
nomeDoObjeto.indexDoObjeto.indexDoIndexDoObjeto;
*/

function toggleCurrentMove() //Tradução: alternar movimento atual
{
    if(game.currentMove == "X")
    {
        game.currentMove = "O"
    }
    else if(game.currentMove== "O")
    {
        game.currentMove = "X"
    }
}

/*Nesse caso, criamos uma função chamada "getField(), onde em vez de atribuições de variaveis individuais, fazemos uma função para pegar determinado elemento
do HTML de acordo com o número da sua classe secundária"*/
function getField(fieldNumber) //esse parametro represennta o número correspondente do elemento HTML na sua classe.
{
    const $field = document.querySelector(".scenary-field-"+fieldNumber); //Nesse caso, o parametro fieldNumber representa o indice da classe/ID correspondente.

    return $field; //Nesse caso, retornamos o valor "document.querySelector(".scenary-field-"+fieldNumber);", sendo ele valor da variavel $field
}

for (let index = 0; index <= 8; index++) //Agora criamos um loop para indexar cada field até que seja menor ou igual a 8
{
    const $field = getField(index); //Depositamos o valor da função de acordo com sua numeração

    $field.addEventListener("click", function()
    {
        $field.textContent = game.currentMove; //Aqui pegamos um valor de um objeto transcrevemos ele no field
        toggleCurrentMove(); /*Aqui, quando o field for transcrito apartir do objeto game.currentMove, ele irá substituir seu valor de X para O, alternando
        entre as jogadas.*/ 
        /*Por fim criamos uma função anonima onde ao clicar em cada field, ele irá receber alterar o texto presente no mesmo*/
    });
}
