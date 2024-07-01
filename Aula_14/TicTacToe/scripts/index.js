//Entrada de dados
const $namePlayer1 = document.querySelector(".player-name-1");
const $namePlayer2 = document.querySelector(".player-name-2");

function getField(fieldNumber)
{
    const $getingField = document.querySelector(".scenary-field-"+fieldNumber);

    return $getingField;
}

//Saída de dados
const $winnerName = document.querySelector(".main-winner-name");
const $printScorePlayer1 = document.querySelector(".score-player-1");
const $printScorePlayer2 = document.querySelector(".score-player-2");

//Botões de ação
const $startButton = document.querySelector(".button-start");
const $resetButton = document.querySelector(".button-reset");

//Objetos
const gameMove = {
    currentMove: "X",
    players: {
        score1: 0,
        score2: 0,
    },

}

//Dados variaveis
let scorePlayer1 = 0;
let scorePlayer2 = 0;

//Função para pegar todos os fields
function getAllFields(allFields)
{
    return allFields = document.querySelectorAll(".scenary-field-big");
}

//Função para inserir texto no scenary field
function toggleCurrentMove()
{
    if(gameMove.currentMove == "X")
    {
        gameMove.currentMove = "O";
    }
    else if(gameMove.currentMove == "O")
    {
        gameMove.currentMove = "X";
    }
}

//Verifica os campos vencedores
function verifyWinnerFields(fieldOne, fieldTwo, fieldThree)
{
    $allScenaryField =  getAllFields();

    const winnerFieldsResult = $allScenaryField[fieldOne].textContent != '' && $allScenaryField[fieldOne].textContent == $allScenaryField[fieldTwo].textContent && $allScenaryField[fieldTwo].textContent == $allScenaryField[fieldThree].textContent;

    return winnerFieldsResult;
}

//Função para capturar o vencedor do jogo
function getWinner()
{
    if(verifyWinnerFields(0,1,2)) //Se esse "verificador dos campos vencedores" for verdadeiro Então..
    {
        return gameMove.currentMove;//retorna o movimento final referente ao vencedor
    }
    else if(verifyWinnerFields(3,4,5))
    {
        return gameMove.currentMove;
    }
    else if(verifyWinnerFields(6,7,8))
    {
        return gameMove.currentMove;
    }
    else if(verifyWinnerFields(0,3,6))
    {
        return gameMove.currentMove;
    }
    else if(verifyWinnerFields(1,4,7))
    {
        return gameMove.currentMove;
    }
    else if(verifyWinnerFields(2,5,8))
    {
        return gameMove.currentMove;
    }
    else if(verifyWinnerFields(0,4,8))
    {
        return gameMove.currentMove;
    }
    else if(verifyWinnerFields(2,4,6))
    {
        return gameMove.currentMove;
    }
}

//Mudar pontuação no backend
function changeScore(moveWinner)
{
    if(moveWinner === "X")
    {
        gameMove.players.score1++;
    }
    else if(moveWinner === "O")
    {
        gameMove.players.score2++;
    }
}

//Imprimir pontuação nos elementos  
function printScorePlayers()
{
    $printScorePlayer1.textContent = showPadStart(gameMove.players.score1);
    $printScorePlayer2.textContent = showPadStart(gameMove.players.score2);
}

//Imprimir nome dos jogadores
function printWinnerName()
{
    if(getWinner() == "X")
    {
        if($namePlayer1.value == "")
        {
            $winnerName.textContent = "Jogador 1 Venceu";
        }
        else
            {
            $winnerName.textContent = $namePlayer1.value + " Venceu";
        }
    }
    else if(getWinner() == "O")
    {
        if($namePlayer2.value == "")
        {
            $winnerName.textContent = "Jogador 2 Venceu";
        }
        else
        {
            $winnerName.textContent = $namePlayer2.value + " Venceu";
        }
    }
}

//Função para exibir 0 na frente de números entre 0 e 9
function showPadStart(number)
{
    return number < 10? "0" + number.toString():number.toString()
}

function disableScenaryFields()
{
    for(var i =0; i <= 8; i++)
    {
        document.querySelector(".scenary-field-"+i).style.pointerEvents = "none";
    }
}

function ableScenaryFields()
{
    for(var i =0; i <= 8; i++)
    {
        document.querySelector(".scenary-field-"+i).style.pointerEvents = "auto";
    }
}

//Resetar campos dos jogadores
function resetFields()
{
    const $allFields =  getAllFields();
    for(let index=0; index<=8;index++)
        $allFields[index].textContent = "";
}

function resetVariables()
{
    gameMove.currentMove = "X";
}

//Programar tabuleiro do jogo da velha
for(let index = 0;index <=8; index++)
{
    //Botão scenary Field
    const $scenaryfield = getField(index);

    //Alterar texto do scenary field ao clicar
    $scenaryfield.addEventListener("click", function()
    {
        if($scenaryfield.textContent !== '') return; /*Neste caso, conteudo do "scenaryfield caso seja diferente de vazio, ele não irá retornar mais nada, ou seja, ele não irá trocar os valores entre "X" e "O" dos campos preenchidos pelos jogadores ao clicarem.*/
        $scenaryfield.textContent = gameMove.currentMove;
        console.log(getWinner());
        changeScore(getWinner());
        printScorePlayers();
        const winner = getWinner();
        console.log(winner);
        printWinnerName();
        toggleCurrentMove();
        if(getWinner())
        {
            disableScenaryFields();
            setTimeout(resetFields, 1000);
            setTimeout(ableScenaryFields, 1000)
            resetVariables();
        }
        
    });
}
console.log(1 === 1);
/*
Normalmente utilizamos os 2 iguais para fazer a verificação de valores em condicionais ou compaações lógicas
mas para garantir que não só o conteúdo, mas também o tipo seja igual entre a comparação, devemos usar 3 iguais para garantir a comparação
entre valores e tipos de variaveis.
*/