const $form = document.querySelector(".form-input");
const $inputNumber = document.querySelector(".input-numbers");
const $outputNumber = document.querySelector(".output-numbers");

$form.addEventListener("submit", function(event)
{
    event.preventDefault(); //aborta a reiniciação padrão do formulário na página ao clicar em um botão.

    $outputNumber.textContent = "";

    const number = $inputNumber.value;

    for(let index=0; index <= number; index++)
    {
        $outputNumber.textContent = $outputNumber.textContent + index + " ";
    }
    $inputNumber.value = "";
}); 