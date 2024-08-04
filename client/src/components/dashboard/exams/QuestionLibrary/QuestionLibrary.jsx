import React, { useEffect } from 'react'
import { useGetTasksQuery } from '../../../../services/examService';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../../../services/exam/examSlice';

const QuestionLibrary = () => {
  const tasks = useGetTasksQuery();
  const dispatch = useDispatch()  
  useEffect(() => {
    if (tasks.data) dispatch(setCredentials(tasks.data.data))
  }, [tasks, dispatch])
  const { tasks:Tasks } = useSelector((state) => state.exam);
  return (
    <div className=''>
  <h1>Question Library</h1>
    {
      Tasks.map(e=>(
        <h2 key={e.id}>{e.name}</h2>
      ))
    }
    </div>
  )
}

export default QuestionLibrary;