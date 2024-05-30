import './home.css';
import HeroImage from '../../assets/imgs/Hero_image.png';

const Home = () => {
  return (
    <section className='hero flex justify-center items-center w-full mt-12 mx-auto'>
      <div className='container flex flex-col lg:flex-row flex-wrap justify-center mx-auto'>
        <div className='grid grid-flow-col auto-cols-2 px-5 px-lg-0'>
          <div className='flex flex-col justify-center lg:items-start lg:text-left lg:w-5/6'>
            <h1>
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
        <div className="flex-wrap flex-col px-5 px-lg-0 mt-12 lg:mt-6 mx-auto">
          <div className='flex flex-wrap justify-center mb-12 lg:mb-6 gap-6'>
            <div className="w-full xl:w-auto rounded-lg overflow-hidden shadow-lg bg-white flex items-center">
              <div className="flex items-center justify-center"> {/* Dodano justify-center */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 ml-5 custom-flash-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div className="p-5">
                  <p className="font-bold custom-card-h">Fast in use</p>
                  <p className="custom-card-p">50% more productivity</p>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-auto rounded-lg overflow-hidden shadow-lg bg-white flex items-center">
              <div className="flex items-center justify-center"> {/* Dodano justify-center */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 ml-5 custom-flash-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div className="p-5">
                  <p className="font-bold custom-card-h">Fast in use</p>
                  <p className="custom-card-p">50% more productivity</p>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-auto rounded-lg overflow-hidden shadow-lg bg-white flex items-center">
              <div className="flex items-center justify-center"> {/* Dodano justify-center */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 ml-5 custom-flash-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div className="p-5">
                  <p className="font-bold custom-card-h">Fast in use</p>
                  <p className="custom-card-p">50% more productivity</p>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-auto rounded-lg overflow-hidden shadow-lg bg-white flex items-center">
              <div className="flex items-center justify-center"> {/* Dodano justify-center */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 ml-5 custom-flash-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div className="p-5">
                  <p className="font-bold custom-card-h">Fast in use</p>
                  <p className="custom-card-p">50% more productivity</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center h-full">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex border bg-white/15 border-white/35 drop-drop-shadow-2xl justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
