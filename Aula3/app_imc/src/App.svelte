<script>
	let altura = 0;
	let peso = 0;
	let imc = 0;
	let faixa = "";
	let faixaObesidade = "";
  
	function calcularIMC() {
	  if (altura > 0 && peso > 0) {
		imc = peso / (altura * altura);
		if (imc < 18.5) {
		  faixa = "Abaixo do peso";
		} else if (imc < 24.9) {
		  faixa = "Peso normal";
		} else if (imc < 29.9) {
		  faixa = "Sobrepeso";
		} else if (imc < 34.9) {
		  faixa = "Obesidade Grau 1";
		} else if (imc < 39.9) {
		  faixa = "Obesidade Grau 2";
		} else {
		  faixa = "Obesidade Grau 3";
		}
	  } else {
		imc = 0;
		faixa = "";
		faixaObesidade = "";
	  }
	}
  </script>
  
  
  <main>
	<h1 class='title'>Calculadora de IMC</h1>
	<label>
	  Altura (m):
	  <input type="number" bind:value={altura} step="0.01" />
	</label>
	<label>
	  Peso (kg):
	  <input type="number" bind:value={peso} step="0.1" />
	</label>
	<button on:click={calcularIMC}>Calcular</button>
	{#if imc > 0}
	  <p>IMC: {imc.toFixed(2)}</p>
	{/if}
	{#if faixa}
	  <p>Faixa: {faixa}</p>
	{/if}

	{#if imc > 0}
  <p>IMC: {imc.toFixed(2)}</p>
  <p>Faixa: {faixa}</p>
  <p>Faixa de Obesidade: {faixaObesidade}</p>
{/if}
  </main>

  <style>
	main {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  height: 100vh;
	  background-color: #DDDDDD;
	}

	.title {
	display: inline-block;
    padding: 10px;
    background-color: rgb(232, 78, 78);
	color: white;
	}
  </style>