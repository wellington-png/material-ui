import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Details from './pages/Details';



export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/details" element={<Details/>} />
            </Routes>
        </BrowserRouter>
    )
}