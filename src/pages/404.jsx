import React from 'react';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import { navigate } from 'gatsby';

function NotFoundPage() {
  return (
      <div className='container'>
        <Topbar header_data={'Error :('} />
        <div className='content' style={{textAlign:'center'}}>
          <img className='img-border' alt='' />
          <h1 style={{paddingTop:'10px'}}>404</h1>
          <hr/>
          <p>No page found here...</p>
          <hr/>
          <button  type='button' onClick={() => { navigate(-1) }} className='error-button'>Go back</button>
          <img className='img-border' alt='' />
        </div>
        <Footer />
      </div>
    );
}

export default NotFoundPage;

export const Head = () => <title>Error :(</title>;