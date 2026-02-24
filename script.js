function calcular(op){
	var n1 = parseFloat(valor1.value);
	var n2 = parseFloat(valor2.value);
	var r;
	
	if(op == '+') r = n1 + n2;
	if(op == '-') r = n1 - n2;
	if(op == '*') r = n1 * n2;
	if(op == '/') r = n1 / n2;
	
	resultado.innerHTML= "Resultado: " + r;
}