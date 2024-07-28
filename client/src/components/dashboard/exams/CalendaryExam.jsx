const CalendaryExam = ({ date, title, name, exams }) => {
    return (
        <>
          <div className="bg-[#F1F5F9]/15 border-t-2 border-t-[#355AD4] p-4 rounded-2xl">
            <h2 className="text-[24px] text-[#FFF] font-bold">{date}</h2>
            <div className="w-[50px] h-1 bg-[#D1D5DB]/25 mb-5 rounded-full"></div>
            <p className="text-[14px] text-white font-medium">{title}</p>
            <p className="text-[10px] text-[#6E6E6E]">{name}</p>
            {exams ? (
                <div className="flex items-center mt-3">
                    <div className="w-2 h-2 bg-[#355AD4] mr-1 rounded-full"></div>
                    <p className="text-[10px] text-[#D1D5DB]">{exams}</p>
                </div>
            ) : null}
            </div>
        </>
    );
  };
  
  export default CalendaryExam;
  