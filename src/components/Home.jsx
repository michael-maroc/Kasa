import { useEffect, useContext } from 'react';
import AccommodationsData from '../data/appartements.json';
import { Context } from '../context/ApiContext';
import { Link } from 'react-router-dom';

function Home() {
  const [accommodationList, setaccommodationList] = useContext(Context);

  useEffect(() => {
    setaccommodationList(AccommodationsData);
  }, []);

  // console.log(accommodationList);

  return (
    <section className="home">
      <div className="home__banner"></div>
      <section>
        {accommodationList?.map((accommodation) => (
          <article className="home__card" key={accommodation.id}>
            <Link to={`accommodation/${accommodation.id}`}>
              <img src={accommodation.cover} alt="location" />
              <h1>{accommodation.title}</h1>
            </Link>
          </article>
        ))}
      </section>
    </section>
  );
}

export default Home;
