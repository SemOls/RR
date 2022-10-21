import { useState } from 'react';
import { cityName } from './Cityn';
import left from "./icons8.png";
import right from "./icons81.png"
import './App.css';

function Slide () {
const [city, setCity] = useState(0);
const {id , name, foto, subhead,  text, textmas}= cityName[city];


const preCity =()=> {
    setCity((city=>{
        city --;
        if (city<0){
            city=cityName.length-1}
            return city;
    }))
}

const nextCity =()=> {
    setCity((city=>{
        city ++;
        if (city>cityName.length-1){
            city=0;
        }
        return city;
    }))
}

    return (
        <div>
            <div className='container'>
            <div className='partOne' key={id}>
                <h3>{name}</h3>
          <img src={foto} alt="city" height="450px" width="450px"/>
          <div className='partBtn'>
          <button onClick={preCity}><img src={left} width="40px"  alt='left'/> </button>
          <button onClick={nextCity}><img src={right} width="40px" alt='right' /></button>
          </div>
          
            </div>
            <div className='partTwo'>
            <h2>
          {subhead}
            </h2>
            <h3>
           {text} 
           </h3>
           <h3>
             {textmas }
           </h3>
            
            </div>
            </div>
        </div>
    )
}

export default Slide