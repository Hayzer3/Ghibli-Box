import Reviews from "../../../pages/reviews/index";

interface PageProps{
  params: Promise<{ film_id: string }>;
}


export default async function  ReviewsPage({params}: PageProps) {
  const {film_id} = await params;

  return (
    <main>
      <Reviews film_id={film_id}/>
    </main>
  );
}