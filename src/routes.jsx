import { createBrowserRouter } from "react-router"
import LoginPage from "./components/pages/login/LoginPage"

export const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    Component: LoginPage
  },
])