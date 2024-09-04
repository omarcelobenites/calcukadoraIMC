import React, { useState } from 'react';

const IMCCalculadora = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calculadoraIMC = () => {
    if (height && weight) {
      const heightEmMetros = height / 100;
      const imcValue = (weight / (heightEmMetros * heightEmMetros)).toFixed(2);
      setImc(imcValue);
      setClassificacao(getClassificacao(imcValue));
    }
  };

  const getClassificacao = (imcValue) => {
    if (imcValue < 18.5) return 'Abaixo do peso';
    if (imcValue >= 18.5 && imcValue < 24.9) return 'Peso normal';
    if (imcValue >= 25 && imcValue < 29.9) return 'Sobrepeso';
    if (imcValue >= 30 && imcValue < 34.9) return 'Obesidade Grau 1';
    if (imcValue >= 35 && imcValue < 39.9) return 'Obesidade Grau 2';
    return 'Obesidade Grau 3';
  };

  return (
    <div className="container">
        <div>
        <h1>Calculadora de IMC</h1>
        <div>
          <label>
            Altura (cm):
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Digite sua altura em cm"
            />
          </label>
        </div>
        <div>
          <label>
            Peso (kg):
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Digite seu peso em kg"
            />
          </label>
        </div>
        <button onBlur={calculadoraIMC}>Calculadora IMC</button>

        {imc && (
          <div>
            <h2>Seu IMC: {imc}</h2>
            <h3>Classificação: {classificacao}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default IMCCalculadora;
