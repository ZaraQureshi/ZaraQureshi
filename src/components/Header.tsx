import { TextAlignJustify } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom"

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className=" hidden md:block flex justify-between ">
                <div >

                    {location.pathname !== "/ZaraQureshi/" && <span className="header-btn"><Link className="link-btn" to='/' >Zara Qureshi </Link></span>}
                </div>
                <div>
                    <span className="header-btn"><Link className="link-btn" to='/' >Home</Link></span>

                    <span className="header-btn"><Link className="link-btn" to='/projects' >Projects</Link></span>
                    <span className="header-btn"> <Link to='/experience' className="link-btn" >Experience</Link></span>
                    <span className="header-btn text-white">Contact</span>
                </div>
            </div>
            <div className="flex justify-end align-right">

                <span className="md:hidden header-btn cursor-pointer " onClick={() => setIsOpen(!isOpen)}><TextAlignJustify /></span>
                {isOpen && (

                    <div className="md:hidden absolute transition-500 flex flex-col gap-4 mt-8 bg-gray-900 p-4 rounded-md shadow-lg w-100vw">
                        <span className="header-btn"><Link className="link-btn" to='/' >Home</Link></span>

                        <span className="header-btn"><Link className="link-btn" to='/projects' >Projects</Link></span>
                        <span className="header-btn"> <Link to='/experience' className="link-btn" >Experience</Link></span>
                        <span className="header-btn text-white">Contact</span>
                    </div>
                )}
            </div>
        </>
    )
}