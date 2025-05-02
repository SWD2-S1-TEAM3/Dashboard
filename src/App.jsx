import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainDashboard from "./components/MainDashboard/MainDashboard";
import NFTMarketplace from "./components/NFTMarketplace/NFTMarketplace";
import DataTables from "./components/DataTables/DataTables";
import Profile from "./components/Profile/Profile";
import SignIn from "./components/SignIn/SignIn";
import Layout from "./components/Layout/Layout";
import Notfound from "./components/Notfound/Notfound";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  let routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <MainDashboard /> },
        { path: "DataTables", element: <DataTables /> },
        { path: "MainDashboard", element: <MainDashboard /> },
        { path: "NFTMarketplace", element: <NFTMarketplace /> },
        { path: "Profile", element: <Profile /> },
        { path: "*", element: <Notfound /> },
      ],
    },
    { path: "SignIn", element: <SignIn /> },
  ]);

  return (
    <>
      <ThemeProvider>
        <RouterProvider router={routers}></RouterProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
