import './App.css';

function Button ({changeFlatAp}) {
    return (
        <div>
              <div className='questionBox'>
            <h4> Habitaciones </h4>
            <div className='one'> 
       <label>4 Habitaciones </label>
            <button  className="box" onClick = {()=> changeFlatAp(4)}> push </button></div>
            <div className='one'> 
       <label>3 Habitaciones </label>
            <button  className="box" onClick = {()=> changeFlatAp(3)}> push </button></div>
                <div className='one'> 
                <label>2 Habitaciones</label>
                <button className="box" onClick = {()=> changeFlatAp(2) }>push </button>
        </div>
        </div>
        </div>
    )
}
export default Button