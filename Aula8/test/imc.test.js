const { expect } = require('chai');
const { it } = require('mocha');
const { calcularIMC, exibeDiagnostico } = require('../src/imc');


describe('calculadora de IMC', () => {

    it('Calculadora deve rodar tranquilo', () => {

        const peso = 80;
        const altura = 180;

        IMCEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
        IMCCalculado = calcularIMC(peso, altura);

        expect(IMCCalculado).to.equal(IMCEsperado);

    });

    it('Altura zero deve retornar NaN', () => {
            
            const peso = 80;
            const altura = 0;
    
            IMCEsperado = 'NaN';
            IMCCalculado = calcularIMC(peso, altura);
    
            expect(IMCCalculado).to.equal(IMCEsperado);
    
        });

    it('Altura negativa deve retornar NaN', () => {
                
                const peso = 80;
                const altura = -180;
        
                IMCEsperado = 'NaN';
                IMCCalculado = calcularIMC(peso, altura);
        
                expect(IMCCalculado).to.equal(IMCEsperado);
        
            });  
    
    it('Peso negativo deve retornar NAN', () => {

        const peso = -80;
        const altura = 180;

        IMCEsperado = 'NaN';
        IMCCalculado = calcularIMC(peso, altura);

        expect(IMCCalculado).to.equal(IMCEsperado);

    });
    
    it('Peso zero deve retornar NAN', () => { 
            
            const peso = 0;
            const altura = 180;
    
            IMCEsperado = 'NaN';
            IMCCalculado = calcularIMC(peso, altura);
    
            expect(IMCCalculado).to.equal(IMCEsperado);
    });


    it('IMC entre 18.5 e 25 deve retornar Peso normal', () => {	
                
                const peso = 70;
                const altura = 180;
        
                IMCEsperado = 'Peso normal';
                IMCCalculado = exibeDiagnostico(peso, altura);
        
                expect(IMCCalculado).to.equal(IMCEsperado);
        
        }
    );   
    
 

});