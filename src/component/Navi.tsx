import { Link } from "react-router-dom";

export default function Navi(){
    return (
        <div className='fixed mx-auto bg-gray-400 h-[7vh] top-0 w-full'>
            <div className="flex items-center h-full mx-auto container justify-evenly">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Projects">Projects</Link>
            </div>
        </div>
    )
}