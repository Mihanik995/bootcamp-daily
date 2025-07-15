import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Shop from "./pages/Shop.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='profile' element={<Profile/>}/>
                <Route path='shop' element={<Shop/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
