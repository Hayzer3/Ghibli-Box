import { getFilmsById } from "@/services/filmService";
import { EyeIcon, HeartIcon, Play, Target} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import JustWatchLink from "./JustWatchLink";
import SetWatchedOrSetLiked from "./SetWatchedOrSetLikedIcons";


interface FilmAboutProps {
  film_id: string;
}


export const FilmAbout = async ({ film_id }: FilmAboutProps) => {
  const film = await getFilmsById(film_id)

  return (
    <section className="max-w-6xl mx-auto mt-10 p-6">
      <div className="grid grid-cols-[250px_1fr_250px] gap-8">

        {/* POSTER */}
        <div className="flex flex-col items-center">
          <Image
            src={film.image}
            alt="Movie poster"
            width={300}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />

          {/* Ícones */}
          <div>

            {/* Componente use client */}
            <SetWatchedOrSetLiked/>
          </div>

          <div className="border-2 border-gray-500 w-62.5 rounded-sm">
              <div className="flex justify-center gap-20 bg-gray-500 text-gray-300 text-sm font-semibold p-1">
                <p>WHERE TO WATCH </p>
                <Play className="w-5"/>
              </div>
              <p className=" leading-relaxed text-sm p-2">Not Streaming.</p>
              <div className="border-[0.5px] border-gray-300"></div>
              <JustWatchLink url={"https://www.justwatch.com"}/>
          </div>
        </div>

        {/* TEXTO PRINCIPAL */}
        <div className="font-[rubik]">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <h1 className="text-3xl font-semibold">{film.title}</h1>
            <span className="text-lg text-gray-500">{film.release_date}</span>
            <span className="text-gray-700">
              Directed by <strong className="hover:underline hover:cursor-pointer">{film.director}</strong>
            </span>
          </div>

          <p className="leading-relaxed text-gray-800 text-[15px] text-justify">
            {film.description}
          </p>
           <div className="flex flex-col mt-3">
                <ul className="pt-3 text-gray-600">
                    <Link href={`www.google.com/${film.director}`} target="_blank">
                        <li className="hover:underline hover:text-gray-700">Director: {film.director}</li>
                    </Link>
                    <Link href={`www.google.com/${film.producer}`} target="_blank">
                        <li className="hover:underline hover:text-gray-700">Producer: {film.producer}</li>
                    </Link>
                    <li>Original Title: {film.original_title}</li>
                    <li>Romanised Title: {film.original_title_romanised}</li>
                    <li>Running time: {film.running_time} mins</li>
                </ul>

            </div>
        </div>

        {/* LADO DIREITO (Ex: informações extras) */}
        <div className="w-80">
          <div className="text-gray-700 text-sm leading-relaxed h-10 rounded-md p-2 hover:underline">
            <Link href={'/login'}>
                <p className="text-[18px] text-center">Sign in to log, share or review</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};