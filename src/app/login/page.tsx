"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { api } from "../../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter(); 

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const resposta = await api.post("/auth/login", {
        email: email, 
        senha: senha
      });

      // Pega o token da resposta
      const token = resposta.data.token; 

      localStorage.setItem("ghibli_token", token);

      alert("Login realizado com sucesso!");
      router.push("/"); 

    } catch (erro) {
      console.error("Erro no login:", erro);
      alert("Email ou senha incorretos!");
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h1>Login - GhibliBox</h1>
      
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px", margin: 30, zIndex: 10 }}>
        
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
          Entrar
        </button>
        
      </form>
    </div>
  );
}