import React, { useEffect, useState } from 'react';
import SectionTitle from '../global/SectionTitle';

const About = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="about" className="flex flex-col items-center justify-center py-10">
      <SectionTitle title="Have a glimpse about me." />
      <div className='flex items-center justify-around w-full mt-[2rem]'>
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg">
          {isClient && (
            <img 
              src="https://aswathcm.sirv.com/profile-pic%20(7).png" 
              alt="aswathcm29" 
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="mt-6 md:mt-0 md:ml-10 text-center md:text-left max-w-xl">
          <h2 className="text-3xl font-bold">Hi, I'm Aswath Cm</h2>
          <p className="mt-4 text-lg text-gray-600">
            I'm a passionate full stack developer with a love for crafting 
            beautiful and functional web applications. With experience in React, 
            Node.js, and more, I'm always looking to push the boundaries of what's possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
