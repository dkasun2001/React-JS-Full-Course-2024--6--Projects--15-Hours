import { Link, Route, Routes, useNavigate, useRoutes } from "react-router-dom";
import "./App.css";
import CommentList from "./pages/comments/CommentList";
import ReceipeList from "./pages/recipes/ReceipeList";
import RecipeDetailsPage from "./pages/recipe-details/RecipeDetailsPage";
import NotFoundPage from "./pages/not-found/NotFoundPage";
import Layout from "./components/layout/Layout";
import ReactHookFormExamplePage from "./pages/react-hook-form-example/ReactHookFormExamplePage";

//-------------------------- Custom routes

const CustomRouers = () => {
  const element = useRoutes([
    {
      path: "/home",
      element: <Layout />,
      children: [
        { path: "receipe-list", element: <ReceipeList /> },

        { path: "comment-list", element: <CommentList /> },

        { path: "receipe-list/:id", element: <RecipeDetailsPage /> },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
    {
      path: "/react-hook-form",
      element: <ReactHookFormExamplePage/>,
    },
  ]);

  return element;
};

//--------------------------

const App = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>React routing, Custom hooks and more</h1>

      {/* <Routes>
        <Route path="/home" element={<Layout />}>
          <Route path="receipe-list" element={<ReceipeList />} />
          <Route path="comment-list" element={<CommentList />} />
          <Route path="receipe-list/:id" element={<RecipeDetailsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes> */}

      <CustomRouers />
      
      {/* Normal way of navigating */}
      <div
        style={{
          border: "solid 2px",
          padding: "2px",
          paddingBottom: "10px",
        }}
      >
        <h2>Normal way of navigating</h2>
        <button
          onClick={() => navigate("/home/receipe-list")}
          style={{ background: "darkred", color: "white", marginRight: "10px" }}
        >
          Navigate to Recipe List Page
        </button>
        <button
          onClick={() => navigate("/home/comment-list")}
          style={{ background: "darkred", color: "white", marginLeft: "10px" }}
        >
          Navigate to Comment List Page
        </button>
      </div>

      {/* Alternative way of navigating */}
      <div
        style={{
          border: "solid 2px",
          marginTop: "10px",
          padding: "2px",
          paddingBottom: "10px",
        }}
      >
        <h2>Alternative way of navigating</h2>
        <p>
          <Link to={"/home/receipe-list"} style={{ fontSize: "20px" }}>
            Navigate to Recipe List Page
          </Link>
        </p>
        <p>
          <Link to={"/home/comment-list"} style={{ fontSize: "20px" }}>
            Navigate to Comment List Page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default App;
