function calcularIMC(peso, altura) {
    if( altura === 0 || peso === 0 || altura < 0 || peso < 0 ) {
        return 'NaN';
    }


    const alturaMetros = altura / 100;

    return (peso / (alturaMetros * alturaMetros)).toFixed(2);
}

function exibeDiagnostico(peso, altura) { 
    const imc = calcularIMC(peso, altura);
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc < 25) {
        return 'Peso normal';
    } else if (imc < 30) {
        return 'Sobrepeso';
    } else if (imc < 35) {
        return 'Obesidade grau 1';
    } else if (imc < 40) {
        return 'Obesidade grau 2';
    } else {
        return 'Obesidade grau 3';
    }
 }

module.exports = {calcularIMC, exibeDiagnostico};
