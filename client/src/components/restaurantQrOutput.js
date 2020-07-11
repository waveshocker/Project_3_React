import React from 'react';


import QRCode from '../components/restaurantQrcomponent';




const QrOutput = () => {
  const text = "https://bernard.com";
  return(<div align="center">
  <h1>One QRCode</h1>
  <QRCode text={text} size="300"/>
  <p>{text}</p>     
  </div>);
}


export default QrOutput;