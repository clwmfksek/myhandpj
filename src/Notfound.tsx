import { useLocation } from "react-router-dom";

export default function Notfound(){
    const location = useLocation();
    return (
        <div>404 Not NotFound <br/>{location.pathname} is not exist</div>
    )
}