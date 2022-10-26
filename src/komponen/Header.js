import Navigasi from "./Navigasi";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Home';
import './style.css';
import DetailDune from './DetailDune'
import Detailjoker from "./DetailJoker";
import Detailspider from "./Detailspider";
import Detailmorbius from "./Detailmorbius";
import Detailsuperman from "./Detailsuperman";
import Detailrobin from "./Detailrobin";
import Detailbatman from "./Detailbatman";
import Detaillightyear from "./Detaillightyear";
import Detaileverything from "./Detaileverything";
import Detailantman from "./Detailantman";
import Detailavanger from "./Detailavangers";
import Detailinfinite from "./Detailinfinite";

const Header = () => {
    return (
        <>
         <Navigasi />
         <BrowserRouter>
         <Routes>
            <Route index element={<Home />} />
            <Route path="Dune" element={<DetailDune />} />
            <Route path="Joker" element={<Detailjoker />} />
            <Route path="Spiderman" element={<Detailspider />} />
            <Route path="Morbius" element={<Detailmorbius />} />
            <Route path="Superman" element={<Detailsuperman />} />
            <Route path="robinhood" element={<Detailrobin />} />
            <Route path="Batman" element={<Detailbatman />} />
            <Route path="lightyear" element={<Detaillightyear />} />
            <Route path="everything" element={<Detaileverything />} />
            <Route path="antman" element={<Detailantman />} />
            <Route path="avanger" element={<Detailavanger />} />
            <Route path="infinite" element={<Detailinfinite />} />
         </Routes> 
         </BrowserRouter>
        </>
    )
}

export default Header;