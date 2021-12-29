var nome;
nome = 'JavaScript';
var idade = 30;
idade = 30 + 20 - (10*4);

//Exibir informação
console.log(idade);

//Funções
function exibirMensagem()
{
  alert("Olá, eu sou uma função!");
}

function somar(A, B)
{
  return A + B;
}

//Controle de fluxo
idade = 17
if(idade > 18){
	alert("Ele é maior de idade!");
} else {
	alert("Ele é menor de idade!");
}

//Loops
var contador = 0;
while(contador < 5)
{
  alert("Meu contador está em " + contador);
  contador = contador + 1;
}

var contador;
for(contador = 0; contador < 10; contador++)
{
  alert(contador);
}