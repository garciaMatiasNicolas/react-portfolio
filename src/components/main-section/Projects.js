import jovies from '../assets/jovies.png';
import koumpo from '../assets/koumpo.png'
import vn from '../assets/vn.png'
import modula from '../assets/modula.png'
import CardsProjects from './CardsProjects';

const myProjects = [
  {name: 'Vn Basquet', bg: 'rgb(255, 255, 255)', image:vn , style:'w-50 h-100', description:'My first website! build only with HTML and CSS', url:'https://vnbasquet.netlify.app/'},
  {name: 'Jovies', bg: 'rgb(70, 0, 0)', image: jovies, style:'w-50 h-100', description:'Fast-Food e-commerce build with HTML, CSS and Javascript!', url:'https://jovies.netlify.app/'},
  {name: 'Koumpo Store', bg: 'rgb(3, 39, 3)', image: koumpo, style:'w-100 h-100', description:"Sports clothes e-commerce build with React Js", url:'https://koumpostore.netlify.app'},
  {name: 'Modula Estudio', bg: 'rgb(255, 255, 255)', image: modula, style:'w-50 h-100', description:'My first real experience with a client, for an architecture studio here en Arg! (still working on it)', url:'https://modulaestudio.netlify.app/'},
]

const Projects = () => {

  return (
      <div className='row w-100 m-0 d-flex justify-content-evenly'>
        {myProjects.map( element=> <CardsProjects key={element.name} {...element} />)}
      </div>
  )
}

export default Projects