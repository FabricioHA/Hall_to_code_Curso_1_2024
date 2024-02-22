const $inputText = document.querySelector(".input-text");
const $outputText = document.querySelector(".output-text");
const $submitForm = document.querySelector(".submit-form");

function printDefaultOutputText()
{
    if($outputText.textContent == '')
    {
        $outputText.textContent = "Área do texto";
    }
}

$inputText.addEventListener("input", function()
{
    $outputText.textContent = $inputText.value;
    printDefaultOutputText();
});

$submitForm.addEventListener("submit", function(event)
{
    /*Nesse caso, o que estou fazendo é resetar a função é criar uma fução dentro do addEventListener sem necessáriamente chamar alguma.*/
    event.preventDefault(); /*Criei um parametro chamado event para toda vez que o form enviar os dados após clicar no botão, prevenir que ele não reset o formulário,
                            pois por padrão, o form é resetado após enviarmos os dados, limpando os inputs*/
    
    $outputText.textContent = $inputText.value;
    $inputText.value = ''; //Aqui limpa o input text-box (referente ao que é inserido pelo usuário ) após clicarmos no botão e alterar o texto do output 
});