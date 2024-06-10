'use client'

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

    if (km > 100 || alcool / gasolina < 0.7) {
      setResultado('Álcool');
    } else {
      setResultado('Gasolina');
    }
  };

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4 flex text-center">ECOnsumo</h1>
      <div className="mb-4 ">
        <label htmlFor="quilometragem" className="block mb-2">Quilometragem por semana</label>
        <input
          type="number"
          id="quilometragem"
          value={quilometragem}
          onChange={(e) => setQuilometragem(e.target.value)}
          className="border p-2 w-[70%]"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="precoAlcool" className="block mb-2">Preço do Álcool (por litro)</label>
        <input
          type="number"
          id="precoAlcool"
          value={precoAlcool}
          onChange={(e) => setPrecoAlcool(e.target.value)}
          className="border p-2 w-[70%]"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="precoGasolina" className="block mb-2">Preço da Gasolina (por litro)</label>
        <input
          type="number"
          id="precoGasolina"
          value={precoGasolina}
          onChange={(e) => setPrecoGasolina(e.target.value)}
          className="border p-2 w-[70%] "
        />
      </div>
      <button
        onClick={calcularCombustivel}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Calcular
      </button>
      {resultado && <p className="mt-4">O combustível mais vantajoso é: <strong>{resultado}</strong></p>}
    </div>
  );
};

export default Calculo;
