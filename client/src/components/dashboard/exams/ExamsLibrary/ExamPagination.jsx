import React from 'react'

const ExamPagination = () => {
  return (
    <div className='flex justify-end p-4 m-4'>
        <ul className='flex bg-[--BackgroundThird-DarkMode] text-[--TextSecond-DarkMode] rounded-lg'>
          <li className='px-4 h-10 flex justify-center items-center'>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" rtl:rotate-180 stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-to-line"><path d="M3 19V5"/><path d="m13 6-6 6 6 6"/><path d="M7 12h14"/></svg>
            </a>
          </li>
          <li className='bg-[--Primary-DarkMode] px-4 h-10 flex justify-center items-center'>
            <a href="#">1</a>
          </li>
          <li className='px-4 h-10 flex justify-center items-center'>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#" className='px-4 h-10 flex justify-center items-center'>3</a>
          </li>
          <li>
          <a href="#" className='px-4 h-10 flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-to-line"><path d="M17 12H3"/><path d="m11 18 6-6-6-6"/><path d="M21 5v14"/></svg>
          </a>
          </li>
        </ul>
    </div>
  )
}

export default ExamPagination