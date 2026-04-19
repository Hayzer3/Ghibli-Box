export async function getFilms() {
  // Agora o Front-end pede os filmes para o seu Back-end!
  const response = await fetch("http://localhost:8080/filmes", { 
    cache: "no-store" 
  });

  return response.json();
}

export async function getFilmsById(id:string){
  const response = await fetch(`http://localhost:8080/filmes/${id}`, { 
    cache: "no-store"
  });

  return response.json();

}
