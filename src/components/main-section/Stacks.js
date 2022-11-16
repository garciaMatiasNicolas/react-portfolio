import React from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';

const Stacks = () => {

  const progress = [
    {icon:'js-square', value:'80'},{icon:'html5', value:'90'},{icon:'css3-alt', value:'70'},{icon:'bootstrap', value:'90'},{icon:'react', value:'65'},{icon:"node",value:'35'}
  ]

  return (
    <div className="row mt-5 w-100 mb-5 bg-white">
      <div className='col-12 col-lg-6 d-flex flex-column justify-content-bewteen align-items-center'>
        <h3 className="App-title fs-1 text-black">Dev Tools</h3>
        <p className="App-paragraph fs-5 w-75 text-left mt-3">I've my prefferences, I like coding with a Js library such as React but this are all the stacks which I can develop your own website</p>
      </div>
      <div className='col-12 App-stacks col-lg-6 d-flex justify-content-between align-items-center flex-column'>
       {progress.map( el => <div className='w-100 d-flex justify-content-bewteen align-items-center'>
          <MDBIcon className='me-3' fab color='black' size='2x' icon={el.icon} />
          <meter style={{height:'3rem'}} className='w-75 App-meter' value={el.value} min="0" max="100"> <MDBIcon fab icon="js-square" /></meter>  
        </div>)}
      </div>
    </div>
  )
}

export default Stacks