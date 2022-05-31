import { Route, Routes, BrowserRouter } from "react-router-dom"

import LoginScreen from "../components/login/LoginScreen"
import DashBoardRoutes from "./DashBoardRoutes"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/*" element={<DashBoardRoutes />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter