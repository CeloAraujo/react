import './App.css'
// 2-importando componente
import FirstComponent from './components/FirstComponent'
// 4- importando template
import TemplateExpressions from './components/TemplateExpressions'
// 5- hierarquia de componentes
import MyComponent from './components/MyComponent'


// 6- eventos
import Events from './components/Events'


function App() {
// comentários
  return (
    <>
      <div>
        {/* 3-comentário em jsx */}
    <h1>Fundamentos do React!</h1>
    <h2>teste</h2>
    <FirstComponent/>  
    <TemplateExpressions/> 
    <MyComponent/>
    <Events/>
      </div>
    </>
  )
}

export default App
