
import './App.css';
import React from 'react';
import Config from "./util/Config.json";


function App() {
  return (
    <div className='card-container' >
     <h1 className='heading' style={{color: Config.theme.primaryColor}}>{Config.title}</h1>
     <p>{Config.description}</p>
     
     {
      Config.services.map((servicesData,index)=>{
        const{title,description,timing}=servicesData
        return(
          <div className='card' key={index}>
            <div className='card-body'>
              <h3 className='Card-title' style={{color: Config.theme.secondaryColor}} >{title}</h3>
              <p className='Card-text'>{description}</p>
              <p className='Card-text'>{timing}</p></div>

          </div>
        )
      })
     }
      
      </div>
  );
}

export default App;
