import Sidebar from "./sidebar/sidebar";
import Exams  from "./exams/dataExam";
import Exam from "./exams/Exam";
import dataCalendaryExam from './exams/dataCalendary';
import CalendaryExam from './exams/CalendaryExam';
import Navbar from "./navbar/navbar";

function Dashboard() {
  return (
    <>
      <div className="flex h-screen">
        <Navbar />
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-y-auto bg-[#0D0D0D] relative pt-4 px-4">
            <div className="dashboard-content mb-8  ">
                <div className="bg-[#171717] w-full h-[532px] rounded-xl"></div>
                <div className="grid grid-cols-1 xl:grid-cols-3 mt-5 gap-8 xl:gap-6">
                  <section className="dashboard-exams xl:flex justify-center items-center">
                    <div className="xl:flex justify-center items-center">
                      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 flex-wrap">
                        {Exams.map((item, index) => (
                          <Exam key={index} {...item} />
                        ))}
                      </div>
                    </div>
                  </section>
                  <section className="dashboard-calendary xl:w-80 xl:mx-auto">
                      <div className="flex justify-between items-center">
                        <p className="text-[#FFFFFF] text-[30px] font-bold">January</p>
                        <div className="items-center justify-center flex">
                          <button type="button" className="text-[#D1D5DB] border-2 border-[#D1D5DB]/15 p-2 rounded-full">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                          </button>
                        </div>
                      </div>
                      <div className="my-2 border-t-4 border-[#F1F5F9]/25 rounded-lg">
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 flex-wrap mt-6">
                          {dataCalendaryExam.map((item, index) => (
                            <CalendaryExam key={index} {...item} />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-end items-end">
                        <button type="button" className="text-[#FFF] text-[14px] w-full xl:w-auto font-medium bg-[#355AD4] px-4 py-2 rounded-lg mt-6">More Details</button>
                      </div>
                  </section>
                  <section className="dashboard-actualExams bg-[#0FB39D] p-6 rounded-2xl">
                    <div className="flex flex-col">
                        <p className="text-[24px] text-[#FFF] font-semibold">Your actual exams:</p>
                        <div className="dashboard-actualExamsCards flex my-5">
                          <div className="dashboard-card bg-[#FFF] p-3 shadow shadow-white rounded-lg">
                            <div className="flex">
                              <div className="bg-[#355AD4]/25 px-2 py-1 rounded mr-3">
                                <p className="font-semibold text-[14px] text-[#355AD4]">Type</p>
                              </div>
                              <div className="bg-[#355AD4]/25 px-2 py-1 rounded">
                                <p className="font-semibold text-[14px] text-[#355AD4]">Category</p>
                              </div>
                            </div>
                            <div className="my-4">
                              <p className="text-[18px] text-[#262626] font-bold">Test Name</p>
                              <p className="text-[12px] text-[#6E6E6E]">Created at: 00:00 01.01.2001</p>
                              <p className="text-[12px] text-[#6E6E6E]">Ends: 00:00 01.01.2001</p>
                            </div>
                            <div className="flex justify-between mb-3 items-center">
                                <img src="https://student.studentka.pl/img/wo/2/88/mezczyzna-obrazek_sredni_4025288.jpg" alt="Avatar" className="max-w-full rounded-full h-[24px]" />
                                <button type="submit" className="bg-[#6E6E6E]/15 rounded-full p-2 opacity-80">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                                </button>
                            </div>
                          </div>
                        </div>
                        <div className="dashboard-actualExamsButton flex justify-end">
                          <div className="inline-flex items-center">
                            <button className="border-s-2 border-t-2 border-b-2 border-white/35 p-2 text-[#FFF] text-[14px] rounded-s-lg font-semibold">
                              View more
                            </button>
                            <div className="border-2 border-white/35 p-2 h-full flex items-center text-[#FFF] text-[14px] rounded-r-lg font-semibold">
                                <div className="w-1 h-1 bg-[#FFF] mr-1 rounded-full"></div>
                                <div className="w-1 h-1 bg-[#FFF] mr-1 rounded-full"></div>
                                <div className="w-1 h-1 bg-[#FFF] mr-1 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </section>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
