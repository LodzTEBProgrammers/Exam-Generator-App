import Sidebar from "./sidebar/sidebar";

function Dashboard() {
  return (
    <>
      <div className="w-full h-full">
        <Sidebar />
        <div className="dashboard bg-[#0D0D0D] relative">
          <div className="dashboard-content lg:ml-[16rem]">
            <section className="dashboard-boxes pt-4 px-4">
              {/* Górna */}
              <div className="bg-[#171717] w-full h-[532px] rounded-xl"></div>
              {/* Trzy bloki */}
              <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 h-screen gap-16">
                <div className="dashboard-exams">
                  <div className="grid grid-cols-1 xl:grid-cols-2 2xl:auto-cols-auto gap-5 flex-wrap">
                    <div className="dashboard-exam text-[#D1D5DB] bg-[#2341A1] rounded-xl">
                      <div className="dashboard-total flex p-4">
                        <div className="grid place-items-center items-start mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-square-pen">
                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                          </svg>
                        </div>
                        <p className="text-[18px]">Total exams created:</p>
                      </div>
                      <div className="px-4">
                        <p className="text-[30px] font-bold text-white">1674</p>
                      </div>
                    </div>
                    <div className="dashboard-exam text-[#D1D5DB] bg-[#0E8070] rounded-xl">
                      <div className="dashboard-total flex p-4">
                        <div className="grid place-items-center items-start mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-square-pen">
                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                          </svg>
                        </div>
                        <p className="text-[18px]">Total exams created:</p>
                      </div>
                      <div className="px-4">
                        <p className="text-[30px] font-bold text-white">1674</p>
                      </div>
                    </div>
                    <div className="dashboard-exam text-[#D1D5DB] bg-[#25737A]  rounded-xl">
                      <div className="dashboard-total flex p-4">
                        <div className="grid place-items-center items-start mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-square-pen">
                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                          </svg>
                        </div>
                        <p className="text-[18px]">Total exams created:</p>
                      </div>
                      <div className="px-4">
                        <p className="text-[30px] font-bold text-white">1674</p>
                      </div>
                    </div>
                    <div className="dashboard-exam text-[#D1D5DB] bg-[#1C4469] rounded-xl">
                      <div className="dashboard-total flex p-4">
                        <div className="grid place-items-center items-start mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-square-pen">
                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                          </svg>
                        </div>
                        <p className="text-[18px]">Total exams created:</p>
                      </div>
                      <div className="px-4">
                        <p className="text-[30px] font-bold text-white">1674</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-calendary">
                  <div className="dashboard-date flex justify-between">
                    <h2 className="text-[30px] text-[#FFF] font-bold">January</h2>
                    <div className="items-center justify-center flex">
                      <button type="button" className="text-[#D1D5DB] border-2 border-[#D1D5DB]/15 p-2 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                      </button>
                    </div>
                  </div>
                  <div className="my-2 border-t-4 border-[#F1F5F9]/25 rounded-lg">
                    <div className="grid grid-cols-2 gap-5 flex-wrap mt-6">
                      <div className="bg-[#F1F5F9]/15 border-t-2 border-t-[#355AD4] p-4 rounded-2xl ">
                        <h2 className="text-[24px] text-[#FFF] font-bold">01’ Mon</h2>
                        <div className="w-[50px] h-1 bg-[#D1D5DB]/25 mb-8"></div>
                        <div>
                          <p className="text-[14px] text-white">Exam from Web Development </p>
                          <p className="text-[10px] text-[#6E6E6E]">John Doe </p>
                        </div>
                        <div className="flex items-center mt-3">
                          <div className="w-2 h-2 bg-[#355AD4] mr-1 rounded-full"></div>
                          <p className="text-[10px] text-[#D1D5DB]">3 more exams</p>
                        </div>
                      </div>
                      <div className="bg-[#F1F5F9]/15 border-t-2 border-t-[#355AD4] p-4 rounded-2xl">
                        <h2 className="text-[24px] text-[#FFF] font-bold">02’ Thu</h2>
                        <div className="w-[50px] h-1 bg-[#D1D5DB]/25 mb-8"></div>
                        <div>
                          <p className="text-[14px] text-white">Exam from Web Development </p>
                          <p className="text-[10px] text-[#6E6E6E]">John Doe </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end items-end">
                      <button type="button" className="text-[#FFF] text-[14px] w-full lg:w-auto font-medium bg-[#355AD4] px-4 py-2 rounded-lg mt-6">More Details</button>
                    </div>
                  </div>
                </div>
                <div className="dashboard-actualExams">
                  <div className="bg-[#0FB39D] h-[260px] rounded-3xl px-11 py-8">
                      <div className="dashboard-actual">
                        <h2 className="text-[24px] text-[#FFF] font-semibold	">Your actual exams:</h2>
                      </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
