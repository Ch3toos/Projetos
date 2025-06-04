var visitante = 3;
var nome = "Pedro Samuel";


if(visitante === 2000){
    alert("Parabens "+nome+" , você foi convidado para o Hospício!!")
}else{
    alert("Perdeu Lindãoo!!")
}
/*comentário*/
//obtém o componente do menu do celular(icone)
var celular = document.querySelector('.celular');
//obtém lista
var listaMenu = document.querySelector('.menu ul');

//evento de click no menu
celular.addEventListener('click', function(){
    listaMenu.classList.toggle('mostraMenu');
});



