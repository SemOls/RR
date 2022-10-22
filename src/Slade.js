import './App.css';
import { useState } from 'react';

function SlideFlat ({flat}) {
    const [showText, setShowText] = useState(false);

    const showTextClick= (element) => {
        element.showMore = !element.showMore;
      setShowText(!showText)
    }

    return (
        <div>
 <div className='container'> 
        {flat.map((element=>{
            const { id, name, zona, state, space, precio,  room, lavatory, terraza,  balcon,  floor,  comOne,   dopCom, location,  constr, text,  foto,  showMore} = element;
            return(
                <div className='card' key={id}>
                    <div className='line'>   <h3> {id} - {name}</h3></div>
                 <div className='line'>   <h4>{state} , {zona}</h4> </div>
                 <div>      <img src={foto} width="350px" height="300px" alt="foto" /></div>
              
                 <div className='line'>    <h4>{space}m2 ,  {room}hab. {precio} €</h4> </div>
                    <ul>
                        <li>{floor},  {comOne}</li>
                        <li> {location}</li>
                        <li> {dopCom}</li>
                        <li>baño: {lavatory}</li>
                        <li>balcon/terraza: {balcon} / {terraza}</li>
                        <li>Año de construcción: {constr} </li>
                    </ul>
                  <p className='line'>{showMore ? text : text.substring(0,170) + "..."}
                  <button className='btmSH' onClick={ () => showTextClick(element)}> {showMore ? "show less" : "show more"} </button>
                  </p>

                </div>
            )
        }))}
        </div>
        </div>
    )
}

export default SlideFlat