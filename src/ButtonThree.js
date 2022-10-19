import './App.css';

function ButtonThree ({changeFlatApThree}) {
    return (
        <div>
              <div className='questionBox'>
            <h4> Parte de cuidad </h4>
            <div className='one'> 
            <label>Calas de Santiago Bernabeu</label>
             <button  className="box" onClick = {()=> changeFlatApThree("Calas de Santiago Bernabeu")}> push </button></div>
                <div className='one'> 
                <label>Tamarit - Playa Lissa</label>
              <button className="box" onClick = {()=> changeFlatApThree("Tamarit - Playa Lissa") }>push </button>
        </div>
        <div className='one'> 
                <label>Puerto</label>
              <button className="box" onClick = {()=> changeFlatApThree("Puerto") }>push </button>
        </div>
        <div className='one'> 
                <label>Centro</label>
              <button className="box" onClick = {()=> changeFlatApThree("Centro") }>push </button>
        </div>
        </div>
        </div>
    )
}
export default ButtonThree