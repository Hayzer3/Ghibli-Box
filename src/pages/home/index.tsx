import { MoveDown } from "lucide-react";
import { Suspense } from "react";
import { Film } from "@/types/Films";
import MostWatched from "@/_components/MostWatched"; // esse componente vai receber filmes
interface HomePageProps {
  films: Film[];
}

const HomePage = ({ films }: HomePageProps) => {
  return (
    <main className="bg-[url(/images/background-home.png)] h-screen bg-no-repeat bg-center">
      <section className="h-full w-full flex items-end py-20 px-40">
        <div className="w-full flex items-center justify-between gap-20">
          <h1 className="text-8xl text-white font-[poppins] font-bold">
            GHIBLIBOX
          </h1>
          <h2 className="text-2xl text-white font-[rubik] flex-wrap tracking-wide line-clamp-4 break-normal">
            Confira e avalie todos os filmes do Studio Ghibli, faça o review e
            compartilhe com seus amigos
          </h2>
          <h2>
            <MoveDown className="text-white" size={70} />
          </h2>
        </div>
      </section>
      <section className="h-full w-full px-40 py-20 grid grid-cols-4 gap-10">
        <Suspense fallback={<div>Loading...</div>}>
          {/* Repassando os filmes para o Carrossel */}
          <MostWatched films={films} />
        </Suspense>
      </section>
    </main>
  );
};

export default HomePage;
