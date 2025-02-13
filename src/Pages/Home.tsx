/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import profilePic from '../Photos/image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTwitch, faYoutube, faTelegram } from '@fortawesome/free-brands-svg-icons';
import WidgetBot from '@widgetbot/react-embed'


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
            <a
              href="https://www.youtube.com/channel/UCMhRv4plVTxn3Nbs8aOmhDQ"
              className="text-white hover:text-gray-300 text-2xl"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="https://t.me/lamarshalada"
              className="text-white hover:text-gray-300 text-2xl"
            >
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </div>
        </section>
        

        {/* Buttons Section */}
     {/* Buttons Section */}
<section className="flex-1 flex flex-col justify-center items-center mb-6">
  <div className="flex flex-col sm:flex-row w-full sm:space-x-4">
    <div className="bg-yellow text-very-dark-gray font-bold py-8 flex-1 rounded-xl flex flex-col justify-center items-center mb-4 sm:mb-0">
      <span style={{ fontSize: '1.7rem' }}>Únete a nuestro Discord</span>
      <a href="https://discord.gg/8FsjyrgGUe" className="bg-black text-white rounded-xl py-1 px-3 font-normal mt-2 text-sm hover:bg-gray-800">
        Join Now
      </a>
    </div>
    <div className="bg-yellow text-very-dark-gray font-bold py-8 flex-1 rounded-xl flex flex-col justify-center items-center">
      <span style={{ fontSize: '1.8rem' }}>Accede a mi Excel</span>
      <a href="https://docs.google.com/spreadsheets/u/0/d/1x7MIthsd3Oyrt2v_iuOV7T00TZ6Wol65NAIQ-n_wSW0/edit?pli=1" className="bg-black text-white py-1 px-3 rounded-xl mt-2 text-sm font-normal hover:bg-gray-800">
        Join Now
      </a>
    </div>
  </div>
</section>


        {/* Picks comunidad Section */}
        <section className="bg-light-gray rounded-xl p-6 shadow-md">
  <h2 className="text-2xl font-bold mb-4 text-center">Picks</h2>
  <div className="flex flex-col md:flex-row space-x-0 md:space-x-4"> {/* Contenedor Flexbox */}
    <div className="w-full md:w-1/2"> {/* Contenedor para el primer chat de Discord */}
    <h2 className="text-2xl font-bold mb-4 text-center">Marshall</h2>
      <WidgetBot
        server="1337584612389425327"
        channel="1337584613329076367" 
        style={{ width: '100%', height: '700px' }} // Ancho 100% del contenedor
      />
    </div>
    <div className="w-full md:w-1/2"> {/* Contenedor para el segundo chat de Discord */}
    <h2 className="text-2xl font-bold mb-4 text-center">Directo</h2>
      <WidgetBot
        server="1337584612389425327"
        channel="1337584613329076368" 
        style={{ width: '100%', height: '700px' }} // Ancho 100% del contenedor
      />
    </div>
  </div>
</section>
      </div>
    </div>
  );
}

export default HomePage;
