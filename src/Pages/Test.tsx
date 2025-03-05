  /* eslint-disable jsx-a11y/iframe-has-title */
  /* eslint-disable react/jsx-no-comment-textnodes */
  import React from "react";
  import profilePic from "../Photos/image.png";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faTwitter, faTwitch, faYoutube, faTelegram } from "@fortawesome/free-brands-svg-icons";
  import WidgetBot from "@widgetbot/react-embed";
  import kirolFoto from "../Photos/Kirolbet.png";
  import jugarbienFoto from "../Photos/jugarbien.png"
  import granMadrid from "../Photos/gran-madrid.png"
  import tonybet from "../Photos/Tonybet.png"
  import marathon from "../Photos/marathon.png"
  import betway from "../Photos/betway.png"
  import betfair from "../Photos/betfair.png"

  // Tipado para CasinoCard
  interface CasinoCardProps {
    image: string;
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
                        </div>
          </section>

          {/* Picks Section */}
          <section className="bg-gray-800 rounded-xl p-6 shadow-md mb-6">
            <h2 className="text-2xl font-bold mb-4 text-center text-gold">Discord</h2>
            <div className="w-full">
              <ChatEmbed server="1209452649293021257" channel="1209452649293021260" title="Anuncios" />
            </div>
          </section>



          {/* Casino Section */}
          <div className="container mx-auto py-8 px-4 p-6 mb-6 ">
            <h1 className="text-3xl font-bold mb-6 text-center text-gold">Donde Apostar</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CasinoCard
                image={tonybet}
                registerLink="https://media.affiliatestonybet.com/redirect.aspx?pid=170554&bid=1982&lpid=1288" 
                
              />
              <CasinoCard
                image={kirolFoto}
                registerLink="https://adsff.kirolbet.com/redirect.aspx?pid=7736&bid=1492" 
              />
              <CasinoCard
                image={granMadrid}
                registerLink="https://ad.casinogranmadridonline.es/redirect.aspx?pid=6609&bid=2080"
              />
               <CasinoCard
                image={betway}
                registerLink="https://betway.es/bwp/sports-welcome/es-es?s=bw205526&a=AFF4230983562005746&utm_source=205526&utm_medium=Affiliate&utm_campaign=AFF4230983562005746" 
              />
               <CasinoCard
                image={marathon}
                registerLink="https://mrthnbet.es/d7b17308e" 
              />
               <CasinoCard
                image={betfair}
                registerLink="http://ads.betfair.com/redirect.aspx?pid=6198912&bid=10753" 
              />
            </div>
            <div className=" py-8 px-4 p-6 mb-6 ">
      <div className="container mx-auto flex justify-center ">
        <img src={jugarbienFoto} alt="Jugar Bien" className="h-40 object-contain" />
      </div>
    </div>
          </div>
        </div>
      </div>
    );
  };

  // Componente para tarjetas de casino
  const CasinoCard: React.FC<CasinoCardProps> = ({ image, registerLink }) => {
      return (
        <div className="bg-gray-800 rounded-xl p-6 shadow-md flex flex-col h-full">
          <div className="flex items-center justify-center">
            <img src={image} alt="Logo Casino" className="w-40 h-28 object-contain mb-2" />
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
            Únete
          
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
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-4 text-center ">{title}</h2>
        <WidgetBot server={server} channel={channel} style={{ width: "100%", height: "700px" }} />
      </div>
    );
  };

  export default Test;
