import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import {MDBIcon} from 'mdb-react-ui-kit';
import Projects from "./Projects";
import About from "./About";
import Stacks from "./Stacks";

const Info = ()=>{

    const icons = [{icon:"mobile-alt", title:'Responsive', text:'Design for all type of plataforms'}, {icon:"rocket",title:'Dynamic', text:'We are looking for dynamics designs'}, {icon:"chalkboard-teacher", title:'Friendly use', text:'Simple to understand for all users'}, {icon:"highlighter", title:'Aesthetics Desings', text:'The best designs for your business'}];

    const styles = {background:'rgb(0, 0, 29)', border:'3px solid cornflowerblue', width:'5rem', height:'5rem'}

    return(
        <>
        
        <div style={{marginBottom:'20rem'}} data-aos="fade-down" data-aos-duration="1000" className="bg-white d-flex flex-column align-items-center gap-3 ">
            <Navbar></Navbar>
            <Link id="about" to={'/'}>
                <button className="btn-up">
                    <span className="d-flex flex-column">goBack<i className="fa-solid fa-arrow-up"></i></span>
                </button>
            </Link>
            
            <div className="d-flex flex-column justify-content-between align-items-center mt-5 w-100 mb-5">
                <h2 className="App-title fs-1 text-black">ABOUT</h2>
                <div className="row w-100 mt-4">
                {icons.map(i => 
                    <div className="col-6 col-lg-3 d-flex flex-column justify-content-between align-items-center">
                        <div className="rounded-circle d-flex justify-content-center align-items-center" style={styles}>
                            <MDBIcon fas color="white" icon={i.icon} size='2x'/>
                        </div>
                        <div className="d-flex flex-column justify-content-between align-items-center mt-2">
                            <h3 className="App-subtitle text-black">{i.title}</h3>
                            <p className="App-paragraph text-center">{i.text}</p>
                        </div>
                    </div>
                )}
                </div>
                <About/>
            </div>
            
            <section data-aos="fade-up"
            data-aos-duration="1000" id="stacks">
                <Stacks/>
            </section>

            <section data-aos="fade-up"
            data-aos-duration="1000" id='projects'>
                <div className="m-5 d-flex flex-column justify-content-between align-items-center bg-white">
                    <h3 className='App-title fs-1 text-black'>PROJECTS</h3>
                    <p className='App-paragraph fs-4 text-center'>Here are a few past and actual design projects I've worked on. If you want to check the code, please se my <a target='_blank' href='https://github.com/garciaMatiasNicolas'>Github</a></p>
                </div>
                <Projects/>
            </section>
        </div>
        
        <section id="contact" style={{background:'rgb(0, 0, 29)',}} className="w-100 mt-5 d-flex justify-content-center">
            <div className="w-75 rounded row pb-5" style={{ position:'relative', bottom:'100px', background:'rgb(47, 90, 168)'}}>
                <div className="col-12 col-md-4">
                    <h3 className="App-subtitle fs-2 ms-3 mt-5 text-center text-white">Did you liked what you see?</h3>
                </div>
                <div className="col-12 col-md-4">
                    <p className="App-paragraph fs-5 text-white mt-5 text-center">If you are interested in working together, get in touch with me!</p>
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center">
                    <a href='mailto:garciamatias159@gmail.com'>
                    <div className="mt-5 p-1 d-flex justify-content-evenly align-items-center App-btn"><MDBIcon fas size="lg" icon="envelope" />Email Me!</div>
                    </a>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Info