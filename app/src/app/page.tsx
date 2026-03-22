import { HomePage } from "../interfaces/pages/home";
import { getFilms } from "../interfaces/apis/film";

export default async function Home() {
  const films = await getFilms()
  return (
    <div>
      <HomePage films={films} />
    </div>
  );
}
