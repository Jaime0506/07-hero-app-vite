import { Route, Routes, BrowserRouter } from "react-router-dom"

import LoginScreen from "../components/login/LoginScreen"
import DashBoardRoutes from "./DashBoardRoutes"

const AppRouter = () => {
    return (
        <BrowserRouter basename="https://jaime0506.github.io/07-hero-app-vite/">
            <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/*" element={<DashBoardRoutes />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter