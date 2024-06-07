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
      <section className='hero relative z-10'>
        <div className='flex flex-col justify-center items-center h-[880px]'>
          <div className='flex gap-12'>
            <div className='flex flex-col justify-center w-[660px] gap-6 lg:items-start lg:text-left'>
              <h1 className='text-[3.5rem] leading-[4rem] font-bold text-white'>
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
              <Icon name='ChevronDown' color='#ffffff' />
            </div>
          </div>
        </div>
        <div className='w-full h-[40px]'></div>
      </section>
      {/*h-[940px] zostalo zamienione na h-screen w sekcji info i contact*/}
      <section className="flex flex-col justify-center h-screen w-full gap-[96px] bg-[--Background-DarkMode] py-12" ref={infoRef}>
        <div className='flex flex-col items-center'>
          <h1 className="text-[56px] text-white font-extrabold">How it work?</h1>
          <hr className='w-[120px] border-[3px] border-[--Accent-DarkMode] rounded-full'></hr>
        </div>
        <div className='flex w-[1000px] flex-col justify-center mx-auto gap-8'>
          {
            questions.map(({ id, title, description }) => (
              <>
                <Question_card key={id} id={id} title={title} description={description} />
              </>
            ))
          }
        </div>
      </section>
      <section className="flex flex-col justify-center h-full w-full gap-12 bg-[--Background-DarkMode] py-13" ref={contactRef}>
        <div className='flex flex-col items-center'>
          <h1 className="text-[56px] text-white font-extrabold mt-10 ">Contact</h1>
          <hr className='w-[120px] border-[3px] border-[--Accent-DarkMode] rounded-full'></hr>
        </div>
        <div className='flex flex-col items-center gap-12 px-2 py-4 mx-auto'>
          <div className='flex flex-col w-[640px] text-center gap-6'>
            <h1 className='font-medium text-white'>Send us a message if you had any problems</h1>
            <h5 className='font-normal text-[--TextSecond-DarkMode]'>We are here to solve your problems related to our tool.</h5>
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
