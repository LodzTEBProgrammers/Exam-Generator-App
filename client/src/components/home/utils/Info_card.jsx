
const Info_card = ({id,title,description}) => {
    
    return (
        <>
   
        {
            id % 2 == 0 ? (
                <div className="flex justify-end items-center mb-12">
                <div className='flex bg-blue-500 custom-info-radius px-8 py-4 order-1'>
                  <p className='custom-l'>
                    {id}
                  </p>
                </div>
                <div className="mr-5">
                  <p className="font-bold text-lg lg:text-xl custom-h">{title}</p>
                  <p className="text-sm lg:text-base custom-p">{description}</p>
                </div>
              </div>
            ) :
            (
                <div className="flex items-center mb-12">
                <div className='flex bg-blue-500 custom-info-radius px-8 py-4'>
                  <p className='custom-l'>
                    {id}
                  </p>
                </div>
                <div className="ml-5">
                  <p className="font-bold text-lg lg:text-xl custom-h">{title}</p>
                  <p className="text-sm lg:text-base custom-p">{description}</p>
                </div>
              </div>
            )
        }
          </>
    )
}

export default Info_card;