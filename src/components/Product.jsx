import { NavLink } from "react-router-dom";

const Product = (props) => {
    const href = "/details/" + props.products.id;
    return ( 
        <div className="container">
            <img className="blogImg" src={props.products.img_url} alt={props.products.title} />
            <h3>{props.products.title}</h3>
            <NavLink className="btn" to={href}>Read more</NavLink>
        </div>
     );
}
 
export default Product;