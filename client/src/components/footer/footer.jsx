import './footer.css'
import Traily from "../../assets/imgs/Traily Logo.png";

function Footer() {
    return (
        <footer className='footer relative z-10 flex justify-center items-center h-full'>
            <div className="container w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={Traily} alt="Traily Logo" width={"150px"} height={"48px"}  />
                    </a>
                </div>
                <hr className='mt-4' />
            </div>
        </footer>
    )
}

export default Footer