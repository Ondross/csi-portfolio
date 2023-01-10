import { Link } from 'react-router-dom'
import React from 'react';
import './Home.css';


function Home() {
  return (
    <div className="links">
      <div className="link"><Link to="/insight1"> Insight 1 </Link> </div>
      <div className="link"><Link to="/insight2"> Insight 2 </Link> </div>
    </div>
  );
}

export default Home;
