import { useContext } from 'react';
import { Context } from '../context/ApiContext';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Accommodation() {
  const [accommodationList] = useContext(Context);
  const { id } = useParams();
  const location = useLocation();
  const foundAccommodation = accommodationList.find((el) => el.id === id);

  console.log(`url id ===> ${id}`);
  console.log(foundAccommodation);

  return foundAccommodation ? (
    <section className="accommodations">
      <h1>Logements</h1>
    </section>
  ) : (
    <Navigate to="/error-page" state={{ from: location }} replace />
  );
}

export default Accommodation;
