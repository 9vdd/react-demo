import React from 'react';
import './style.css';

export default (props) => {
  return (
    <div className="contain">
      <p className="hello">
        hello {props.name}!
      </p>
    </div>
  );
};