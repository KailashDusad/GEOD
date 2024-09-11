import React from 'react';
import { ClipLoader } from 'react-spinners';
import '../styles/Loader.css'; 

const Loader = () => (
  <>
  <div className="loader-container">
    {/* <ClipLoader size={50} color={"#123abc"} loading={true} /> */}
    <span className='loader'></span>
  </div>
  </>
);

export default Loader;
