import './App.css';
import { date } from './date';
import { useState } from 'react';
import Button from './Button';
import SlideFlat from './Slade';
import ButtonTwo from './ButtonTwo';
import ButtonThree from './ButtonThree';
import Forma from './Form';


function Comprar () {
    const [flat, setFlat] = useState(date);
    
const changeFlat =(room) => {
const newFlat = date.filter(element => element.room === room)
setFlat(newFlat)
}
const changeFlatApTwo =(tipo) => {
    const newFlatTwo = date.filter(element => element.tipo === tipo)
    setFlat(newFlatTwo)
    }
    const changeFlatApThree =(zona) => {
        const newFlatThree = date.filter(element => element.zona === zona)
        setFlat(newFlatThree)
        }

    return (
        <div>
        <div className='container'>
        <div  className='partOne'>
<div className='partOne' >
<ButtonTwo changeFlatApTwo = {changeFlatApTwo} />
</div>
<div className='partOne' >
<ButtonThree changeFlatApThree = {changeFlatApThree} />
</div>
<div className='partOne'>
<Button changeFlatAp = {changeFlat} />
</div>
</div>
<div className='part' >
<SlideFlat flat ={flat} />
</div>
    </div>
    <div>
<Forma />
    </div>
    </div>
    )
  
}
export default Comprar