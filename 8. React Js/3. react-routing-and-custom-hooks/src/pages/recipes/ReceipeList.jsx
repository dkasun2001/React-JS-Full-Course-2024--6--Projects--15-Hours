import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const ReceipeList = () => {
  const location = useLocation();
  console.log(location);

  const { data, loading, error } = useFetch("https://dummyjson.com/recipes");

  if (loading) return <h1>Fetching recipes! Please wait</h1>;

  console.log(data);

  return (
    <div>
      <h1 style={{ color: "red" }}>Recipe list page</h1>
      <ul>
        {data?.recipes?.length > 0
          ? data?.recipes.map((recipeItem) => (
              <div key={recipeItem?.id}>
                <img src={recipeItem?.image} />
                <label>{recipeItem?.name}</label>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
};

export default ReceipeList;
