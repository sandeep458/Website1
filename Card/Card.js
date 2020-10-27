
import React from 'react'
import './Card.css';
 const App =(props)=> {
    return (
        <div className="photo-a">
        <img src={props.imgsrc} alt={""}></img>
    <div className = "cardViews">
    <span >18 oct 2020</span>
    <span>9{Math.round(Math.random()*1000)} views</span>
    </div>
    </div>
    )
  }

export default App;
