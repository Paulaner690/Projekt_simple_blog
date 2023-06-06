import './Details.css'
import { useParams } from "react-router-dom";
import blogData from "../components/Data";
import Nav from "../components/Nav";

const Details = () => {
    const params = useParams()
    const id = params.id
    const element = blogData[id]
    return ( 
        <>
        <Nav />
        <section className="detailsSection">
            <img className='detailsImg' src={element.img_url} alt={element.title} />
            <h3>{element.title}</h3>
            <h4>{element.published_date}</h4>
            <p>{element.description}</p>
            <h5>{element.author}</h5>
        </section>
        </>
     );
}
 
export default Details;