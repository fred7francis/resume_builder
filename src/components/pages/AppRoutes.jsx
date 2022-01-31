import { Routes, Route } from "react-router-dom";
import Home from './Home';
import NotFound from './NotFound';
import Resume from "./Resume";
import Work from './Work';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Resume />} />
        <Route path="/view/:id" element={<Work />} />
        <Route path="/edit/:id" element={<Work />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);

export default AppRoutes;
