import { FilmHero } from "./FilmHero";

interface ReviewsProps {
  film_id: string;
}

const Reviews = ({ film_id }: ReviewsProps) => {
  return (
    <FilmHero film_id={film_id} />
  )
};


export default Reviews;
