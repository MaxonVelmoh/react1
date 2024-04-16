import { differences } from '../data'
import Button from './Button/Button'
import { useState } from 'react'

export default function DifferencesSection(){
const [contentType, setContentType] = useState(null)
function handleClick(type){
  console.log('Button Clicked', type)
  setContentType(type)
}
return(
  <section>
    <h3> mi kaifari</h3>
    <Button
    isActive={contentType==='way'}
    onClick={()=> handleClick('way')}
    >
      Podhod
      </Button>
      <Button
    isActive={contentType==='easy'}
    onClick={()=> handleClick('easy')}
    Dostupnost
    ></Button>
    <Button
    isActive={contentType==='program'}
    onClick={()=> handleClick('program')}
    Kosentraciya
    ></Button>
    {contentType ? <p>{differences[contentType]}</p>: <p>Press button</p>}
    


  </section>
)
}