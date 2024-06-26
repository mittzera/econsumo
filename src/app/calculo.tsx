'use client'

import Image from 'next/image';

import { useState } from 'react';

const Calculo: React.FC = () => {
  const [precoAlcool, setPrecoAlcool] = useState<string>('');
  const [precoGasolina, setPrecoGasolina] = useState<string>('');
  const [quilometragem, setQuilometragem] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');

  const calcularCombustivel = (): void => {
    const alcool = parseFloat(precoAlcool);
    const gasolina = parseFloat(precoGasolina);
    const km = parseFloat(quilometragem);

    if (!isNaN(alcool) && !isNaN(gasolina) && !isNaN(km)) {
        if (km > 100 || alcool / gasolina < 0.7) {
          setResultado('Álcool');
        } else {
          setResultado('Gasolina');
        }
      } else {
        // Defina uma mensagem de erro ou tratamento para valores inválidos
        setResultado('Por favor, insira valores válidos.');
      }
    };

  
  return (
    <div className="container mx-auto p-4 items-center ">

      <h1 className="text-2xl font-bold mb-4 flex text-center">ECOnsumo</h1>
      <div className="mb-4 ">
        <label htmlFor="quilometragem" className="block mb-2">Quilometragem por semana</label>
        <input
          type="number"
          id="quilometragem"
          value={quilometragem}
          onChange={(e) => setQuilometragem(e.target.value)}
          placeholder='Insira a quilometragem'
          className="border p-2 w-[70%] text-black "
        />
      </div>
      <div className="mb-4">
  <label htmlFor="precoAlcool" className="block mb-2">Preço do Álcool (por litro)</label>
  <input
    type="number"
    id="precoAlcool"
    
    placeholder='Insira o preço do álcool'
    value={precoAlcool}
    onChange={(e) => setPrecoAlcool(e.target.value)}
    className="border p-2 w-[70%] text-black "
  />
</div>

      <div className="mb-4">
        <label htmlFor="precoGasolina" className="block mb-2">Preço da Gasolina (por litro)</label>
        <input
          type="number"
          
          placeholder='Insira o preço da gasolina'
          id="precoGasolina"
          value={precoGasolina}
          onChange={(e) => setPrecoGasolina(e.target.value)}
          className="border p-2 w-[70%] text-black "
        />
      </div>
      <button
        onClick={calcularCombustivel}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Calcular
      </button>
      {resultado && <> <p className="mt-4">O combustível mais vantajoso é:</p> <h2 className="text-2xl color-blue"> <strong>{resultado}</strong></h2></>}

      
      <h1 className="text-2xl font-bold mb-4 flex text-center mt-10">O que faz o ECOnsumo? </h1>
      <p className="text-lg ml-5 font-bold mb-4 flex">O ECOnsumo usa o preço atual da gasolina, o preço atual do álcool, a eficiencia do combustivel do seu carro e a quantidade de quilometros rodados por semana para determinar qual o combustível mais vantajoso </p>
      <h1 className="text-2xl font-bold mb-4 flex text-center">Porque usar o ECOnsumo?</h1>
      <p className="text-lg ml-5 font-bold mb-4 flex"> O ECOnsumo pode ser um bom aliado quando se trata de economia de combustível, visto que dada a diferença dos valores de ambos os combustíveis acabamos ficando indecisos de qual vale mais a pena abastecer nos nossos carros</p>
        
      <h1 className="text-2xl font-bold mb-4 flex text-center">Quais os impactos ambientais do ECOnsumo? </h1>
      <p className="text-lg ml-5 font-bold mb-4 flex"> O Econsumo ajuda a evitar gastos desnecessários com combustível, além de ajudar na eficiÊncia energética do funcionamento do seu carro</p>
        
    </div>
  );
};

export default Calculo;
