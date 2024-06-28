import './home.css';
import HeroImage from '../../assets/imgs/Hero_image.png';
import Question_card from './utils/Info_card';
import { useState } from 'react';
import data from './utils/data';
import Info_card from './utils/minimalistic_card';
import Icon from './utils/icon';

const Home = ({ infoRef, contactRef }) => {

  const [questions, setQuestions] = useState(data.questions);
  const [info, setInfo] = useState(data.info);

  return (
    <>
      <section className='hero  relative z-10 flex justify-center items-start h-full  mt-4 mb-11 lg:mt-0'>
        <div className='container flex flex-col lg:flex-row lg:w-8/12 lg:h-2/3 flex-wrap justify-center mx-auto'>
          <div className='grid grid-flow-col auto-cols-2 px-5  lg:px-0'>
            <div className='flex flex-col justify-center lg:items-start lg:text-left lg:w-4/7 my-10'>
              <h1 className='text-[25px] lg:text-[28px] xl:text-[36px] leading-snug'>
                Traily is an innovative platform designed to simplify the process of exam creation and management
              </h1>
              <h3 className='font-medium text-[--TextSecond-DarkMode]'>
                We are the best option for you!
              </h3>
            </div>
            <img src={HeroImage} alt="Hero Obraz" className="max-w-full h-auto" />
          </div>
          <div className="flex justify-center items-center gap-8 mt-6 mb-12">
            {
              info.map(({ id, icon, title, description }) => (
                <>
                  <Info_card key={id} id={id} icon={icon} title={title} description={description} />
                </>              
              ))
            }
          </div>
          <div className="flex justify-center items-end h-[100px]">
            <div className="flex justify-center items-center p-3 rounded-full border border-white/30"
              onClick={() => {
                infoRef.current.scrollIntoView({ behavior: 'smooth'});
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6" href='#'>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center h-full w-full  bg-[--Background-DarkMode] py-12 px-5 lg:px-0" ref={infoRef}>
        <div className='flex flex-col items-center mb-16'>
          <h2 className="text-[36px] lg:text-[56px] text-white font-extrabold">How it work?</h2>
          <hr className='w-[120px] border-[3px] border-[--Accent-DarkMode] rounded-full'></hr>
        </div>
        <div className='flex sm:w-full lg:w-[700px] xl:w-[1000px] flex-col justify-center mx-auto gap-8'>
          {
            questions.map(({ id, title, description }) => (
              <>
                <Question_card key={id} id={id} title={title} description={description} />
              </>
            ))
          }
        </div>
      </section>
      <section className="flex flex-col justify-center h-full w-full gap-6 bg-[--Background-DarkMode] py-13" ref={contactRef}>
        <div className='flex flex-col items-center mb-6'>
          <h1 className="text-[36px] lg:text-[56px] text-white font-extrabold mt-10 ">Contact</h1>
          <hr className='w-[120px] border-[3px] border-[--Accent-DarkMode] rounded-full'></hr>
        </div>
        <div className='flex flex-col items-center px-5 mx-auto pb-16'>
          <div className='flex flex-col xl:w-[640px] text-center gap-6'>
            <h2 className='text-[25px] lg:text-[36px] xl:text-[48px] text-[font-medium text-white'>Send us a message if you had any problems</h2>
            <h5 className='font-normal text-[14px] lg:text-[18px] text-[--TextSecond-DarkMode]'>We are here to solve your problems related to our tool.</h5>
          </div>
          <div className="border rounded-lg border-white/30 md:w-6/12 lg:w-4/5 xl:w-3/8 mx-auto mt-16">
            <form className='p-4'>
              <div className='form-group mb-4'>
                <label htmlFor="name" className='mb-1 block font-medium text-[--TextSecond-DarkMode]'>Name</label>
                <input type="text" id="name" className='w-full rounded-lg py-2 px-3 text-base font-medium shadow border border-white/20' placeholder="Jan" required />
              </div>
              <div className='form-group mb-4'>
                <label htmlFor="email" className='mb-1 block text-base font-medium text-[--TextSecond-DarkMode]'>Email</label>
                <input type="email" id="email" className='w-full rounded-lg py-2 px-3 text-base font-medium shadow border border-white/20' placeholder="support@traily.pl" required />
              </div>
              <div className='form-group mb-4'>
                <label htmlFor="message" className='mb-1 block text-base font-medium text-[--TextSecond-DarkMode]'>Message</label>
                <textarea rows="4" id="message" placeholder="Your problems or bugs..." className="w-full resize-none rounded-lg py-2 px-3 text-base font-medium shadow border border-white/20" required></textarea>
              </div>
              <div className='w-full flex justify-end'>
                <button type='submit' className="w-full lg:w-auto rounded-md lg:rounded-xl bg-[#104f89] py-3 px-6 text-white transition-colors duration-200">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;