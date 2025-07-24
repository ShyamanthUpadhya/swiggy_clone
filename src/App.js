import "./App.css";
import "./Container.css";
import "./index.css";
import { Header } from "./Header";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import { Body } from "./Body";
import AboutUs from "./AboutUs";
import RestMenu from "./RestMenu";
import UserContext from "./util/UserContext";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./util/appStore";
import Cart from "./Cart";

export function App() {
  const [userName, setUserName] = useState("Shamanth");
  return (
    <div>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Routers>
            <Header />
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/RestMenu/:resId" element={<RestMenu />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Routers>
        </UserContext.Provider>
      </Provider>
    </div>
  );
}

// let appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/RestMenu/:resId",
//     element: <RestMenu />,
//   },
//   {
//     path: "/about",
//     element: <AboutUs />,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />);

// reportWebVitals();
