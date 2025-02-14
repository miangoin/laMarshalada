/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import profilePic from "../Photos/image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTwitch, faYoutube, faTelegram } from "@fortawesome/free-brands-svg-icons";
import WidgetBot from "@widgetbot/react-embed";
import casinoBarcelonaFoto from "../Photos/CasinoBarcelona.png";
import kirolFoto from "../Photos/Kirolbet.png";
import codereFoto from "../Photos/codere.png";

// Tipado para CasinoCard
interface CasinoCardProps {
  image: string;
  title: string;
  description: string;
  requirements: string[];
  registerLink: string; // Prop para el link de registro
}

// Tipado para ButtonCard
interface ButtonCardProps {
  text: string;
  link: string;
}

// Tipado para ChatEmbed
interface ChatEmbedProps {
  server: string;
  channel: string;
  title: string;
}

const SocialLink: React.FC<{ href: string; icon: any }> = ({ href, icon }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 text-2xl">
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

const Test: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <div className="container mx-auto py-8 px-4">
        {/* Profile Section */}
        <section className="bg-gray-800 rounded-xl p-6 shadow-md flex flex-col items-center text-center mb-6">
          <h1 className="text-3xl font-bold mb-4 text-gold">Bienvenido a La Marshalada</h1>
          <img src={profilePic} alt="Tu perfil" className="rounded-full w-38 h-32 mb-4" />
          <div className="flex space-x-4 mt-4">
            <SocialLink href="https://x.com/LaMarshalada" icon={faTwitter} />
            <SocialLink href="https://www.twitch.tv/marshalada" icon={faTwitch} />
            <SocialLink href="https://www.youtube.com/channel/UCMhRv4plVTxn3Nbs8aOmhDQ" icon={faYoutube} />
            <SocialLink href="https://t.me/lamarshalada" icon={faTelegram} />
          </div>
        </section>

        {/* Buttons Section */}
        <section className="flex flex-col justify-center items-center mb-6">
          <div className="flex w-full justify-between items-center rounded-xl space-x-4">
            <ButtonCard text="Únete a nuestro Discord" link="https://discord.gg/8FsjyrgGUe" />
            <ButtonCard text="Accede a mi Excel" link="https://docs.google.com/spreadsheets/u/0/d/1x7MIthsd3Oyrt2v_iuOV7T00TZ6Wol65NAIQ-n_wSW0/edit?pli=1" />
          </div>
        </section>

        {/* Picks Section */}
        <section className="bg-gray-800 rounded-xl p-6 shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-4 text-center text-gold">Picks</h2>
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
            <ChatEmbed server="1337584612389425327" channel="1337584613329076367" title="Marshall" />
            <ChatEmbed server="1337584612389425327" channel="1337584613329076368" title="Directo" />
          </div>
        </section>


        {/* Casino Section */}
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-6 text-center text-gold">Donde Apostar</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CasinoCard
              image={casinoBarcelonaFoto}
              title="Casino Barcelona"
              description="20€ GRATIS al registrarte"
              requirements={["Ser mayor de 18 años", "Registrar una cuenta nueva", "Hacer un depósito mínimo de 10€"]}
              registerLink="https://www.twitch.tv/marshalada" // Placeholder link
              
            />
            <CasinoCard
              image={kirolFoto}
              title="KirolBet"
              description="Duplican el deposito hasta 200€"
              requirements={["Ser mayor de 18 años", "Registrar una cuenta nueva", "Hacer un depósito mínimo de 10€"]}
              registerLink="https://www.twitch.tv/marshalada" // Placeholder link
            />
            <CasinoCard
              image={codereFoto}
              title="Codere"
              description="Hasta 50€ gratis y 100 freespins"
              requirements={["Ser mayor de 18 años", "Registrar una cuenta nueva", "Hacer un depósito mínimo de 10€"]}
              registerLink="https://www.twitch.tv/marshalada" // Placeholder link
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente para tarjetas de casino
const CasinoCard: React.FC<CasinoCardProps> = ({ image, title, description, requirements, registerLink }) => {
    return (
      <div className="bg-gray-800 rounded-xl p-6 shadow-md flex flex-col h-full">
        <div className="flex items-center justify-center">
          <img src={image} alt="Logo Casino" className="w-26 h-24 rounded mr-4" />
          <h3 className="text-xl font-bold text-gold">{title}</h3>
        </div>
        <div className="flex-grow">
          <p className="text-gray-300 mt-2 text-base text-center">{description}</p>
          <div className="bg-gray-700 p-4 mt-4 rounded-lg shadow-sm h-48">
            <h4 className="text-sm font-semibold text-gray-200">Requisitos:</h4>
            <ul className="text-gray-300 text-sm space-y-1 list-disc ml-5">
              {requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <a // Enlace en lugar de botón
            href={registerLink}
            className="bg-yellow text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow transition-colors w-full text-center inline-block" // rounded-lg añadido
          >
            Registrarse
          </a>
        </div>
      </div>
    );
  };


// Componente para botones
const ButtonCard: React.FC<ButtonCardProps> = ({ text, link }) => {
    return (
      <div className="bg-yellow text-very-dark-gray font-bold py-8 flex-1 rounded-xl flex flex-col justify-center items-center">
        <span style={{ fontSize: '1.7rem' }}>{text}</span>
        <a 
          href={link} 
          className="bg-black text-white rounded-xl py-1 px-3 mt-2 text-sm font-normal hover:bg-gray-800 relative inline-flex items-center"
        >
          Join Now
         
            <path 
              fillRule="evenodd" 
              d="M7.293 14.707a1 1 0 010-1.414l2.293-2.293a1 1 0 011.414 0L10.586 13.293a1 1 0 01-1.414 0L7.293 14.707z" 
              clipRule="evenodd"
              fill="currentColor" 
            />
        
        </a>
      </div>
    );
  };
  
// Componente para chats de Discord
const ChatEmbed: React.FC<ChatEmbedProps> = ({ server, channel, title }) => {
  return (
    <div className="w-full md:w-1/2">
      <h2 className="text-2xl font-bold mb-4 text-center ">{title}</h2>
      <WidgetBot server={server} channel={channel} style={{ width: "100%", height: "700px" }} />
    </div>
  );
};

export default Test;
