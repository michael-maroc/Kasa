import AcommodationsData from '../data/appartements.json';
import AccommodationCard from './AccommodationCard';

function Home() {
  return (
    <section className="home">
      <div className="home__banner"></div>
      <section>
        {AcommodationsData?.map((accommodation) => (
          <AccommodationCard accommodation={accommodation} key={accommodation.id} />
        ))}
      </section>
    </section> 
  );
}

export default Home;
