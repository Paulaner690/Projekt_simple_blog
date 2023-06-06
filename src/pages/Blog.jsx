// Array Data.jsx importieren
import blogData from "../components/Data"
// Nav Page importieren
import Nav from "../components/Nav";
// Importiert einzelne Container
import Product from "../components/Product";

const Blog = () => {

    return ( 
        <>
        <Nav />
        <section className="blogSection">
            {/* blogData mappen (Product ist unsere Konstante (Product.jsx)) */}
            {blogData.map((item, index) => <Product products={item} key={index} />)}
        </section>
        </>
     );
}
 
export default Blog;