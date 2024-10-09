import { Link, Route, Routes, useNavigate, useRoutes } from "react-router-dom";
import "./App.css";
import CommentList from "./pages/comments/CommentList";
import ReceipeList from "./pages/recipes/ReceipeList";
import RecipeDetailsPage from "./pages/recipe-details/RecipeDetailsPage";
import NotFoundPage from "./pages/not-found/NotFoundPage";
import Layout from "./components/layout/Layout";
import ReactHookFormExamplePage from "./pages/react-hook-form-example/ReactHookFormExamplePage";
import UseEffectHook from "./pages/Hook/useEffectHooks";
import UseMemoHook from "./pages/Hook/UseMemoHook";
import UseCallbackHook from "./pages/Hook/UseCallbackHook/UseCallbackHook";
import ReactQueryDemo from "./pages/react-query/ReactQueryDemo";

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
      element: <ReactHookFormExamplePage />,
    },
    {
      path: "/use-effect-hook",
      element: <UseEffectHook />,
    },
    {
      path: "/use-memo-hook",
      element: <UseMemoHook />,
    },
    {
      path: "/use-callback-hook",
      element: <UseCallbackHook />,
    },
    {
      path: "/react-query-demo",
      element: <ReactQueryDemo />,
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
    </div>
  );
};

export default App;
