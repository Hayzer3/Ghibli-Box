"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Cadastro() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        // nomes de acordo com os atributos do backend
      await axios.post("http://localhost:8080/auth/register", {
        username: username.trim(),
        email: email.trim(),
        senha: senha.trim()
      });

      alert("Conta criada com sucesso! Faça seu login.");
      router.push("/login");

    } catch (erro) {
      console.error("Erro no cadastro:", erro);
      alert("Erro ao criar conta. Verifique os dados no console.");
    }
  };

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      minHeight: "100vh", 
      position: "relative" 
    }}>
      
      <h1 style={{ zIndex: 10, position: "relative" }}>Cadastro - GhibliBox</h1>
      
      <form onSubmit={handleCadastro} style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "10px", 
        width: "300px", 
        zIndex: 10, 
        position: "relative" 
      }}>
        
        <label>Username:</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
          style={{ border: "1px solid black", padding: "8px", color: "black", backgroundColor: "white" }}
        />

        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          style={{ border: "1px solid black", padding: "8px", color: "black", backgroundColor: "white" }}
        />

        <label>Senha:</label>
        <input 
          type="password" 
          value={senha} 
          onChange={(e) => setSenha(e.target.value)} 
          required 
          style={{ border: "1px solid black", padding: "8px", color: "black", backgroundColor: "white" }}
        />

        <button type="submit" style={{ border: "1px solid black", padding: "10px", backgroundColor: "#eee", color: "black", cursor: "pointer" }}>
          Cadastrar
        </button>
        
      </form>
    </div>
  );
}