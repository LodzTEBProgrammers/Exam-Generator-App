import { useEffect } from 'react'
import Exam from './Exam'
import { useDispatch, useSelector } from 'react-redux';
import { useGetExamsQuery } from '../../../../services/examService';
import { setCredentials } from '../../../../services/exam/examSlice';

const ExamList = () => {
    const exams = useGetExamsQuery();
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (exams.data) dispatch(setCredentials(exams.data.data))
    }, [exams, dispatch])
  
    const { exams:Exams } = useSelector((state) => state.exam);
  
  return (
    <div className='text-[--TextSecond-DarkMode]'>
        <div className='flex font-bold text-xl items-center p-4 m-4'>
            <div className='bg-[--TextThird-DarkMode] w-9 h-9 flex justify-center items-center rounded-lg'>
                <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house w-8 h-7"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                </a>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            <span className='underline'>History</span>
        </div>

        <div className='md:flex justify-between items-center border-b border-[--TextThird-DarkMode] p-4 m-4'>
            
            <div className='flex bg-[--TextThird-DarkMode] rounded-md items-center w-max'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search ml-2 mr-1"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                <input type="text" placeholder='Search' className='bg-[--TextThird-DarkMode] placeholder-[--TextSecond-DarkMode] py-2 pr-3 pl-1 rounded-md border-transparent'/>
            </div>
            <div className='flex space-x-3 sm:pt-5 md:pt-0'>
                <div className='flex space-x-1 border-2 rounded-full py-2 px-3 cursor-pointer tracking-wider border-[#F1F5F9]/15 '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-down"><path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/></svg>
                    <span className=''>Sort by</span>
                </div>
                <div className='flex space-x-1 border-2 rounded-full py-2 px-3 cursor-pointer tracking-wider border-[#F1F5F9]/15'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-column"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>
                <span>Filters</span>
                </div>
            </div>
        </div>
        <div>
        {
        Exams.map(e=>(
            <Exam key={e.id} title={e.name}  description={e.description}/>
        ))
      }
        </div>
    </div>
  )
}

export default ExamList