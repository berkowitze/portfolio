import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import BlogApp from "./BlogApp.tsx";
import BlogPage from "./BlogPage.tsx";
import GamesApp from "./GamesApp.tsx";

import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error = useRouteError() as any;

  return (
    <div id="error-page">
      <p>
        Sorry, an unexpected error has occurred. Eli has been notified (unless
        that system is also broken).
      </p>
      <p>
        In the meantime, check out his{" "}
        <a href="https://github.com/berkowitze">Github</a>,{" "}
        <a href="https://artstation.com/eliberkowitz">Artstation</a>, or{" "}
        <a href="https://eliberkowitz.com/Eli_Berkowitz_Resume.pdf">Resume</a>!
      </p>
      <br />
      <p>Error details:</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: `/blog/:slug`,
    element: <BlogApp />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: `/games/:slug`,
    element: <GamesApp />,
  },
  {
    path: "/games",
    loader: async () => {
      return redirect("/#games");
    },
  },
  {
    path: "/code",
    loader: async () => {
      return redirect("/#code");
    },
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
