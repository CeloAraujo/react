import React from "react";
import "./MyForm.css";
import { useState } from "react";

const MyForm = () => {
  //    3-gerenciamento de dados
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");

  const [bio, setBio] = useState("");

  const [role, setRole] = useState("");

  const handleName = (e) => {
    setname(e.target.value);
  };

  //   5-envio do form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, bio, role);
    // validação
    // envio

    // 7- limpar o formulario
    setname("");
    setEmail("");
    setBio("");
    setRole("");
  };
 
  return (
    <div>
      {/* 1- criação de form */}
      {/* 5- envio de formulário */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
            // 6- controlled input
            value={name || ""}
          />
        </div>
        {/* 2-label envolvendo input */}
        <label>
          <span>E-mail:</span>
          <input
            type="text"
            name="email"
            placeholder="Digite seu email"
            // 4- simplificando manipulação
            onChange={(e) => setEmail(e.target.value)}
            // 6- controlled input
            value={email || ""}
          />
        </label>
        {/* 8- textarea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* 9- select */}
        <label>
          <span>Função no sistema</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
