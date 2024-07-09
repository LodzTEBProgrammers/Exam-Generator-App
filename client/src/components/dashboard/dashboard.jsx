// import Sidebar from "./sidebar/sidebar";

function Dashboard() {
  return (
    <>
      <div className="dashboard bg-[#0D0D0D] relative ">
        <div className="dashboard-content lg:ml-64">
          <section className="pt-4 px-4">
            {/* Górna */}
            <div className="bg-[#171717] w-full h-[532px] rounded-xl"></div>
            {/* Trzy bloki */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              <div className="dashboard-exams">
                <div className="grid grid-cols-2 gap-5 flex-wrap">
                  <div className="dashboard-exam flex items-center text-[#D1D5DB] bg-[#2341A1] h-[112px] rounded-xl"></div>
                  <div className="dashboard-exam flex items-center text-[#D1D5DB] bg-[#0E8070] h-[112px] rounded-xl"></div>
                  <div className="dashboard-exam flex items-center text-[#D1D5DB] bg-[#25737A] h-[112px] rounded-xl"></div>
                  <div className="dashboard-exam flex items-center text-[#D1D5DB] bg-[#1C4469] h-[112px] rounded-xl"></div>
                </div>
              </div>
              <div className="dashboard-calendary">

              </div>
              <div className="dashboard-actualExams">

              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
