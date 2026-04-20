import { getFilmsById } from "@/services/filmService";
import Image from "next/image";

interface FilmHeroProps {
  film_id: string;
}

export const FilmHero = async ({ film_id }: FilmHeroProps) => {
  const film = await getFilmsById(film_id);

  return (
    <section className="relative w-full h-125 overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center  scale-100"
        style={{ backgroundImage: `url(${film.movie_banner})` }}
      />

      {/* OVERLAY ESCURO */}
      <div className="absolute inset-0 bg-black/10" />

      {/* GRADIENTE INFERIOR */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

      {/* GRADIENTE LATERAL (efeito Letterboxd) */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-black" />

      <div className="relative z-10 max-w-6xl mx-auto h-full flex items-end p-6">
        <h1 className="text-white text-3xl font-bold drop-shadow-lg">
          {film.original_title}
        </h1>
      </div>
    </section>
  );
};
