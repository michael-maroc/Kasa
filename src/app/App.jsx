import Header from '../components/Header';
import Footer from '../components/Footer';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Accommodation from '../components/Accommodation';
import ErrorPage from '../components/ErrorPage';
import Home from '../components/Home';

function App() {
  return (
    <main className="main">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="accommodation/:id" element={<Accommodation />} />
          <Route path="error-page" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
