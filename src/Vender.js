import { useState } from 'react';
import { spdate } from './spdate';
import left from "./icons8.png";
import right from "./icons81.png";
import './App.css';

function Vender () {
    const [city,setCity]=useState(0);
    const {id ,  name, foto, textmas}= spdate[city];

    const preCity =()=> {
        setCity((city=>{
            city --;
            if (city<0){
                city=spdate.length-1}
                return city;
        }))
    }
    
    const nextCity =()=> {
        setCity((city=>{
            city ++;
            if (city>spdate.length-1){
                city=0;
            }
            return city;
        }))
    }
    return (
        <div>
            
            <div className='container'>
            <div className='partTwo'>
         <h2 className="blanco" id="C8"> Quiere vender su casa, dejame hacerlo!</h2>
         <form >
            <div className="menu blanco">
               <label>Nombre</label>
               <input type="text" placeholder="Nombre...."/>
            </div>
            <div className="menu blanco"> 
               <label>Telefono</label>
               <input type="text" placeholder="Telefono..."/>
            </div>
            <div className="menu blanco">
               <label>Correo electronico</label>
               <input type="email" placeholder="Correo electronico..."/>
            </div>
         </form>
         <div>
         <a href="mailto:inmo.rosarocamora@gmail.com">
         <button className="btn">
         Le esperamos
         </button>
         </a>
      </div>
      <div>
        <h2> ¿Por qué vender tu piso con Nosotros?</h2>
        <h3> ✔ {textmas}</h3>
      </div>
      </div>
      <div className='partOne' key={id}>
                <h3>{name}</h3>
          <img src={foto} alt="city" height="450px" width="450px"/>
          <div className='partBtn'>
          <button onClick={preCity}><img src={left} width="40px"  alt='left'/> </button>
          <button onClick={nextCity}><img src={right} width="40px" alt='right' /></button>
          </div>
          
            </div>
   
      </div>

        </div>
    )
}
export default Vender