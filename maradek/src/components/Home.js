import FryingPan from "./FryingPan";
import Recipe from "./Recipe";
import Spinner from "./Spinner";

const Home = ({ recipes, loading, error }) => {
  return (
    <div className="home container mx-auto py-10 flex flex-wrap gap-10 justify-center">
      {!loading && !error && recipes.length === 0 ? (
        <div>
          <p className="text-2xl lg:text-4xl font-semibold text-rose-300">
            Keress rá egy ételre, hogy receptet találj!
          </p>
          <FryingPan />
        </div>
      ) : null}

      {loading && <p>{error ? error : <Spinner />}</p>}

      {recipes?.length > 0 &&
        recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />)}
    </div>
  );
};

export default Home;
