import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Page404 } from './pages/Page404/Page404'


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/">
            <Route index element={<Home />} />
            <Route path="*" element={<Page404 />} />
            </Route>
        </Routes>
    )
}