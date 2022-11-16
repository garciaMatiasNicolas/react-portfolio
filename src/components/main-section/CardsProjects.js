import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { MDBRipple } from 'mdb-react-ui-kit';

const CardsProjects = ({name, description, url, style, image, bg}) => {
  return (
            <MDBRipple style={{background:bg}} className='col-12 col-sm-5 mt-5 d-flex justify-content-center aling-items-center hover-overlay shadow-1-strong rounded border border-2' rippleTag='div' rippleColor='light'>
              <img src={image} className={style} />
              <div className='mask hover-overlay d-flex flex-column justify-content-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.950)' }}>
                <div className='d-flex flex-column justify-content-evenly align-items-center w-100 h-100'>
                    <h3 className='App-subtitle text-white'>{name}</h3>
                    <p className='App-paragraph text-white text-center'>{description}</p>
                    <a target='_blank' href={url}>
                        <button className='btn btn-outline-info App-paragraph'>Visit website</button>
                    </a>
                </div>
              </div>
            </MDBRipple>
  )
}

export default CardsProjects