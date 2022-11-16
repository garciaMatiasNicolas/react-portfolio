import { Link } from "react-router-dom"
import {MDBIcon} from 'mdb-react-ui-kit';

const Navbar = ()=>{
    return(
       <nav className="navbar navbar-expand-sm w-100 fixed-top" style={{background:'rgb(0, 0, 29)', borderBottom: '4px solid cornflowerblue'}}>
        <div className="container-fluid d-flex justify-content-end">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span><MDBIcon size="2x" color="white" fas icon="bars" /></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-5 mb-2 mb-lg-0">
                    <li className="nav-item"><Link className="nav-link active App-subtitle fs-5 text-white me-3" to={'/'}>HOME</Link></li>
                    <li className="nav-item"><a className="nav-link active App-subtitle fs-5 text-white me-3" aria-current="page" href="#about">ABOUT</a></li>
                    <li className="nav-item"><a className="nav-link active App-subtitle fs-5 text-white me-3" aria-current="page" href="#stacks">STACKS</a></li>
                    <li className="nav-item"><a className="nav-link active App-subtitle fs-5 text-white me-3" aria-current="page" href="#projects">PROJECTS</a></li>
                    <li className="nav-item"><a className="nav-link active App-subtitle fs-5 text-white" aria-current="page" href="#contact">CONTACT</a></li>
                </ul>
            </div>
       </div>
     </nav>
       
    )
}

export default Navbar