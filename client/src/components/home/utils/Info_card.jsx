const Info_card = ({ id, title, description }) => {
  return (
    <>
      {id % 2 == 0 ? (
        <div className="flex justify-end items-center gap-4">
          <div className='w-[96px] h-[96px] flex justify-center items-center bg-[--Primary-DarkMode] rounded-[30px] order-1'>
            <h2 className='text-[40px] text-[--Text-DarkMode] font-extrabold'>
              {id}
            </h2>
          </div>
          <div className="flex flex-col gap-2 text-right">
            <h4 className="text-[20px] lg:text-[24px] font-semibold text-[--Text-DarkMode]">{title}</h4>
            <p className="text-[--TextSecond-DarkMode]">{description}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-row-reverse justify-end items-center gap-4">
          <div className='w-[96px] h-[96px] flex justify-center items-center bg-[--Primary-DarkMode] rounded-[30px] order-1'>
            <h2 className='text-[40px] text-[--Text-DarkMode] font-extrabold'>
              {id}
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-[20px] lg:text-[24px] font-semibold text-[--Text-DarkMode]">{title}</h4>
            <p className="text-[--TextSecond-DarkMode]">{description}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Info_card;