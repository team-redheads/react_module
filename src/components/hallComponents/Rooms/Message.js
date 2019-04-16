import React from 'react';
import { Link } from 'react-router-dom';

export default p => (
  <div className = 'mesMain'>
    <div className = 'messageCont'>
      <h2>{ p.title }</h2>
      <p>{ p.description }</p>
      { p.btn ? <Link to = '/auth'><div className = 'mesBtn'>Продолжить</div></Link> : false }
    </div>
  </div>
)
