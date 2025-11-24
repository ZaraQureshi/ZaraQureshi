import { Link } from "react-router-dom"

export const Header = () => {
    return (

        <div className="flex justify-between">
            <div >

                {location.pathname !== "/ZaraQureshi/" && <span className="header-btn"><Link className="link-btn" to='/' >Zara Qureshi </Link></span>}
            </div>
            <div>
                <span className="header-btn"><Link className="link-btn" to='/' >Home</Link></span>

                <span className="header-btn"><Link className="link-btn" to='/projects' >Projects</Link></span>
                <span className="header-btn"> <Link to='/experience' className="link-btn" >Experience</Link></span>
                <span className="header-btn">Contact</span>
            </div>
        </div>
    )
}