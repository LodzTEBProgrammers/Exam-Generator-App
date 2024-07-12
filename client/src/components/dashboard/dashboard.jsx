import Sidebar from "./sidebar/sidebar";
import Exams  from "./exams/dataExam";
import Exam from "./exams/Exam";
import dataCalendaryExam from './exams/dataCalendary';
import CalendaryExam from './exams/CalendaryExam';

function Dashboard() {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-y-auto bg-[#0D0D0D] relative pt-4 px-4">
            <div className="dashboard-content">
                <div className="bg-[#171717] w-full h-[532px] rounded-xl"></div>
                <div className="grid grid-cols-1 xl:grid-cols-3 mt-5 gap-8 xl:gap-16">
                  <section className="dashboard-exams">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 flex-wrap">
                      {Exams.map((item, index) => (
                        <Exam key={index} {...item} />
                      ))}
                    </div>
                  </section>
                  <section className="dashboard-calendary">
                      <div className="flex justify-between">
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
                  </section>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
