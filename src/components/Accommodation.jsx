import { useState } from 'react';
import { useParams, Navigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Dropdown from './Dropdown';

function Accommodation({ AccommodationData }) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [isEquipmentOpen, setIsEquipmentOpen] = useState(true);
  const { id } = useParams();
  const location = useLocation();
  const foundAccommodation = AccommodationData.find((el) => el.id === id);
  const rating = parseInt(foundAccommodation.rating);
  const pictures = foundAccommodation.pictures;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    if (currentIndex <= 0) return setCurrentIndex(pictures.length - 1)
    setCurrentIndex(currentIndex - 1)
  }
  const next = () => {
    if (currentIndex >= pictures.length - 1) return setCurrentIndex(0)
    setCurrentIndex(currentIndex + 1)
  }

  const content = (
    <main className="accommodation" key={foundAccommodation.id}>
      <header className="accommodation__banner">
        <FontAwesomeIcon 
          className='accommodation__arrow-left' 
          icon={faChevronLeft} 
          onClick={prev}
        />
        <FontAwesomeIcon 
          className='accommodation__arrow-right' 
          icon={faChevronRight} 
          onClick={next}
        />
        <div 
          className="accommodation__image"
          style={{ 
            backgroundImage: `url(${pictures[currentIndex]})`,
            backgroundPosition: `center`,
            backgroundSize: 'cover'
          }}
        ></div>
      </header>
      <div className="accommodation__grid">
        <div>
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
        </div>
        <div>
          <div className="accommodation__rating">
            <div className="accommodation__stars">
              <FontAwesomeIcon icon={faStar} className={rating >= 1 ? 'red-star' : 'gray-star'} />
              <FontAwesomeIcon icon={faStar} className={rating >= 2 ? 'red-star' : 'gray-star'} />
              <FontAwesomeIcon icon={faStar} className={rating >= 3 ? 'red-star' : 'gray-star'} />
              <FontAwesomeIcon icon={faStar} className={rating >= 4 ? 'red-star' : 'gray-star'} />
              <FontAwesomeIcon icon={faStar} className={rating == 5 ? 'red-star' : 'gray-star'} />
            </div>
            <div className="accommodation__hosting">
              <p>{foundAccommodation.host.name}</p>
              <img src={foundAccommodation.host.picture} alt="photo du propriétaire" />
            </div>
          </div>
        </div>
      </div>
      <footer className='accommodation__footer'>
        <Dropdown 
          className={'accommodation'}
          isStateOpen={isDescriptionOpen}
          setStateOpen={setIsDescriptionOpen}
          title={'Description'}
          description={foundAccommodation.description}
        />
        <Dropdown 
          className={'accommodation'}
          isStateOpen={isEquipmentOpen}
          setStateOpen={setIsEquipmentOpen}
          title={'Équipements'}
          list={foundAccommodation.equipments}
        />
      </footer>
    </main>
  )

  return foundAccommodation 
    ? content
    : <Navigate to="/error-page" state={{ from: location }} replace />
}

export default Accommodation;
