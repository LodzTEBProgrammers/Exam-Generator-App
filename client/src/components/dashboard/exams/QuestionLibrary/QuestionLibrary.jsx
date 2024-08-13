import React, { useEffect } from 'react'
import { useGetTasksQuery } from '../../../../services/examService';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../../../services/exam/examSlice';

const QuestionLibrary = () => {
  const tasks = useGetTasksQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (tasks.data) dispatch(setCredentials(tasks.data.data))
  }, [tasks, dispatch])

  const { tasks:Tasks } = useSelector((state) => state.exam);

  return (
    <div className="w-full flex flex-col gap-4 bg-[#0D0D0D] relative">
      <div className="w-full flex items-center gap-8 px-4 pt-6 pb-2">
        <div className="flex items-center justify-center px-2 py-4">
          <h2 className="text-[--Text-DarkMode] font-bold">Question Library</h2>
        </div>
      </div>
      <hr className="border-[#F1F5F9]/10"></hr>
      {
        Tasks.map(e=>(
          <h2 key={e.id}>{e.name}</h2>
        ))
      }
    </div>
  );
}

export default QuestionLibrary;