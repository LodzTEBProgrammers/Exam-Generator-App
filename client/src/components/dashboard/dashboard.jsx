import Sidebar from "./sidebar/sidebar";
import Exams  from "./exams/dataExam";
import Exam from "./exams/Exam";

function Dashboard() {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-y-auto bg-[#0D0D0D] relative">
            <div className="dashboard-content">
              <section className="dashboard-boxes pt-4 px-4">
                {/* Górna */}
                <div className="bg-[#171717] w-full h-[532px] rounded-xl"></div>
                {/* Trzy bloki */}
                <div className="grid grid-cols-1 xl:grid-cols-3 mt-12 gap-16">
                  <div className="dashboard-exams">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 flex-wrap">
                      {Exams.map((item, index) => (
                        <Exam key={index} {...item} />
                      ))}
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
