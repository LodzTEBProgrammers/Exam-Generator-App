
export const findUserByID = (req,res,next)=>{
    const {user} = req.body;
    if(!user)
        return res.status(404).json({status:"Prosze o podanie użytkownika"})
    const foundExam = exams.find(e=>e.user === user);
    if(!foundExam){
      res.status(404).json({status:"Nie znaleziono egzmainu"})
    }

    res.status(200).json({data: foundExam});
}