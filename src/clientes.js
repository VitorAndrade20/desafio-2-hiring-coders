const getLocalStorage = () => JSON.parse(localStorage.getItem("clientes")) ?? [];
const setLocalStorage = (clientes) => localStorage.setItem("clientes", JSON.stringify(clientes));

function criarCliente(cliente)
{
	let clientes = getLocalStorage();
	clientes.push(cliente);
	setLocalStorage(clientes);
}

let enviar = document.getElementById("cadastrar").addEventListener("click",function(){
	let cliente = {
		nome: document.getElementById('nome').value,
		email: document.getElementById('email').value,
		telefone: document.getElementById('telefone').value,
		cidade: document.getElementById('cidade').value
	}
	criarCliente(cliente)
});

