//Entrada de dados
//Elementos HTML -Botões chad cats
const $mainCatImage = document.querySelector(".principal-image-box");
const $cat1Btn = document.querySelector(".chad-cat-1");
const $cat2Btn = document.querySelector(".chad-cat-2");
const $cat3Btn = document.querySelector(".chad-cat-3");
const $resetButton = document.querySelector(".btn-reset");

let buttonClicked = 0;

//Processamento
function printMainImage()
{
    if(buttonClicked == 0)
    {
        return;
    }
    else if(buttonClicked == 1)
    {
        $mainCatImage.innerHTML = "<img class='main-image' src='images/chad-cat-1.jpg'>"
    }
    else if(buttonClicked == 2)
    {
        $mainCatImage.innerHTML = "<img class='main-image' src='images/chad-cat-2.jpg'>"
    }
    else if(buttonClicked == 3)
    {
        $mainCatImage.innerHTML = "<img class='main-image' src='images/chad-cat-3.jpg'>"
    }
}
function resetVariables()
{
    buttonClicked = 0;
}

function resetMainImage()
{
    $mainCatImage.innerHTML = "";
}

function resetAll()
{
    resetVariables();
    resetMainImage();
}

//Saida de dados
/*Funções executaveis após clicar*/
function handleCat1Button()
{
    buttonClicked = 1;
    printMainImage();
}
function handleCat2Button()
{
    buttonClicked = 2;
    printMainImage();
}
function handleCat3Button()
{
    buttonClicked = 3;
    printMainImage();
}
function handleResetButton()
{
    resetAll();
}
//Executar funções acima apenas ao clicar
$cat1Btn.addEventListener("click", handleCat1Button);
$cat2Btn.addEventListener("click", handleCat2Button);
$cat3Btn.addEventListener("click", handleCat3Button);
$resetButton.addEventListener("click", handleResetButton);