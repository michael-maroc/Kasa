import { Link } from 'react-router-dom';

function Home({ AccommodationData }) {
  return (
    <main className="home">
      <div className="home__banner">
        <div className="home__layout">
          <span>Chez vous, partout et ailleurs</span>
        </div>
      </div>
      <ul>
        {AccommodationData.map((accommodation) => (
          <li className="home__card" key={accommodation.id}>
            <Link to={`accommodation/${accommodation.id}`}>
              <img src={accommodation.cover} alt="location" />
              <h1>{accommodation.title}</h1>
              <div className="home__card__overlay"></div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Home;
