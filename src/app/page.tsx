import HomePage from "@/pages/home";
import { getFilms } from "@/services/filmService";

export default async function Home() {
  const films = await getFilms()
  return (
    <div>
      <HomePage films={films} />
    </div>
  );
}
