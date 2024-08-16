import "./faq.css"

const Faq = () => {
  return (
    <>
    <main className="text-[#FFFFFF] p-4 grid grid-cols-1 gap-8 container max-w-7xl mx-auto md:py-8">
        <section>
            <ul className="flex items-center whitespace-nowrap font-bold text-pretty leading-relaxed text-[14px] sm:text-[18px]">
                <li className="inline-flex items-center">
                    <a href="/" className="flex items-center p-1.5 bg-[#F1F5F9]/15 rounded-xl cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                    </a>
                    <svg className="shrink-0 mx-1 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </li>
                <li className="inline-flex items-center">
                    <a href="" className="flex items-center">
                        Security & Privacy
                    </a>
                    <svg className="shrink-0 mx-1 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </li>
                <li className="inline-flex items-center">
                    <a href="" className="flex items-center underline">
                        How my data is secure?
                    </a>
                </li>
            </ul>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#F1F5F9]/5 rounded-xl p-6 flex flex-col gap-16 justify-between items-center">
                <div className="flex flex-col gap-4">
                    <h1 className="text-[36px] font-bold text-center">How my data is secure?</h1>
                    <p className="text-justify text-[16px] text-[#D1D5DB] text-pretty font-medium leading-relaxed">
                        To secure data, we use all kinds of the latest cryptographic technologies and more to eliminate any unauthorized logins and attack attempts.
                    </p>
                    <p className="text-justify text-[16px] text-[#D1D5DB] text-pretty font-medium leading-relaxed">
                        All the data we store in an encrypted location separate from the system is inaccessible to anyone. This approach aims to make it much harder for potential attackers to steal login data.
                    </p>
                    <p className="text-justify text-[16px] text-[#D1D5DB] text-pretty font-medium leading-relaxed">
                        In this way, we strive to maintain security at the highest level.
                    </p>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <div className="bg-[#F1F5F9] max-w-[443px] w-full text-[#262626] rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-md p-5 mx-auto">
                        <div className="flex justify-between items-center">
                            <p className="text-sm font-bold">
                                Do you consider this response appropriate?
                            </p>
                            <div className="flex flex-row gap-2 h-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/></svg>
                                    <div className="flex items-center">
                                        <div className="h-full border-l-2 border-[#262626]/45"></div>
                                    </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-down"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"/></svg>
                            </div>
                        </div>
                    </div>
                    <hr className="w-full border-[#F1F5F9]/35"></hr>
                    <p className="text-[#D1D5DB] font-extralight text-sm">5 • The exact number of people who agree with this answer</p>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="bg-[#F1F5F9]/20 p-4 rounded-lg text-center text-pretty leading-relaxed flex flex-col gap-1">
                    <h2 className="font-extrabold text-[24px]">Something that might interest you</h2>
                    <p className="font-light text-[#D1D5DB] text-sm max-w-xs mx-auto">
                        Below are some interesting articles regarding security that may answer all your questions.
                    </p>
                </div>
                <div className="bg-[#0FB39D] text-xs text-pretty leading-relaxed h-full rounded-lg flex flex-col gap-2 p-6">
                    <div className="bg-[#F1F5F9]/15 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-xl flex justify-between items-center p-6">
                        <p className="text-[18px] font-[400]">
                            What technologies does the website use?
                        </p>
                        <div className="bg-white rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(0, 0, 0, 0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        </div>
                    </div>
                    <div className="bg-[#F1F5F9]/15 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-xl flex justify-between items-center p-6">
                        <p className="text-[18px] font-[400]">
                            What technologies does the website use?
                        </p>
                        <div className="bg-white rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(0, 0, 0, 0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        </div>
                    </div>
                    <div className="bg-[#F1F5F9]/15 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-xl flex justify-between items-center p-6">
                        <p className="text-[18px] font-[400]">
                            What technologies does the website use?
                        </p>
                        <div className="bg-white rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(0, 0, 0, 0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        </div>
                    </div>
                    <div className="bg-[#F1F5F9]/15 rounded-bl-xl rounded-tr-xl rounded-tl-md rounded-br-xl flex justify-between items-center p-6">
                        <p className="text-[18px] font-[400]">
                            What technologies does the website use?
                        </p>
                        <div className="bg-white rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(0, 0, 0, 0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </>
  )
}

export default Faq