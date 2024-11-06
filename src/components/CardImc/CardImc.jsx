import React, { useState, useEffect } from 'react';
import './style.css';

export default function CardImc(props) {
  const { peso, altura, name } = props.pessoa;
  const [imc, setImc] = useState(null);
  const [imcCard, classCard] = useState('imcCard normalImc');
  const calcImc = () => (peso / altura ** 2).toFixed(2);

  useEffect(() => {
    const calculatedImc = calcImc();
    setImc(calculatedImc);

    if (calculatedImc >= 30) {
      classCard('imcCard vermelhoImc');
    } else if (calculatedImc >= 24.5 && calculatedImc < 30) {
      classCard('imcCard amareloImc');
    } else {
      classCard('imcCard verdeImc');
    }
  }, [peso, altura]);

  return (
    <div className={imcCard}>
      <h1>{name}:</h1>
      <p>Altura: {altura} m</p>
      <p>Peso: {peso} kg</p>
      <p>IMC: {imc}</p>
    </div>
  );
}
