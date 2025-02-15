<<<<<<< HEAD
import "./Header.css";
const Header=()=>{
    return <div className="header">
        <h3 className="title"> My Quiz Hub</h3>

    </div>;
    
=======
import { Link } from "react-router-dom";
import "./Header.css";


const Header = () => {
    return <div className="header">
        <Link to="/" className="title">
            My Quiz Hub
        </Link>
        <hr className="divider" />

    </div>;

>>>>>>> fbb9a19555c0bbec51ed6ad2128705d60bde9a3f
};

export default Header;