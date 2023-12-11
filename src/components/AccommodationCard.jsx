function AccommodationCard({ accommodation }) {
  return (
    <article className="home__card">
      <img src={accommodation.cover} alt="location" />
      <h1>{accommodation.title}</h1>
    </article>
  );
}

export default AccommodationCard;
