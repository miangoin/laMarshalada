import React from 'react';


function AboutPage() {
  return (
    <div className="bg-dark-gray text-white min-h-screen font-sans">
      <div className="container mx-auto py-8 px-4">
     
        <section className="bg-light-gray rounded-xl p-6 mb-6 min-h-60">
        <span style={{ fontSize: '1.2rem'  }}>Quien es Marshall</span>
        </section>

        <section className="bg-light-gray rounded-xl p-6 shadow-md   mb-6 min-h-32" >
        <span style={{ fontSize: '1.2rem' }}>La Comunidad</span>
        </section>
        
       
        <section className="bg-light-gray rounded-xl p-6 shadow-md mb-6 min-h-32">
        <span style={{ fontSize: '1.2rem' }}>Discord</span>
        </section>

       

       
        <section className="bg-light-gray rounded-xl p-6 shadow-md mb-6 min-h-32">
        <span style={{ fontSize: '1.2rem' }}>Reglas</span>
        </section>

        <section className="bg-light-gray rounded-xl p-6 shadow-md mb-6 min-h-32">
        <span style={{ fontSize: '1.2rem' }}>Excel</span>
        </section>

       
      </div>
    </div>
  );
}

export default AboutPage;
