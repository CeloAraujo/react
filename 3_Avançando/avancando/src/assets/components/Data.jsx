import { useState } from 'react'

const Data = () => {

    let someData = 10;

    const [anotherNumber, setAnotherNumber]= useState(15)

    const [nome,setNome]= useState("Pedro")

  return (
    <div>
        <p>Valor:{someData}</p>
        <button onClick={()=>(someData =100)}>Mudar a variável</button>
        <p>OBS: note que não muda o valor apresentado na tela</p>
        <h4>Já usando useState:</h4>
        <p>Valor:{anotherNumber}</p>
        <button onClick={()=>setAnotherNumber(20)}>Mudar state</button>
        <h4>Testando com String:</h4>
        <p>Programador: {nome}</p>
        <button onClick={()=>setNome("Marcelo")}>Mude para o nome correto do programador clicando aqui!</button>
    </div>
  )
}

export default Data