import React from 'react';


import { QRious } from 'react-qrious'
// import ReactDOM from 'react-dom'

  const QRCode = ({text, size}) => {
    
    //return(<canvas ref={canvas}></canvas>);
    return (<QRious value={text} size={size}/>)
  }
  export default QRCode;
