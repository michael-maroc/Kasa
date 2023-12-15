import { useContext } from 'react';
import { Context } from '../context/ApiContext';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Accommodation() {
  const [accommodationList] = useContext(Context);
  const { id } = useParams();
  const location = useLocation();
  const foundAccommodation = accommodationList.find((el) => el.id === id);
  const rating = parseInt(foundAccommodation.rating);

  return foundAccommodation ? (
    <section className="accommodation" key={foundAccommodation.id}>
      <div className="accommodation__banner">
        <img
          className="accommodation__image"
          src={foundAccommodation.cover}
          alt="logement"
        />
      </div>
      <div>
        <h1 className="accommodation__title">{foundAccommodation.title}</h1>
        <p className="accommodation__location">{foundAccommodation.location}</p>
      </div>
      <div className="accommodation__tags-container">
        {foundAccommodation.tags.map((tag, index) => (
          <span key={index} className="accommodation__tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="accommodation__rating">
        <div className="accommodation__stars">
          <FontAwesomeIcon
            icon={faStar}
            className={rating >= 1 ? '$color-primary' : 'gray-star'}
          />
          <FontAwesomeIcon
            icon={faStar}
            className={rating >= 2 ? '$color-primary' : 'gray-star'}
          />
          <FontAwesomeIcon
            icon={faStar}
            className={rating >= 3 ? '$color-primary' : 'gray-star'}
          />
          <FontAwesomeIcon
            icon={faStar}
            className={rating >= 4 ? '$color-primary' : 'gray-star'}
          />
          <FontAwesomeIcon
            icon={faStar}
            className={rating == 5 ? '$color-primary' : 'gray-star'}
          />
        </div>
        <div className="accommodation__hosting">
          <p>{foundAccommodation.host.name}</p>
          <img src={foundAccommodation.host.picture} alt="photo du propriétaire" />
        </div>
      </div>
    </section>
  ) : (
    <Navigate to="/error-page" state={{ from: location }} replace />
  );
}

export default Accommodation;
