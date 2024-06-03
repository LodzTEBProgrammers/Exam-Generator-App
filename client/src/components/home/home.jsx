import './home.css';
import HeroImage from '../../assets/imgs/Hero_image.png';
import Info_card from './utils/Info_card';
import { useRef, useState } from 'react';
import data from './utils/data';

const Home = () => {
  const infoRef = useRef(null);
  const [questions,setQuestions] = useState(data.questions)
  return (
    <>
      <section className='hero relative z-10 flex justify-center items-start h-full  mt-4 mb-10 lg:mt-0'>
        <div className='container flex flex-col lg:flex-row lg:w-8/12 lg:h-2/3 flex-wrap justify-center mx-auto'>
          <div className='grid grid-flow-col auto-cols-2 px-5  lg:px-0'>
            <div className='flex flex-col justify-center lg:items-start lg:text-left lg:w-4/7 my-10'>
              <h1 className='leading-snug'>
                Traily is an innovative platform designed to simplify the process of exam creation and management
              </h1>
              <p>
                We are the best option for you!
              </p>
            </div>
            <div className='hidden lg:block lg:w-6/6'>
              <img src={HeroImage} alt="Hero Obraz" className="max-w-full h-auto" />
            </div>
          </div>
          <div className="px-5 lg:px-0 mt-12 lg:mt-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12 lg:mb-6">
              <div className="rounded-lg overflow-hidden shadow-lg bg-white flex items-center p-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 custom-flash-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div className="ml-5">
                  <p className="font-bold text-lg lg:text-xl custom-card-h">Fast in use</p>
                  <p className="text-sm lg:text-base custom-card-p">50% more productivity</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg bg-white flex items-center p-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 custom-flash-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div className="ml-5">
                  <p className="font-bold text-lg lg:text-xl custom-card-h">Fast in use</p>
                  <p className="text-sm lg:text-base custom-card-p">50% more productivity</p>
                </div>
                
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg bg-white flex items-center p-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 custom-flash-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div className="ml-5">
                  <p className="font-bold text-lg lg:text-xl custom-card-h">Fast in use</p>
                  <p className="text-sm lg:text-base custom-card-p">50% more productivity</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg bg-white flex items-center p-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 custom-flash-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div className="ml-5">
                  <p className="font-bold text-lg lg:text-xl custom-card-h">Fast in use</p>
                  <p className="text-sm lg:text-base custom-card-p">50% more productivity</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center h-full">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex border bg-white/15 border-white/35 drop-shadow-2xl justify-center items-center" onClick={()=>{
                infoRef.current.scrollIntoView({behavior: 'smooth'});
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6" href='#'>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="info flex h-full w-full" ref={infoRef}>
        <div className='container lg:w-8/12 mt-16 justify-center mx-auto'>
          <h2>How does it work?</h2>
          <div className='info-box px-5 mt-24 lg:px-0 lg:w-12/12 flex flex-col justify-center mx-auto'>
           {
            questions.map(({id,title,description})=>(
              <>
              <Info_card id={id} title={title} description={description}/>
              </>
            ))
           }

          </div>
        </div>
      </section>
      <section className="contact flex h-full w-full pb-24 lg:pb-56">
        <div className='container lg:w-6/12 mt-16 justify-center mx-auto'>
          <h2>Contact</h2>
          <div className='contact-box px-5 lg:px-0 mt-16 flex flex-col justify-center mx-auto w-full'>
            <h3>Send us a message if you had any problems</h3>
            <p>We are here to solve your problems related to our tool.</p>
            <div className="border rounded-lg border-white/30 md:w-6/12 lg:w-4/5 xl:w-3/5 mx-auto mt-16">
              <form className='p-4'>
                <div className='form-group mb-4'>
                  <label htmlFor="name" className='mb-1 block font-medium'>Name</label>
                  <input type="text" id="name" className='w-full rounded-lg py-2 px-3 text-base font-medium shadow border border-white/20' placeholder="Jan" required />
                </div>
                <div className='form-group mb-4'>
                  <label htmlFor="email" className='mb-1 block text-base font-medium'>Email</label>
                  <input type="email" id="email" className='w-full rounded-lg py-2 px-3 text-base font-medium shadow border border-white/20' placeholder="support@traily.pl" required />
                </div>
                <div className='form-group mb-4'>
                  <label htmlFor="message" className='mb-1 block text-base font-medium'>Message</label>
                  <textarea rows="4" id="message" placeholder="Your problems or bugs..." className="w-full resize-none rounded-lg py-2 px-3 text-base font-medium shadow border border-white/20" required></textarea>
                </div>
                <div className='w-full flex justify-end'>
                  <button type='submit' className="w-full lg:w-auto rounded-md lg:rounded-xl bg-[#104f89] py-3 px-6 text-white transition-colors duration-200">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;