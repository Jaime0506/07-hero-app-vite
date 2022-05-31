import { Routes, Route } from "react-router-dom"
import Navbar from "../components/ui/Navbar"

import MarvelScreen from "../components/marvel/MarvelScreen"
import DcScreen from "../components/dc/DcScreen"
import SearchScreen from "../components/search/SearchScreen"
import HeroScreen from "../components/hero/HeroScreen"

const DashBoardRoutes = () => {
    return (
        <>
            <Navbar />
            
            <div className="container">
                <Routes>
                    <Route path="/" element={<MarvelScreen />} />
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DcScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:heroId" element={<HeroScreen />} />
                </Routes>
            </div>
        </>
    )
}

export default DashBoardRoutes