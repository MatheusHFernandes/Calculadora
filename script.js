function calcular(op){
	var n1 = parseFloat(valor1.value);
	var n2 = parseFloat(valor2.value);
	var r;
	
	if(op == '+') r = n1 + n2;
	if(op == '-') r = n1 - n2;
	if(op == '*') r = n1 * n2;
	if(op == '/') r = n1 / n2;
	if(op == 'MED') r = (n1 + n2) / 2
	if(op == 'COM') r = (n1 * n2) / 100; //VALOR DA VENDA * PERCENTUAL
	if(op == 'LC') r = n1 - n2; //PREÇO DE VENDA - PREÇO DE CUSTO

	if(op == 'IMC'){
		r = n1 / (n2 * n2);

		if (r < 18.5)
			resultado.innerHTML = "IMC: " + r.toFixed(2) + "<br>Abaixo do peso!";
		else if (r < 25)
			resultado.innerHTML = "IMC: " + r.toFixed(2) + "<br>Peso normal";
		else
			resultado.innerHTML = "IMC: " + r.toFixed(2) + "<br>Acima do peso!";
		
		return;
	}
	resultado.innerHTML= "Resultado: " + r;
}

