import { getFilmsById } from "@/services/filmService";
import Image from "next/image";

interface FilmHeroProps {
  film_id: string;
}

export const FilmHero = async ({film_id}:FilmHeroProps) => {
    const film = await getFilmsById(film_id)


    return (
        <section className="text-white relative overflow-hidden h-screen bg-gray-900">
            <div>
                <Image
                    src={film.movie_banner}
                    alt="Movie Banner"
                    fill
                    sizes='50vw 50vh'
                    priority
                    className="
                    object-cover opacity-80"
                />
                
            </div>
        </section>
    )
}
