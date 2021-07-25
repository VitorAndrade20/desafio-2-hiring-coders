const getLocalStorage = () => JSON.parse(localStorage.getItem("produtos")) ?? [];
const setLocalStorage = (produtos) => localStorage.setItem("produtos", JSON.stringify(produtos));

function criarProduto(produto)
{
	let produtos = getLocalStorage();
	produtos.push(produto);
	setLocalStorage(produtos);
}

let enviar = document.getElementById("cadastrar").addEventListener("click",function(){
	let produto = {
		nome: document.getElementById('nome').value,
		id: document.getElementById('id').value,
		quantidade: document.getElementById('quantidade').value,
		tipo: document.getElementById('tipo').value
	}
	criarProduto(produto)
});

