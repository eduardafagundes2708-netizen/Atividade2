function classificarIMC(imc) {
  if (imc < 18.5) return "Abaixo do peso";
  if (imc < 24.9) return "Peso normal";
  if (imc < 29.9) return "Sobrepeso";
  if (imc < 34.9) return "Obesidade grau I";
  if (imc < 39.9) return "Obesidade grau II";
  return "Obesidade grau III";
}


function calcularIMC() {
  const peso = Number(document.getElementById("peso").value);
  const altura = Number(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");

  if (!peso || !altura || altura <= 0) {
    resultado.style.display = "block";
    resultado.textContent = "Preencha peso e altura corretamente!";
    return;
  }

  const imc = peso / (altura * altura);
  const classificacao = classificarIMC(imc);


  resultado.style.display = "block";
  resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong><br>${classificacao}`;
}

document.getElementById("btnCalcular").addEventListener("click", calcularIMC);