import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./App"
import NotFound from "./Notfound"
import MainPage from "./MainPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/main',
    element: <MainPage />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}