import { Link } from "react-router-dom";
import { heroes } from "../../data/heroes";

function HomePage() {
  return (
    <>
      <h2 className="mb-5">Home Page - список героев</h2>
      <div className="flex flex-row gap-3">
        {heroes.map((hero) => (
          <Link to={`/hero/${hero.id}`}>
            <div>
              <h3>{hero.name}</h3>
              <img src={hero.image} alt={`${hero.name} img`} />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default HomePage;
