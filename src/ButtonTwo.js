import './App.css';

function ButtonTwo ({changeFlatApTwo}) {
    return (
        <div>
            <div className='questionBox'>
            <h4> Tipo de vivienda </h4>
            <div className='one'> 
            <label>Pisos, áticos</label>
             <button  className="box" onClick = {()=> changeFlatApTwo("Apartamentos")}> push </button></div>
            <div className='one'> 
            <label>Casas y chalets y dúplex</label>
      
        <button className="box" onClick = {()=> changeFlatApTwo("Bungalows") }>push </button>
        </div>
        </div>
        </div>
    )
}
export default ButtonTwo