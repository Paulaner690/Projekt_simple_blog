import './Home.css'
import { NavLink } from "react-router-dom";
import Nav from "../components/Nav";

const Home = () => {
    return ( 
        <>
        <header>
            <Nav />
        </header>
        <div className="homeSection">
            <h2>Welcome to my simple Blog</h2>
            <NavLink className="btn" to="/blog">Go to articles</NavLink>
        </div>
        </>
     );
}
 
export default Home;