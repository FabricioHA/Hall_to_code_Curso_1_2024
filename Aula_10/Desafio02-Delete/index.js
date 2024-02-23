const $wapeerBoxes = document.querySelector(".wrapeer-boxes");
const $box1 = document.querySelector(".box-1");
const $box2 = document.querySelector(".box-2");
const $box3 = document.querySelector(".box-3");
const $box4 = document.querySelector(".box-4");
const $restoreButton = document.querySelector(".restore-boxes");


function removeBox(numberBox)
{
    let $box = document.querySelector(".box-"+numberBox);
    if(!($box == null)) //Se o valor que ele recebe não for nulo, executar a função remove
    {
        $box.remove();
    }
}

function restoreBox()
{

    for(let index = 1; index<=4; index++)
    {
        removeBox(index);
        /*Abaixo, temos um modelo de como criar elementos html sem usar o inner html, declarando o tipo de elemento e a sua classe*/
        let creatBox = document.createElement("div");
        creatBox.className = "box-"+index+" box";
        $wapeerBoxes.appendChild(creatBox);
        if(index ==1)
        {
            $box1.innerHTML;         
        }
        else if(index == 2)
        {
            $box2.innerHTML;
        }
        else if(index == 3)
        {
            $box3.innerHTML;
        }
        else if(index == 4)
        {
            $box4.innerHTML;
        }
    }
}

$wapeerBoxes.addEventListener("click", function(event)
{
    /*O target nos possibilita saber se um elemento foi ou não clicado dentro da classe pai, nesse caso. o método contains verifica se uma string contém outra. 
    ou seja, ele irá verificar se existe uma string na classe do meu elemento que foi clicado*/
    if(event.target && event.target.classList.contains("box-1"))
    {
        removeBox(1);
    }
    else if(event.target && event.target.classList.contains("box-2"))
    {
        removeBox(2);
    }
    else if(event.target && event.target.classList.contains("box-3"))
    {
        removeBox(3);
    }
    else if(event.target && event.target.classList.contains("box-4"))
    {
        removeBox(4);
    }
});

$restoreButton.addEventListener("click", restoreBox);