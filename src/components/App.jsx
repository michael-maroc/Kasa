import Header from './Header';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Accommodation from './Accommodation';
import ErrorPage from './ErrorPage';
import Home from './Home';

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
