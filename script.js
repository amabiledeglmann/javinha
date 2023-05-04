function Confirmar ()
{
    texto= nome.value //Pega o que foi digitado 
    teste.innerHTML = texto //Insere no ID do span
}

function MostrarJanela()
{
    janelinha.style.display= "block"

}

function Fechar()
{
    janelinha.style.display="none"
}

soma=0
function Somar()
{
    soma = soma + 1
    resultado.value = soma
}

function Imprimir()
{
    window.print();
}
