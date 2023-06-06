// CSS importieren
import './Home.css'
// NavLink gehört zu React-Router-Dom. Ist unser a-Tag
import { NavLink } from "react-router-dom";
// Nav Seite importieren
import Nav from "../components/Nav";

const Home = () => {
    return ( 
        <>
        {/* Header Section für background-img */}
        <header>
            <Nav />
        </header>
        <div className="homeSection">
            <h2>Welcome to my simple Blog</h2>
            {/* Mit "to" geben wir Pfad an wohin navigiert werden soll */}
            <NavLink className="btn" to="/blog">Go to articles</NavLink>
        </div>
        </>
     );
}
 
export default Home;