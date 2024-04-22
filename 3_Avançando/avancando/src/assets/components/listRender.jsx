import {useState} from 'react'

const ListRender = () => {
    const [list]=useState(["Marcelo","Pedro","Filemon"]);

    const [users,setUsers] =useState([
      {id:1, name:"Marcelo", age:"24"},
      {id:2, name:"José", age:"25"},
      {id:3, name:"Pedro", age:"26"},
      {id:4, name:"John Doe", age:"26"},
    ])

    const deleteRandom = ()=>{
      const randomNumber = Math.floor(Math.random()*5)

      setUsers((prevUsers)=> 
      prevUsers.filter((user)=> randomNumber !== user.id))
    }

  return (
    <div>
      {/* 4-render sem key */}
      <h4>Abordagem não recomendada(sem key):</h4>
        <ul>
            {list.map((item,i)=>(
                <li key={i}>{item}</li>
            ))}
        </ul>
        {/* 5- render com key */}
        <h4>Com key:</h4>
        <ul>
        {users.map((user)=>(
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
        </ul>
        {/* 6- previous state */}
        <h4>Utilizando previous State</h4>
        <button onClick={deleteRandom}>Deletar usuário aleatório</button>
        </div>
  )
}

export default ListRender