import { FilmAbout } from "./FilmAbout";
import { FilmHero } from "./FilmHero";
import PopularReviews from "./PopularReviews";

interface ReviewsProps {
  film_id: string;
}

const Reviews = ({ film_id }: ReviewsProps) => {
  return (
    <div>
      <FilmHero film_id={film_id} />
      <FilmAbout film_id={film_id}/>
      <PopularReviews/>
    </div>
  )
};


export default Reviews;
