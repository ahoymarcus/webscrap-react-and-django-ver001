var form = document.getElementsByTagName('form')[0];
var selecionado = document.getElementById('selecionado');
var error = document.querySelector('.error');


selecionado.addEventListener("input", function(e) {
	if(selecionado.validity.valid){
		error.innerHTML = "";
		error.className = "error";
	} else{
		error.innerHTML = "Não se esqueça de formatar corretamente o produto!";
		error.className = "error active";
	}
}, false);

form.addEvenetListener("submit", function(e){
	if(!selecionado.validity.valid){
		error.innerHTML = "Antes do envio, é preciso que o nome do produto esteja correto!";
		error.className = "error active";
		
		e.preventDefault();
	}
}, false);



