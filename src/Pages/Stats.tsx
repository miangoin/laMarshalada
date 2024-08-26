/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

function StatsPage() {
    return (
      <div className="bg-dark-gray text-white min-h-screen font-sans">
        <div className="container mx-auto py-8 px-4">
          <section className="bg-light-gray rounded-xl p-6 mb-6 min-h-[800px] relative overflow-hidden">
            <div className="absolute inset-0 p-4">
              <iframe
                src="https://docs.google.com/spreadsheets/u/0/d/1x7MIthsd3Oyrt2v_iuOV7T00TZ6Wol65NAIQ-n_wSW0/edit?pli=1"
                style={{ width: '100%', height: '100%' }}
                className="border-none"
              ></iframe>
            </div>
          </section>
        </div>
      </div>
    );
}

export default StatsPage;
