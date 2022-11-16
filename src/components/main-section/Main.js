import { Link } from "react-router-dom"
import mainPhoto from '../assets/me.jpeg'

const Main = () =>{
    return(
        <div style={{minHeight:'100vh', background:'rgb(0, 0, 29)'}} data-aos="fade-zoom-in" data-aos-duration="1000" className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="App-title fs-1 text-white">Front-end developer</h1>
            <img style={{width: '15rem', height:'15rem'}} className="rounded-circle" src={mainPhoto} alt='main photo' />
            <h2 className="App-subtitle fs-1 mt-2 text-white">Matias Garcia</h2>
            <Link to={'/about'}>
                <button className="btn-float mt-5">
                    <span className="d-flex flex-column text-white">
                        discoverMe
                        <i class="fa-solid fa-arrow-down"></i>
                    </span>
                </button>
            </Link>
        </div>
    )
}

export default Main