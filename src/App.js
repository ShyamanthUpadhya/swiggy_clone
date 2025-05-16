import "./App.css";
import ReactDOM from "react-dom/client";
import "./Container.css";
import "./index.css";
import { Header } from "./Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Body } from "./Body";
import AboutUs from "./AboutUs";
import reportWebVitals from "./reportWebVitals";
import RestMenu from "./RestMenu";

export function App() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/RestMenu/:resId",
    element: <RestMenu />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

reportWebVitals();
