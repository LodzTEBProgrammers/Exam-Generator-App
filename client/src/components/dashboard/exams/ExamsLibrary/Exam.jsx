import React from 'react';

const ExamList = () => {
  return (
    <div className="flex flex-col text-[--Text-DarkMode] bg-[--BackgroundThird-DarkMode] p-4 m-6 rounded-xl">
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-col">
          <span className="font-bold text-2xl">Title</span>
          <span className='text-[--TextSecond-DarkMode]'>Description</span>
        </div>
        <div className="flex space-x-4">
          <div className='flex space-x-3 border-2 rounded-lg py-2 px-3 cursor-pointer tracking-wider border-[#F1F5F9]/15'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg>
          <span>Edit</span>
          </div>
          <div className='border-2 rounded-lg py-2 px-3 cursor-pointer tracking-wider border-[#F1F5F9]/15'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamList;