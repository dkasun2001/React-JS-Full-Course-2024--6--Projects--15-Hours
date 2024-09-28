import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useWindowResize from "../../hooks/useWindowResize custom hook/useWindowResize";

const ReceipeList = () => {
  const location = useLocation();
  console.log(location);

  const { data, loading, error } = useFetch("https://dummyjson.com/recipes");

  const windowSize = useWindowResize();

  if (loading) return <h1>Fetching recipes! Please wait</h1>;

  console.log(data);

  return (
    <div>
      <h1 style={{ color: windowSize.width < 768 ? "red" : "blue" }}>
        Recipe list page
      </h1>
      <h3>
        Current window width is {windowSize.width} and current height is{" "}
        {windowSize.height}{" "}
      </h3>
      <ul>
        {data?.recipes?.length > 0
          ? data?.recipes.map((recipeItem) => (
              <div key={recipeItem?.id} style={{ display: "grid" }}>
                <img
                  src={recipeItem?.image}
                  style={{
                    width: "400px", // Adjust width as needed
                    height: "400px", // Adjust height as needed
                    borderRadius: "5px", // Add optional rounded corners
                    objectFit: "cover", // Maintain aspect ratio and scale to fill
                    display: "flex",
                    justifyContent: "center",
                  }}
                  alt={recipeItem?.name} // Provide descriptive alt text for accessibility
                />
                <label
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    marginBottom: "20px",
                  }}
                >
                  {recipeItem?.name}
                </label>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
};

export default ReceipeList;
