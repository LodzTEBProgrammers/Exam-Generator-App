const bgColor = (id) => {
    switch(id){
        case 1: 
            return "bg-[#2341A1]";
        case 2: 
            return "bg-[#0E8070]";
        case 3: 
            return "bg-[#25737A]";
        case 4:
            return "bg-[#1C4469]";
    }
}

const Exam = ({id, icon, text, number }) => (
    <div className={`dashboard-exam text-[#D1D5DB] ${bgColor(id)} rounded-xl`}>
        <div className="dashboard-total flex p-4">
            <div className="grid place-items-center items-start mr-2">
                {icon}
            </div>
            <p className="text-[18px]">{text}</p>
        </div>
        <div className="px-4">
            <p className="text-[30px] font-bold text-white">
                {number}
            </p>
        </div>
    </div>
);

export default Exam;