import Header from '../components/Header';
import Footer from '../components/Footer';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Accommodation from '../pages/Accommodation';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import About from '../pages/About';
import AccommodationData from '../data/appartements.json';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home AccommodationData={AccommodationData} />} />
          <Route path="accommodation/:id" element={<Accommodation AccommodationData={AccommodationData} />} />
          <Route path='about' element={<About />} />
          <Route path="error-page" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
