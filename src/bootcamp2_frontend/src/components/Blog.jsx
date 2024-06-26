import react, {useState, useRef, useEffect} from 'react'
import { bootcamp2_backend } from 'declarations/bootcamp2_backend';

export default function Blog(){
    const [wpisy, setWpisy] = useState([])
    const wpisRef = useRef()
  async function handleClick() {
    setWpisy(await bootcamp2_backend.odczytaj_wpisy())
  }
  const addText = async() =>{
    console.log(wpisy)
    await bootcamp2_backend.dodaj_wpis(wpisRef.current.value)
  }
  useEffect(() => {
    handleClick()
  }, [])
    return (
        <main className='container mx-auto'>
            <h2 className='text-blue-600'>Wpisy na bloga</h2>
            <input type="text" ref={wpisRef}/>
            <button onClick={addText} className='bg-blue-600 m-10'>dodaj wpis</button>
            <button onClick={handleClick}>refresh</button>
            <ul>
              {wpisy.length != 0 && (wpisy.map(el => {
                console.log(el)
                return <li>{el}</li>
              }))}
            </ul>  
        </main>
        

    )
}