import React from 'react';
import casinoBarcelonaFoto from '../Photos/CasinoBarcelona.png';
import kirolFoto from '../Photos/Kirolbet.png';
import codereFoto from '../Photos/codere.png';

function Casas() {
  return (
    <div className="bg-dark-gray text-white min-h-screen font-sans">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Donde Apostar</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tarjeta 1 */}
          <CasinoCard
            image={casinoBarcelonaFoto}
            title="Casino Barcelona"
            description="20€ GRATIS al registrarte"
            requirements={[
              "Ser mayor de 18 años",
              "Registrar una cuenta nueva",
              "Hacer un depósito mínimo de 10€"
            ]}
          />
          {/* Tarjeta 2 */}
          <CasinoCard
            image={kirolFoto}
            title="KirolBet"
            description="Duplican el deposito hasta 200€"
            requirements={[
              "Ser mayor de 18 años",
              "Registrar una cuenta nueva",
              "Hacer un depósito mínimo de 10€"
            ]}
          />
          {/* Tarjeta 3 */}
          <CasinoCard
            image={codereFoto}
            title="Codere"
            description="Hasta 50€ gratis y 100 freespins"
            requirements={[
              "Ser mayor de 18 años",
              "Registrar una cuenta nueva",
              "Hacer un depósito mínimo de 10€"
            ]}
          />
        </div>
      </div>
    </div>
  );
}

const CasinoCard = ({ image, title, description, requirements }: any) => {
  return (
    <div className="bg-light-gray rounded-xl p-6 shadow-md flex flex-col h-full">
      <div className="flex items-center justify-center"> {/* Contenedor centrado */}
        <img
          src={image}
          alt="Logo Casino"
          className="w-26 h-24 rounded mr-4" // Tamaño de logo aumentado y margen ajustado
        />
        <h3 className="text-xl font-bold text-white">
          {title}
        </h3>
      </div>
      <div className="flex-grow">
        <p className="text-white-300 mt-2 text-base text-center ">
          {description}
        </p>
        <div className="bg-gray-800 p-4 mt-4 rounded-lg shadow-sm h-48">
          <h4 className="text-sm font-semibold text-gray-200">
            Requisitos para participar:
          </h4>
          <ul className="text-gray-300 text-sm space-y-1 list-disc ml-5">
            {requirements.map((req: string, index: number) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <button className="bg-yellow text-very-dark-gray font-bold py-2 px-4 rounded hover:bg-black transition-colors w-full">
          Registrarse
        </button>
      </div>
    </div>
  );
};

export default Casas;