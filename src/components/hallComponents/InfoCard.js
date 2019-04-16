import React from 'react';

export default ({props, title, info, white}) => (
  <div className = {`infoCard ${ white ? 'cardColor' : '' }`}>
    <div className = 'infoTitle'>{ title }</div>
    <div className = 'miniInfo'>{ info }</div>
  </div>
)
