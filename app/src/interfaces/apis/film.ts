export async function getFilms(){
  const response = await fetch("https://ghibliapi.vercel.app/films", {cache: "no-store"});

  return response.json();

}