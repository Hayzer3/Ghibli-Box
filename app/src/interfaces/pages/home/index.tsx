import { MoveDown } from "lucide-react";



export const HomePage = () => {
    return (
        <main className="bg-[url(/images/background-home.png)] h-screen bg-no-repeat bg-center">
            <section className="h-full w-full flex items-end py-20 px-40">
                <div className="w-full flex items-center justify-between gap-20">
                    <h1 className="text-8xl text-white font-[poppins] font-bold">GHIBLIBOX</h1>
                    <h2 className="text-2xl text-white font-[rubik] flex-wrap tracking-wide line-clamp-4 break-normal">
                        Confira e avalie todos os filmes do Studio Ghibli, faça o review e compartilhe com seus amigos
                    </h2>
                    <h2>
                        <MoveDown 
                            className="text-white"
                            size={70}
                        />
                    </h2>
                </div>
            </section>
        </main>
    );
}