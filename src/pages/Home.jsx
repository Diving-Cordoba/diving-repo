import Navbar from "../componets/navbar.jsx"
import "../css/home.css"
const Home = () => {
    return(
        <div className="home">
            <Navbar></Navbar>
            <header>
                <h1>Profesional divining coureses</h1>
                {/* <p>we give best lessons in the world</p> */}
                <div className="buttons">
                <span>Read more</span>
                <span>Book your diving </span>
                </div>
            </header>
            <section>
                <div className="cards"></div>
                <div className="response"></div>
            </section>
        </div>
    )
} 
export default Home