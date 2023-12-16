import { useContext, useState } from 'react';
import { Context } from '../context/ApiContext';
import { useParams, Navigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Dropdown from './Dropdown';

function Accommodation() {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipmentOpen, setIsEquipmentOpen] = useState(false);
  const [accommodationList] = useContext(Context);
  const { id } = useParams();
  const location = useLocation();
  const foundAccommodation = accommodationList.find((el) => el.id === id);
  const rating = parseInt(foundAccommodation?.rating);

  const image = foundAccommodation?.cover;

  const content = (
    <section className="accommodation" key={foundAccommodation?.id}>
      <header className="accommodation__banner">
        <div 
          className="accommodation__image"
          style={{ 
            backgroundImage: `url(${image})`,
            backgroundPosition: `center`,
            backgroundSize: 'cover'
          }}
        ></div>
      </header>
      <main className="accommodation__main">
        <div>
          <div>
            <h1 className="accommodation__title">{foundAccommodation?.title}</h1>
            <p className="accommodation__location">{foundAccommodation?.location}</p>
          </div>
          <div className="accommodation__tags-container">
            {foundAccommodation?.tags.map((tag, index) => (
              <span key={index} className="accommodation__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="accommodation__rating">
            <div className="accommodation__stars">
              <FontAwesomeIcon
                icon={faStar}
                className={rating >= 1 ? 'red-star' : 'gray-star'}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={rating >= 2 ? 'red-star' : 'gray-star'}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={rating >= 3 ? 'red-star' : 'gray-star'}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={rating >= 4 ? 'red-star' : 'gray-star'}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={rating == 5 ? 'red-star' : 'gray-star'}
              />
            </div>
            <div className="accommodation__hosting">
              <p>{foundAccommodation?.host.name}</p>
              <img src={foundAccommodation?.host.picture} alt="photo du propriétaire" />
            </div>
          </div>
        </div>
      </main>
      <footer className='accommodation__footer'>
        <Dropdown 
          className={'accommodation'}
          isStateOpen={isDescriptionOpen}
          setStateOpen={setIsDescriptionOpen}
          title={'Description'}
          description={foundAccommodation?.description}
        />
        <Dropdown 
          className={'accommodation'}
          isStateOpen={isEquipmentOpen}
          setStateOpen={setIsEquipmentOpen}
          title={'Équipements'}
          list={foundAccommodation?.equipments}
        />
      </footer>
    </section>
  )

  return foundAccommodation 
    ? content
    : <Navigate to="/error-page" state={{ from: location }} replace />
}

export default Accommodation;
