import { useContext } from 'react';
import { Context } from '../context/ApiContext';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Accommodation() {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipmentOpen, setIsEquipmentOpen] = useState(false);
  const [accommodationList] = useContext(Context);
  const { id } = useParams();
  const location = useLocation();
  const foundAccommodation = accommodationList.find((el) => el.id === id);
  const rating = parseInt(foundAccommodation?.rating);

  const content = (
    <section className="accommodation" key={foundAccommodation?.id}>
      <header className="accommodation__banner">
        <img
          className="accommodation__image"
          src={foundAccommodation?.cover}
          alt="logement"
        />
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
        <div 
          className='accommodation__dropdown' 
          onClick={() => isDescriptionOpen ? setIsDescriptionOpen(false) : setIsDescriptionOpen(true)}
        >
          <div className='accommodation__dropdown__content'>
            <p>Description</p>
            <FontAwesomeIcon 
              icon={isDescriptionOpen ? faChevronUp : faChevronDown} 
            />
          </div>
          {isDescriptionOpen && (
            <div className="accommodation__description">
              <p>{foundAccommodation.description}</p>
            </div>
          )}
        </div>
        <div className='accommodation__dropdown'>
          <div 
            className='accommodation__dropdown__content'
            onClick={() => isEquipmentOpen ? setIsEquipmentOpen(false) : setIsEquipmentOpen(true)} 
          >
            <p>Équipements</p>
            <FontAwesomeIcon 
              icon={isEquipmentOpen ? faChevronUp : faChevronDown} 
            />
          </div>
          {isEquipmentOpen && (
            <div className="accommodation__equipments">
              {foundAccommodation.equipments.map((el, index) => (
                <p key={index}>{el}</p>
              ))}
            </div>
          )}
        </div>
      </footer>
    </section>
  )

  return foundAccommodation 
    ? content
    : <Navigate to="/error-page" state={{ from: location }} replace />
}

export default Accommodation;
