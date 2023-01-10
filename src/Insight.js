import { Link } from 'react-router-dom'
import React from 'react';
import './Insight.css';


function Insight(props) {
  return (
    <div className="insight">
      Welcome to Insight
      <div> {props.text} </div>
      <Link to="/"> Go Home </Link> 
    </div>
  );
}

export default Insight;
