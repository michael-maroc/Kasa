import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <section className="error-page">
      <div className="error-page__container">
        <h1 className="error-page__heading">404</h1>
        <p className="error-page__text">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link className="error-page__link" to="/">
          Retournez sur la page d'accueil
        </Link>
      </div>
    </section>
  );
}

export default ErrorPage;
