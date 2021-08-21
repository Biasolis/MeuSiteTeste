function calcula(){
	//entrada de dados
	var qtde;
	qtde = document.getElementById("qtde").value;
	//processamento
	var valor = qtde * 799;
	//saida de dados
	document.getElementById("preco").value = valor;
}