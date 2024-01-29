
import './Navbar.css'
function Navbar()
{
    return(
        <>
        <div className="navbar">
        <div className="leftSide">
            <h2>AgroGuide</h2>
        </div>
        <div className="rightList">
          <ul>
            <li> Home</li>
            <li>About Us</li>
            <li>Technique</li>
            <li>Crops</li>
            <li>Disease</li>
            <li>LogIn</li>
          </ul>
        </div>
        </div>
        </>
    )
}
export default Navbar;