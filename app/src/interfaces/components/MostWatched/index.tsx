'use client';

import { Film } from "@/src/interfaces/interface/Films";
import { EmblaCarousel } from "../Carousel";

interface MostWatchedProps {
  films: Film[];
}

export default function MostWatched({films} : MostWatchedProps){

    return (
    <EmblaCarousel>
        {films?.map((film) => (
            <div
                key={film.id}
                className=" bg-white/10 backdrop-blur-md p-5 rounded-xl text-white mt-30">
                    <img className="rounded-md  object-cover" src={film.image} alt={film.title} />
                    <h3 className="text-2xl text-center text-black mt-3">{film.title}</h3>
            </div>
        ))}
    </EmblaCarousel>
    );
}