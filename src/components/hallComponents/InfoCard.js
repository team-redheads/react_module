import React from 'react';

export default props => (
  <div className = 'infoCard'>
    <div className = 'infoTitle'>{ props.title }</div>
    <div className = 'miniInfo'>{ props.info }</div>
  </div>
)
