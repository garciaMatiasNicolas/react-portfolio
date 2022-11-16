import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import logo from './assets/logo.png'


export default function App() {
  return (
    <MDBFooter className='text-center text-white w-100' style={{ backgroundColor: 'rgb(0, 0, 29)' }}>
        
        <div className='mb-3 h-50'>
            <img className='App-logo' src={logo}/>
            <h3 className='App-title'>Developed by me</h3>
            <p className='App-paragraph'>Don't give up on your dreams or your dreams will give up on you</p>
        </div>

        <section className='mb-4 h-50'>

            <MDBBtn color='transparent' className='m-1' target='_blank' href='https://github.com/garciaMatiasNicolas' role='button'>
                <MDBIcon color='white' size='3x' fab icon='github' />
            </MDBBtn>

            <MDBBtn color='transparent' className='m-1' target='_blank' href='mailto:garciamatias159@gmail.com' role='button'>
                <MDBIcon color='white' size='3x' fab icon='google' />
            </MDBBtn>

            <MDBBtn color='transparent'  className='m-1' target='_blank' href='https://www.instagram.com/matigarciad/' role='button'>
                <MDBIcon color='white' size='3x' fab icon='instagram' />
            </MDBBtn>

            <MDBBtn color='transparent' className='m-1' href='https://www.linkedin.com/in/matias-garcia-aa7307239/' target='_blank' role='button'>
                <MDBIcon color='white' size='3x' fab icon='linkedin-in' />
            </MDBBtn>

        </section>

      <div className='text-center p-3 h-50'>
        <a className='text-white text-decoration-none App-subtitle' href='https://mdbootstrap.com/'>
        © 2022 Copyright: Matias Garcia, All rights reserved
        </a>
      </div>
    </MDBFooter>
  );
}