import react, {useState, useRef} from 'react'
import { bootcamp2_backend } from 'declarations/bootcamp2_backend';

export default function Blog(){
    const [wpisy, setWpisy] = useState([])
    const wpisRef = useRef()
  async function handleClick() {
    setWpisy(await bootcamp2_backend.odczytaj_wpisy())
  }
  const addText = async() =>{
    await bootcamp2_backend.dodaj_wpis(wpisRef.current.value)
  }
    return (
        <main>
            <div>hello blog!</div>
            <input type="text" ref={wpisRef}/>
            <button onClick={addText} >dodaj wpis</button>
            <button onClick={handleClick}>refresh</button>
            <div>{wpisy}</div>  
        </main>
        

    )
}