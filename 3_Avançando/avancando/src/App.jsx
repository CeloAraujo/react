import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 2- imagem em assets
import imgJs from './assets/js-react.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Avançando em React</h1>
        {/* 1- Imagem em public */}
        <img src="/program.png" alt="Programming" />
        {/* 2-img em assets */}
        <img src={imgJs} alt="Outra imagem"/>
      </div>
      
    </>
  )
}

export default App
