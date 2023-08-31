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
	  }
	}
  </script>
  
  
  
<main>
	<h1 class = "title">Calculadora de IMC</h1>
	<h2 class = "description" >Digite sua altura e peso abaixo para calcular o IMC</h2>
	<label>
	  Altura (m):
	  <input type="number" bind:value={altura} step="0.1" />
	</label>
	<label>
	  Peso (kg):
	  <input type="number" bind:value={peso} step="10" />
	</label>
	<button on:click={calcularIMC}>Calcular</button>
  
	{#if imc > 0}
	  <table class="orange-table">
		<tr>
		  <td><strong>IMC:</strong></td>
		  <td>{imc.toFixed(2)}</td>
		</tr>
		<tr>
		  <td><strong>Faixa:</strong></td>
		  <td class={faixa === 'Abaixo do peso' ? 'magreza' : faixa === 'Peso normal' ? 'normal' : 'pre-obesidade'}>{faixa}</td>
		</tr>
		
	  </table>
	{/if}
  </main>
  
  <style>
		main {
		text-align: center;
	}
	
	.title {
		background-color: red;
		padding: 10px;
		border-radius: 5px;
		margin-bottom: 20px;
		color: #ffffff
	}

	.description {
		margin-bottom: 20px;
		font-weight: 1000;
		font-size: large;
	}
	
	.orange-table {
	  border-collapse: collapse;
	  width: 100%;
	  max-width: 400px;
	  margin: 20px auto;
	}
  
	.orange-table td {
	  padding: 8px;
	  border: 1px solid #fbbf4f;
	  background-color: #fbbf4f;
	  color: white;
	  font-weight: 300;
	  font-size: large;
	}
  </style>