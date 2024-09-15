import React from 'react'
import Exam from './Exam'

const ExamList = () => {
  return (
    <div>
        <div className='flex justify-between text-[--TextSecond-DarkMode] items-center m-2 border-b border-[--TextThird-DarkMode] p-4 m-4'>
            
            <div className='flex bg-[--TextThird-DarkMode] rounded-md items-center'>
                <svg className='mx-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                <input type="text" placeholder='Search' className='bg-[--TextThird-DarkMode] placeholder-[--TextSecond-DarkMode] py-2 pr-3 pl-1 rounded-md border-transparent'/>
            </div>
            <div className='flex space-x-3'>
                <div className='flex space-x-1 border-2 rounded-full py-2 px-3 cursor-pointer tracking-wider border-[#F1F5F9]/15 '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-down"><path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/></svg>
                    <span>Sort by</span>
                </div>
                <div className='flex space-x-1 border-2 rounded-full py-2 px-3 cursor-pointer tracking-wider border-[#F1F5F9]/15'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-column"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>
                <span>Filters</span>
                </div>
            </div>
        </div>
        <div>
            <Exam/>
        </div>
    </div>
  )
}

export default ExamList