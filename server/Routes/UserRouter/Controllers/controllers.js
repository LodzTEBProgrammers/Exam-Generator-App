import Core from "../../../core/Core.js"

 const Register = async (req,res,next)=>{
    const service = Core.getService("User_Service");
    service.register(req,res,next);
}
const Login = async (req,res,next) =>{
    const service = Core.getService("User_Service");
    service.login(req,res,next);    
}

export const Controllers = {
    Register,
    Login
}