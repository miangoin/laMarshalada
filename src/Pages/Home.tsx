import React from 'react';
import profilePic from '../Photos/image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTwitch } from '@fortawesome/free-brands-svg-icons';

function HomePage() {
  return (
    <div className="bg-dark-gray text-white min-h-screen font-sans">
      <div className="container mx-auto py-8 px-4">
        {/* Profile Section */}
        <section className="bg-light-gray rounded-xl p-6 shadow-md flex flex-col items-center text-center mb-6">
          <h1 className="text-3xl font-bold mb-4">Bienvenido a La Marshalada</h1>
          <img
            src={profilePic}
            alt="Tu perfil"
             className="rounded-full w-38 h-32 mb-4"
          />
          <div className="flex space-x-4 mt-4">
            <a
              href="https://x.com/LaMarshalada"
              className="text-white hover:text-gray-300 text-2xl"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.twitch.tv/marshalada"
              className="text-white hover:text-gray-300 text-2xl"
            >
              <FontAwesomeIcon icon={faTwitch} />
            </a>
          </div>
        </section>
        
        {/* Picks Today Section */}
        <section className="bg-light-gray rounded-xl p-6 shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Picks de hoy</h2>
          <ul className="flex flex-col space-y-3">
            <li className="bg-very-dark-gray rounded-xl p-3 text-white hover:text-gray-200 text-center">
              Tarjeta Amarilla a Bellingham @6 Real Madrid - Valladolid
            </li>
            <li className="bg-very-dark-gray rounded-xl p-3 text-white hover:text-gray-200 text-center">
              Girona HA-1 @1.90 Atl Madrid - Girona
            </li>
          </ul>
        </section>

        {/* Buttons Section */}
        <section className="flex-1 flex flex-col justify-center items-center mb-6">
          <div className="flex-1 w-full flex justify-between items-center">
            <div className="bg-yellow text-very-dark-gray font-bold py-8 flex-1 mr-2 rounded-xl flex flex-col justify-center items-center">
            <span style={{ fontSize: '1.8rem' }}>Únete a nuestro Discord</span>
              <a href="https://discord.gg/8FsjyrgGUe" className="bg-black text-white rounded-xl py-1 px-3 font-normal mt-2 text-sm hover:bg-gray-800">
                Join Now
              </a>
            </div>
            <div className="bg-yellow text-very-dark-gray font-bold py-8 flex-1 ml-2 rounded-xl flex flex-col justify-center items-center">
            <span style={{ fontSize: '1.8rem' }}>Accede a mi Excel</span>
            <a href="https://docs.google.com/spreadsheets/u/0/d/1x7MIthsd3Oyrt2v_iuOV7T00TZ6Wol65NAIQ-n_wSW0/edit?pli=1" className="bg-black text-white py-1 px-3 rounded-xl mt-2 text-sm font-normal hover:bg-gray-800">
                Join Now
            </a>
            </div>
          </div>
        </section>

        {/* Picks comunidad Section */}
        <section className="bg-light-gray rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Picks de la comunidad o de largo plazo</h2>
          <ul className="flex flex-col space-y-3">
            <li className="bg-very-dark-gray rounded-xl p-3 text-white hover:text-gray-200 text-center">
              Atlético de Madrid Aliron
            </li>
            <li className="bg-very-dark-gray rounded-xl p-3 text-white hover:text-gray-200 text-center">
              Sorloth Máximo Goleador
            </li>
            <li className="bg-very-dark-gray rounded-xl p-3 text-white hover:text-gray-200 text-center">
              Cole Palmer MVP Premier
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
