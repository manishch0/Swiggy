import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import About from "./Component/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResturantMenu from "./Component/ResturantMenu";
import ErrorPage from "./Component/ErrorPage";
import Support from "./Component/Support";
import SingIN from "./Component/SingIN";
import { lazy, Suspense, useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
// import InstaMart from "./Component/InstaMart";
import UserContext from "./Utils/useContext";
import Cart from "./Component/Cart";
// import { Provider } from "react-redux";
// import store from "./Utils/store";

const InstaMart = lazy(() => import("./Component/InstaMart"));

function App() {
  const [user, setUser] = useState({
    user: {
      name: "Rajat",
      email: "Rajat@gmail.com",
    },
  });

  // useEffect(() => {}, []);

  return (
    <>
      {/* <Provider store={store}> */}
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <BrowserRouter>
          <div>
            <Routes>
              <Route element={<Header />} path="/" />
              <Route element={<SingIN />} path="/singin" />
              <Route element={<ResturantMenu />} path="/" />
              <Route element={<About />} path="/about" />
              <Route element={<Support />} path="/support" />
              <Route element={<ResturantMenu />} path="/resturant/:id" />
              <Route element={<Cart />} path="/cart" />
              <Route
                element={
                  <Suspense fallback={<Shimmer />}>
                    <InstaMart />
                  </Suspense>
                }
                path="/instamart"
              />
            </Routes>
          </div>
        </BrowserRouter>
      </UserContext.Provider>
      {/* </Provider> */}
    </>
  );
}

{
  /* <Header />
<ResturantMenu /> */
}

// const AppRoter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <Body />,
//       },
//       {
//         path: "/About",
//         element: <About />,
//       },
//       {
//         path: "/Support",
//         element: <Support />,
//       },
//       {
//         path: "/resturant/:id",
//         element: <ResturantMenu />,
//       },
//     ],
//   },
// ]);

export default App;

{
  // header
  // -logo
  // - nav Items(right side)
  // - cart
  // Body
  // -search bar
  // -restrauntList
  //  -Image
  //  -Name
  //  -Rating
  //  -cusines
  // footer
  // -links
  // -copyrights
}
